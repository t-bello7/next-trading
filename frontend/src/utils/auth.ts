import { PrismaAdapter } from "@auth/prisma-adapter"
import type { Adapter } from "next-auth/adapters";
import { PrismaClient } from "@prisma/client"
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from './prisma';
import { random } from "cypress/types/lodash";

const {
    GOOGLE_CLIENT_ID ='',
    GOOGLE_CLIENT_SECRET = ''
} = process.env

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com",
                },
                password: { label: "Password", type: "password"},
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })

                if (!user){
                    return null
                }

                if (user.password) {
                    const isPasswordValid = await compare(
                        credentials.password,
                        user.password
                    )
    
                    if (!isPasswordValid) {
                        return null
                    }
                }  
                
                return {
                    id: user.id + '',
                    email: user.email,
                    randomKey: 'Hey cool'
                }
            }
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            // console.log('Sesson callback', {token, session})

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey
                }  
            }
        },
        jwt: ({ token, user }) => {
            // console.log('JWT Callback', {token, user})
            if (user) {
                const u = user as unknown as any
                return {
                    ...token,
                    id: u .id,
                    randomKey: u.randomKey
                }
            }
            return token
        }
    }
}

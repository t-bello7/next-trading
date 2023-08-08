import NextAuth from "next-auth/next";
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const {
    GOOGLE_CLIENT_ID ='',
    GOOGLE_CLIENT_SECRET = ''
} = process.env

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma), 
    providers: [
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
    ]
}

const authHandler = NextAuth(authOptions);
export default async function handler(...params: any[]) {
    await authHandler(...params);
  }
import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/auth";

const authHandler = NextAuth(authOptions);
export default async function handler(...params: any[]) {
    await authHandler(...params);
}
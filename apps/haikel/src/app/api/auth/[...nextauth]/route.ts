import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { env } from "~env.mjs";
import prisma from "~lib/utils/prisma";

const {
  NEXT_PUBLIC_GITHUB_ID,
  NEXT_PUBLIC_GITHUB_SECRET,
  NEXT_PUBLIC_GOOGLE_ID,
  NEXT_PUBLIC_GOOGLE_SECRET,
  NEXTAUTH_SECRET,
} = env;

const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: NEXT_PUBLIC_GITHUB_ID,
      clientSecret: NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
});

export { authOptions as GET, authOptions as POST };

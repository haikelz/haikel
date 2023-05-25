import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  NEXTAUTH_SECRET,
} from "~lib/utils/constants";
import prisma from "~lib/utils/prisma";

const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: NEXTAUTH_SECRET,
});

export { authOptions as GET, authOptions as POST };

import type { NextAuthOptions } from "next-auth";
import { Awaitable, User } from "next-auth/core/types";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { env } from "~env.mjs";

const {
  NEXT_PUBLIC_GITHUB_ID,
  NEXT_PUBLIC_GITHUB_SECRET,
  NEXT_PUBLIC_GOOGLE_ID,
  NEXT_PUBLIC_GOOGLE_SECRET,
  NEXTAUTH_SECRET,
  GITHUB_USERNAME,
  EMAIL_NAME,
} = env;

export const options: NextAuthOptions = {
  theme: {
    colorScheme: "auto",
  },
  providers: [
    GithubProvider({
      profile(profile: GithubProfile): Awaitable<User> {
        return {
          ...profile,
          role: profile.login === GITHUB_USERNAME ? "admin" : "guest",
          name: profile.name,
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      clientId: NEXT_PUBLIC_GITHUB_ID,
      clientSecret: NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile: GoogleProfile): Awaitable<User> {
        return {
          ...profile,
          role: profile.email === EMAIL_NAME ? "admin" : "guest",
          name: profile.name,
          id: profile.sub,
          image: profile.picture,
        };
      },
      clientId: NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};

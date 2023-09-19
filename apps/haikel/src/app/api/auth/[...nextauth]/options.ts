import { NextAuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { env } from "~env.mjs";

const {
  NEXT_PUBLIC_GITHUB_ID,
  NEXT_PUBLIC_GITHUB_SECRET,
  NEXT_PUBLIC_GOOGLE_ID,
  NEXT_PUBLIC_GOOGLE_SECRET,
  NEXTAUTH_SECRET,
} = env;

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      profile(profile: GithubProfile) {
        return { ...profile, id: profile.id.toString(), image: profile.avatar_url };
      },
      clientId: NEXT_PUBLIC_GITHUB_ID,
      clientSecret: NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
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
};

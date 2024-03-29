import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TURSO_DATABASE_URL: z.string().min(1),
    TURSO_AUTH_TOKEN: z.string().min(1),
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1),
    NEXT_PUBLIC_SECRET_TOKEN: z.string().min(1),
    NEXT_PUBLIC_GITHUB_SECRET: z.string().min(1),
    NEXT_PUBLIC_GITHUB_ID: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_ID: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_SECRET: z.string().min(1),
    NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SECRET_KEY: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url().min(1),
    NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
    EMAIL_NAME: z.string().min(1).email(),
  },
  client: {
    NEXT_PUBLIC_PRODUCTION_URL: z.string().min(1).url(),
    NEXT_PUBLIC_DEVELOPMENT_URL: z.string().min(1).url(),
    NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_PRODUCTION_URL: process.env.NEXT_PUBLIC_PRODUCTION_URL,
    NEXT_PUBLIC_DEVELOPMENT_URL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL,
    NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY:
      process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
  },
});

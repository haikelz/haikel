import type { Config } from "drizzle-kit";
import { env } from "~env.mjs";

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = env;

export default {
  schema: "./drizzle/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
  },
} satisfies Config;

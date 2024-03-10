import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();

export default {
  schema: "./drizzle/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url: `libsql://${process.env.TURSO_DATABASE_URL as string}`,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  },
} satisfies Config;

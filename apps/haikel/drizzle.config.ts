import "dotenv/config";
import type { Config } from "drizzle-kit";
import { env } from "~env.mjs";

const { DATABASE_URL } = env;

export default {
  schema: "./src/lib/utils/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;

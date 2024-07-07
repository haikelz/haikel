import * as dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./drizzle/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url: `libsql://${process.env.TURSO_DATABASE_URL as string}`,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  },
};

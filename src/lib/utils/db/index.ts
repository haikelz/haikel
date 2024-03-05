import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

const connection = new Client({
  url: process.env.DATABASE_URL,
});

const db = drizzle(connection);
export default db;

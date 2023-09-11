import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { env } from "~env.mjs";

const { DATABASE_URL } = env;

const connection = connect({
  url: DATABASE_URL,
});

const db = drizzle(connection);
export default db;

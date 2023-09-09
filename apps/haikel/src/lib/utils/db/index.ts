import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { env } from "~env.mjs";

const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } = env;

const connection = connect({
  host: DATABASE_HOST,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
});

const db = drizzle(connection);
export default db;

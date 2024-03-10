import { createClient } from "@libsql/client/http";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

dotenv.config();

const connection = createClient({
  url: `libsql://${process.env.TURSO_DATABASE_URL as string}`,
  authToken: process.env.TURSO_AUTH_TOKEN as string,
});

const db = drizzle(connection, { schema });
export default db;

import { createClient } from "@libsql/client/http";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "~env.mjs";

import * as schema from "./schema";

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = env;

const connection = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});

const db = drizzle(connection, { schema });
export default db;

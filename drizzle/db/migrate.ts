import { migrate } from "drizzle-orm/libsql/migrator";

import db from "./index";

async function main() {
  await migrate(db, { migrationsFolder: "drizzle/migrations" });
}

main();

import { sql } from "drizzle-orm";
import {
  AnyMySqlColumn,
  datetime,
  int,
  mysqlSchema,
  mysqlTable,
  primaryKey,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/mysql-core";

export const accounts = mysqlTable(
  "accounts",
  {
    id: varchar("id", { length: 191 }).notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    type: varchar("type", { length: 191 }).notNull(),
    provider: varchar("provider", { length: 191 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 191 }).notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: int("expires_at"),
    tokenType: varchar("token_type", { length: 191 }),
    scope: varchar("scope", { length: 191 }),
    idToken: text("id_token"),
    sessionState: varchar("session_state", { length: 191 }),
  },
  (table) => {
    return {
      accountsProviderProviderAccountIdKey: unique("accounts_provider_provider_account_id_key").on(
        table.provider,
        table.providerAccountId
      ),
    };
  }
);

export const guestbook = mysqlTable(
  "guestbook",
  {
    id: int("id").autoincrement().notNull(),
    createdAt: datetime("created_at", { mode: "string", fsp: 3 })
      .default(sql`CURRENT_TIMESTAMP(3)`)
      .notNull(),
    email: varchar("email", { length: 191 }).notNull(),
    username: varchar("username", { length: 191 }).notNull(),
    message: varchar("message", { length: 191 }).notNull(),
    userId: varchar("userId", { length: 191 }),
  },
  (table) => {
    return {
      guestbookId: primaryKey(table.id),
    };
  }
);

export const sessions = mysqlTable(
  "sessions",
  {
    id: varchar("id", { length: 191 }).notNull(),
    sessionToken: varchar("sessionToken", { length: 191 }).notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    expires: datetime("expires", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      sessionsSessionTokenKey: unique("sessions_session_token_key").on(table.sessionToken),
    };
  }
);

export const verificationTokens = mysqlTable(
  "verificationTokens",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      verificationTokensIdentifierToken: primaryKey(table.identifier, table.token),
    };
  }
);

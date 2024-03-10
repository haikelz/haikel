import { sqliteTable, AnySQLiteColumn, numeric, text, foreignKey, primaryKey, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
	id: numeric("id").primaryKey(),
	hash: text("hash").notNull(),
	createdAt: numeric("created_at"),
});

export const account = sqliteTable("account", {
	userId: text("userId").notNull().references(() => guestbook.id, { onDelete: "cascade" } ),
	type: text("type").notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("providerAccountId").notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text("scope"),
	idToken: text("id_token"),
	sessionState: text("session_state"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.provider, table.providerAccountId], name: "account_provider_providerAccountId_pk"})
	}
});

export const guestbook = sqliteTable("guestbook", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	email: numeric("email").notNull(),
	username: numeric("username").notNull(),
	message: numeric("message").notNull(),
	userId: numeric("userId"),
});

export const session = sqliteTable("session", {
	sessionToken: text("sessionToken").primaryKey().notNull(),
	userId: text("userId").notNull().references(() => guestbook.id, { onDelete: "cascade" } ),
	expires: integer("expires").notNull(),
});

export const verificationToken = sqliteTable("verificationToken", {
	identifier: text("identifier").notNull(),
	token: text("token").notNull(),
	expires: integer("expires").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.identifier, table.token], name: "verificationToken_identifier_token_pk"})
	}
});
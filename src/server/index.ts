import { initTRPC } from "@trpc/server";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";
import db from "~lib/utils/db";
import { guestbook } from "~lib/utils/db/schema";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

async function submitMessage<T extends string>(message: T, email: T, username: T) {
  try {
    await db.insert(guestbook).values({ message: message, email: email, username: username });
  } catch (err) {
    console.error(err);
  }
}

async function getGuestbook(key: string) {
  try {
    const data = await db
      .select({
        id: guestbook.id,
        message: guestbook.message,
        email: guestbook.email,
        username: guestbook.username,
        created_at: guestbook.created_at,
      })
      .from(guestbook)
      .orderBy(sql`${guestbook.id} desc`);

    return data;
  } catch (err) {
    console.error(err);
  }
}

async function deleteMessage(id: number) {
  try {
    await db.delete(guestbook).where(eq(guestbook.id, id));
  } catch (err) {
    console.error(err);
  }
}

async function patchMessage(id: number, message: string) {
  try {
    await db.update(guestbook).set({ message: message }).where(eq(guestbook.id, id));
  } catch (err) {
    console.error(err);
  }
}

export const appRouter = router({
  get: publicProcedure.input(z.object({ key: z.string() })).query(async ({ input }) => {
    const guestbook = await getGuestbook(input.key);
    return guestbook;
  }),

  post: publicProcedure
    .input(
      z.object({
        message: z.string(),
        email: z.string(),
        username: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await submitMessage(input.message, input.email, input.username);
    }),

  delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
    await deleteMessage(input.id);
  }),

  patch: publicProcedure
    .input(z.object({ id: z.number(), message: z.string() }))
    .mutation(async ({ input }) => {
      await patchMessage(input.id, input.message);
    }),
});

export type AppRouter = typeof appRouter;

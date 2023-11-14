import { initTRPC } from "@trpc/server";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";
import db from "~lib/utils/db";
import { guestbook } from "~lib/utils/db/schema";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  get: publicProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await db
          .select({
            id: guestbook.id,
            message: guestbook.message,
            email: guestbook.email,
            username: guestbook.username,
            created_at: guestbook.created_at,
          })
          .from(guestbook)
          .orderBy(sql`${guestbook.id} desc`);

        return response;
      } catch (err) {
        console.error(err);
      }
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
      try {
        await db.insert(guestbook).values({
          message: input.message,
          email: input.email,
          username: input.username,
        });
      } catch (err) {
        console.error(err);
      }
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      try {
        await db.delete(guestbook).where(eq(guestbook.id, input.id));
      } catch (err) {
        console.error(err);
      }
    }),

  patch: publicProcedure
    .input(z.object({ id: z.number(), message: z.string() }))
    .mutation(async ({ input }) => {
      try {
        await db
          .update(guestbook)
          .set({ message: input.message })
          .where(eq(guestbook.id, input.id));
      } catch (err) {
        console.error(err);
      }
    }),
});

export type AppRouter = typeof appRouter;

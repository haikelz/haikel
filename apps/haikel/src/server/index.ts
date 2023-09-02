import { initTRPC } from "@trpc/server";
import { z } from "zod";
import db from "~lib/utils/db";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

async function submitMessage<T extends string>(message: T, email: T, username: T) {
  const { error } = await db.from("guestbook").insert([
    {
      message: message,
      email: email,
      username: username,
    },
  ]);

  if (error) throw error;
}

async function getGuestbook(key: string) {
  const { data, error } = await db.from(key).select().order("id", { ascending: false });
  if (error) throw error;

  return data;
}

export const appRouter = router({
  get: publicProcedure.input(z.object({ key: z.string() })).query(async ({ input }) => {
    const guestbook = await getGuestbook(input.key);
    return guestbook;
  }),

  post: publicProcedure
    .input(z.object({ message: z.string(), username: z.string(), email: z.string() }))
    .mutation(async ({ input }) => {
      await submitMessage(input.message, input.email, input.username);
    }),
});

export type AppRouter = typeof appRouter;

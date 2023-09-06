import { initTRPC } from "@trpc/server";
import { z } from "zod";
import prisma from "~lib/utils/prisma";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

async function submitMessage<T extends string>(message: T, email: T, username: T) {
  await prisma.guestbook.create({ data: { message, email, username } });
}

async function getGuestbook(key: string) {
  const data = await prisma.guestbook.findMany({
    where: {},
    orderBy: { id: "desc" },
    select: { id: true, username: true, message: true, email: true, created_at: true },
  });
  return data;
}

async function deleteMessage(id: number) {
  await prisma.guestbook.delete({ where: { id: id } });
}

async function updateMessage(id: number, message: string) {
  await prisma.guestbook.update({ where: { id: id }, data: { message: message } });
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

  delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
    await deleteMessage(input.id);
  }),

  update: publicProcedure
    .input(z.object({ id: z.number(), message: z.string() }))
    .mutation(async ({ input }) => {
      await updateMessage(input.id, input.message);
    }),
});

export type AppRouter = typeof appRouter;
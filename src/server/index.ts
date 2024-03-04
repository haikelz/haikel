import { initTRPC } from "@trpc/server";
import { z } from "zod";
import {
  deleteGuestbook,
  getGuestbook,
  patchGuestbook,
  postGuestbook,
} from "~features";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  get: publicProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ input }) => {
      const response = await getGuestbook();
      return response;
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
      await postGuestbook(input);
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await deleteGuestbook(input);
    }),

  patch: publicProcedure
    .input(z.object({ id: z.number(), message: z.string() }))
    .mutation(async ({ input }) => {
      await patchGuestbook(input);
    }),
});

export type AppRouter = typeof appRouter;

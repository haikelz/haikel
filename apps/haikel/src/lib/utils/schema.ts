import { z } from "zod";

export const messageSchema = z.object({
  message: z.string().min(1, { message: "The message characters must have more than 1 character" }),
});

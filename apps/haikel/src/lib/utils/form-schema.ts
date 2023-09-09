import { z } from "zod";

export const messageSchema = z.object({
  message: z.string().min(1, {
    message: "Your message must contain at least 1 character!",
  }),
});

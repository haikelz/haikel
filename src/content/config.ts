import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().min(2),
    title: z.string().min(2),
    tags: z.array(z.string().min(2)),
    date: z.date(),
    description: z.string(),
  }),
});

const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    author: z.string().min(2),
    title: z.string().min(2),
    stack: z.array(z.string().min(2)),
    description: z.string().min(2),
    preview: z.string().min(2),
    repo: z.string().min(2),
  }),
});

export const collections = {
  notes: notesCollection,
  works: worksCollection,
};

import { z } from "zod";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const NoteMeta = z.object({
  author: z.string(),
  preview: z.string(),
  slug: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  date: z.string(),
});

const Note = z.object({
  content: z.string(),
  meta: NoteMeta,
});

const VideoProps = z.object({
  title: z.string(),
  src: z.string(),
});

const NotesArticles = z.object({
  notes: z.array(NoteMeta),
});

const Tag = z.object({
  slug: z.string(),
  notes: z.array(NoteMeta),
});

const Paths = z.object({
  params: z.array(z.object({ slug: z.string() })),
});

const NotesProps = z.object({
  notes: z.array(NoteMeta),
});

export type MDXnote = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: NoteMeta;
};

export type NotePageProps = {
  note: MDXnote;
};

export type NoteMeta = z.infer<typeof NoteMeta>;
export type Note = z.infer<typeof Note>;
export type NotesArticles = z.infer<typeof NotesArticles>;
export type Tag = z.infer<typeof Tag>;
export type Paths = z.infer<typeof Paths>;
export type VideoProps = z.infer<typeof VideoProps>;
export type NotesProps = z.infer<typeof NotesProps>;

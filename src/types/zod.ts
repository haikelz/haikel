import { z } from "zod";

const Theme = z.object({
  theme: z.string(),
  changeTheme: z.function(),
});

const LinkIcon = z.object({
  link: z.string().optional(),
  linkPreview: z.string().optional(),
  linkGithub: z.string().optional(),
});

const Stack = z.object({
  stack1: z.string().optional(),
  stack2: z.string().optional(),
});

const Keydown = z.object({
  isCtrlKey: z.boolean(),
  previousUrl: z.string(),
  nextUrl: z.string(),
});

const KeydownEvent = z.object({
  ctrlKey: z.boolean(),
  key: z.string(),
});

const List = z.object({
  setLoading: z.function().args(z.boolean()),
  isLoading: z.boolean(),
});

const Loading = z.object({
  isLoading: z.boolean(),
  loadingProcess: z.function(),
});

const ShowedModal = z.object({
  isShowed: z.boolean(),
  setIsShowed: z.function().args(z.boolean()),
});

const LazyLoadImageProps = z.object({
  src: z.string(),
  alt: z.string(),
});

// notes types
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

export type Theme = z.infer<typeof Theme>;
export type LinkIcon = z.infer<typeof LinkIcon>;
export type Stack = z.infer<typeof Stack>;
export type Loading = z.infer<typeof Loading>;
export type List = z.infer<typeof List>;
export type Keydown = z.infer<typeof Keydown>;
export type KeydownEvent = z.infer<typeof KeydownEvent>;
export type ShowedModal = z.infer<typeof ShowedModal>;
export type LazyLoadImageProps = z.infer<typeof LazyLoadImageProps>;
export type NoteMeta = z.infer<typeof NoteMeta>;
export type Note = z.infer<typeof Note>;
export type NotesArticles = z.infer<typeof NotesArticles>;
export type Tag = z.infer<typeof Tag>;
export type Paths = z.infer<typeof Paths>;
export type VideoProps = z.infer<typeof VideoProps>;
export type NotesProps = z.infer<typeof NotesProps>;

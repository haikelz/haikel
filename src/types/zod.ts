import { ReactNode } from "react";
import { TypeOf, z } from "zod";

type ChildrenProps = {
  children: ReactNode;
};

const ThemeProps = z.object({
  theme: z.string(),
  changeTheme: z.function(),
});

const LinkIconProps = z.object({
  link: z.string().optional(),
  linkPreview: z.string().optional(),
  linkGithub: z.string().optional(),
});

const StackProps = z.object({
  stack1: z.string().optional(),
  stack2: z.string().optional(),
});

const KeydownProps = z.object({
  isCtrlKey: z.boolean(),
  previousUrl: z.string(),
  nextUrl: z.string(),
});

const KeydownEventProps = z.object({
  ctrlKey: z.boolean(),
  key: z.string(),
});

const ListProps = z.object({
  setLoading: z.function().args(z.boolean()),
  isLoading: z.boolean(),
});

const LoadingProps = z.object({
  isLoading: z.boolean(),
  loadingProcess: z.function(),
});

const ShowedModalProps = z.object({
  isShowed: z.boolean(),
  setIsShowed: z.function().args(z.boolean()),
});

const LazyLoadImageProps = z.object({
  src: z.string(),
  alt: z.string(),
});

// notes types
const NoteMetaProps = z.object({
  author: z.string(),
  preview: z.string(),
  slug: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  date: z.string(),
});

const NoteProps = z.object({
  content: z.string(),
  meta: NoteMetaProps,
});

const VideoProps = z.object({
  title: z.string(),
  src: z.string(),
});

const NotesArticlesProps = z.object({
  notes: z.array(NoteMetaProps),
});

const TagProps = z.object({
  slug: z.string(),
  notes: z.array(NoteMetaProps),
});

const PathsProps = z.object({
  params: z.array(z.object({ slug: z.string() })),
});

const NotesProps = z.object({
  notes: z.array(NoteMetaProps),
});

const ParagraphProps = z.object({
  className: z.optional(z.string()),
  isCenter: z.boolean(),
});

const HeadingProps = z.object({
  // enum
  as: z.string(z.enum(["h1", "h2", "h3", "h4", "h5", "h6"])),
  className: z.string(),
});

const LayoutProps = z.object({
  className: z.string(),
});

const SeoProps = z.object({
  title: z.string(),
  description: z.string(),
});

export type ThemeProps = z.infer<typeof ThemeProps>;
export type LinkIconProps = z.infer<typeof LinkIconProps>;
export type StackProps = z.infer<typeof StackProps>;
export type LoadingProps = z.infer<typeof LoadingProps>;
export type ListProps = z.infer<typeof ListProps>;
export type KeydownProps = z.infer<typeof KeydownProps>;
export type KeydownEventProps = z.infer<typeof KeydownEventProps>;
export type ShowedModalProps = z.infer<typeof ShowedModalProps>;
export type LazyLoadImageProps = z.infer<typeof LazyLoadImageProps>;
export type NoteMetaProps = z.infer<typeof NoteMetaProps>;
export type NoteProps = z.infer<typeof NoteProps>;
export type NotesArticlesProps = z.infer<typeof NotesArticlesProps>;
export type TagProps = z.infer<typeof TagProps>;
export type PathsProps = z.infer<typeof PathsProps>;
export type VideoProps = z.infer<typeof VideoProps>;
export type NotesProps = z.infer<typeof NotesProps>;
export type ParagraphProps = ChildrenProps & z.infer<typeof ParagraphProps>;
export type HeadingProps = ChildrenProps & z.infer<typeof HeadingProps>;
export type LayoutProps = ChildrenProps & z.infer<typeof LayoutProps>;
export type SeoProps = z.infer<typeof SeoProps>;

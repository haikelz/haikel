import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type MDXnote = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: NoteMetaProps;
};

export type MDXWork = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: WorkMetaProps;
};

export type NotePageProps = {
  note: MDXnote;
};

export type WorkPageProps = {
  work: MDXWork;
};

export type LinkIconProps = {
  link?: string;
  linkPreview?: string;
  linkGithub?: string;
};

export type SeoProps = {
  title: string;
  description: string;
};

export type ThemeProps = {
  theme: string;
  changeTheme: () => void;
};

export type NoteMetaProps = {
  author: string;
  preview: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
};

export type WorkMetaProps = {
  author: string;
  preview: string;
  slug: string;
  title: string;
  tags: string[];
};

export type NoteProps = {
  content: string;
  meta: NoteMetaProps;
};

export type NotesProps = {
  notes: NoteMetaProps[];
};

export type WorksProps = {
  works: WorkMetaProps[];
};

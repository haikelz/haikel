import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";

type MDXNoteProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: NoteMetaProps;
  content: string;
};

type MDXWorkProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: WorkMetaProps;
  content: string;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type NotePageProps = {
  note: MDXNoteProps;
};

export type WorkPageProps = {
  work: MDXWorkProps;
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
  description: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
};

export type NotesProps = {
  notes: NoteMetaProps[];
};

export type NoteProps = {
  content: string;
  meta: NoteMetaProps;
};

export type WorkMetaProps = {
  id: string;
  author: string;
  description: string;
  slug: string;
  title: string;
  stack: string[];
  preview: string;
  repo: string;
};

export type WorkProps = {
  content: string;
  meta: WorkMetaProps;
};

export type WorksProps = {
  works: WorkMetaProps[];
};

export type GuestbookProps =
  | {
      [x: string]: any;
    }[]
  | null;

import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface NoteMeta {
  author: string;
  preview: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export interface Note {
  content: string;
  meta: NoteMeta;
}

export interface MDXnote {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: NoteMeta;
}

export interface NotesArticles {
  notes: NoteMeta[];
}

export interface Tag {
  slug: string;
  notes: NoteMeta[];
}

export interface Paths {
  params: {
    slug: string;
  }[];
}

export interface VideoProps {
  title: string;
  link: string;
}

export type NotePageProps = {
  note: MDXnote;
};

export type NotesProps = {
  notes: NoteMeta[];
};

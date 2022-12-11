import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
import { NoteMeta } from "./zod";

export type ChildrenProps = {
  children: ReactNode;
};

export type LayoutProps = ChildrenProps & {
  className: string;
};

export type ParagraphProps = {
  className?: string;
  children: ReactNode;
  isCenter: boolean;
};

export type MDXnote = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: NoteMeta;
};

export type NotePageProps = {
  note: MDXnote;
};

export * from "./zod";

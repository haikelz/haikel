import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
import { NoteMetaProps } from "./zod";

export type ChildrenProps = {
  children: ReactNode;
};

export type MDXnote = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: NoteMetaProps;
};

export type NotePageProps = {
  note: MDXnote;
};

export * from "./zod";

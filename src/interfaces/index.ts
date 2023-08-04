import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";

export interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  content: string;
}

export interface NoteMetaProps {
  author: string;
  description: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export interface WorkMetaProps {
  id: string;
  author: string;
  description: string;
  slug: string;
  title: string;
  stack: string[];
  preview: string;
  repo: string;
}

export interface GuestbookProps {
  id: string;
  created_at: string;
  email: string;
  username: string;
  message: string;
}

export interface IconClassNameProps {
  className?: string;
}

export interface ThemeProps {
  theme: string;
  changeTheme: () => void;
}

export interface ChildrenProps {
  children: ReactNode;
}

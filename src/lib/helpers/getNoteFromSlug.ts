import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { NoteProps } from "~types";
import { NOTES_PATH } from "../utils/NOTES_PATH";
import { date } from "./date";

export const getNoteFromSlug = (slug: string): NoteProps => {
  const notePath: string = path.join(NOTES_PATH, `${slug}.mdx`);
  const source: Buffer = fs.readFileSync(notePath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      author: data.author ?? slug,
      preview: data.preview ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? date).toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  };
};

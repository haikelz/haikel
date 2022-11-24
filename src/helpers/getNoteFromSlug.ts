import { NOTES_PATH } from "@/utils/NOTES_PATH";
import { Note } from "@/types";
import { date } from "./date";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

export const getNoteFromSlug = (slug: string): Note => {
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

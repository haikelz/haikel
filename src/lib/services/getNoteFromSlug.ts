import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { NOTES_PATH } from "../utils/contentsPath";

const date = new Date();

export function getNoteFromSlug(slug: string) {
  const notePath: string = path.join(NOTES_PATH, `${slug}.mdx`);
  const source: Buffer = readFileSync(notePath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      author: data.author ?? slug,
      description: data.description ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? date).toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  };
}

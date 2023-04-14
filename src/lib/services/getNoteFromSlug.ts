import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { NOTES_PATH } from "../utils/constants";

const date = new Date();

export function getNoteFromSlug(slug: string) {
  const notePath: string = join(NOTES_PATH, `${slug}.mdx`);
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

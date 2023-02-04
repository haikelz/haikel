import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { WORKS_PATH } from "~lib/utils/path";

export const getWorkFromSlug = (slug: string) => {
  const workPath: string = path.join(WORKS_PATH, `${slug}.mdx`);
  const source: Buffer = fs.readFileSync(workPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      author: data.author ?? slug,
      preview: data.preview ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
    },
  };
};

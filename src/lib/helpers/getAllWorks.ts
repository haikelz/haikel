import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { WORKS_PATH } from "~lib/utils/contentsPath";
import { WorkProps } from "~types";
import { getSlugs } from "./getSlugs";

const getWorkFromSlug = (slug: string) => {
  const workPath: string = path.join(WORKS_PATH, `${slug}.mdx`);
  const source: Buffer = readFileSync(workPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      id: data.id ?? slug.length,
      author: data.author ?? slug,
      description: data.description ?? "Tidak ada deskripsi",
      title: data.title ?? slug,
      stack: (data.stack ?? []).sort(),
      repo: data.repo ?? null,
      preview: data.preview ?? null,
    },
  };
};

export const getAllWorks = () => {
  // sort works based on id
  const works: WorkProps[] = getSlugs(WORKS_PATH)
    .map((slug) => getWorkFromSlug(slug))
    .sort((a, b) => a.meta.id - b.meta.id);
  return works;
};

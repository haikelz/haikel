import { WORKS_PATH } from "../utils/contentsPath";
import { WorkMetaProps } from "~models";
import { getSlugs } from "./getSlugs";
import { getWorkFromSlug } from "./getWorkFromSlug";

interface WorkProps {
  content: string;
  meta: WorkMetaProps;
}

export function getAllWorks() {
  // sort works based on id
  const works: WorkProps[] = getSlugs(WORKS_PATH)
    .map((slug) => getWorkFromSlug(slug))
    .sort((a, b) => a.meta.id - b.meta.id);
  return works;
}

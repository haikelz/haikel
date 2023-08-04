import { WorkMetaProps } from "~interfaces";

import { WORKS_PATH } from "../utils/constants";
import { getSlugs } from "./get-slugs";
import { getWorkFromSlug } from "./get-work-from-slug";

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

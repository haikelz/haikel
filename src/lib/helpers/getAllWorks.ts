import { WORKS_PATH } from "~lib/utils/path";
import { WorkProps } from "~types";
import { getSlugs } from "./getSlugs";
import { getWorkFromSlug } from "./getWorkFromSlug";

export const getAllWorks = () => {
  // sort works based on id
  const works: WorkProps[] = getSlugs(WORKS_PATH)
    .map((slug) => getWorkFromSlug(slug))
    .sort((a, b) => a.meta.id - b.meta.id);
  return works;
};

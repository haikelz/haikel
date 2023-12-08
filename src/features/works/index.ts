import { Works, allWorks } from "contentlayer/generated";

export const sortedAllWorks: Works[] = allWorks.sort((a, b) => a.id - b.id);

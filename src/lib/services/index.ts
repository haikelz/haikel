import { Notes, Works, allNotes, allWorks } from "contentlayer/generated";

export const sortedAllNotes: Notes[] = allNotes.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const sortedAllWorks: Works[] = allWorks.sort((a, b) => a.id - b.id);

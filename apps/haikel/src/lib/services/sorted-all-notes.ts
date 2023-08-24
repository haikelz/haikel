import { Notes, allNotes } from "contentlayer/generated";

export const sortedAllNotes: Notes[] = allNotes.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

import { getSlugs } from "./getSlugs";
import { getNoteFromSlug } from "./getNoteFromSlug";
import { Note } from "../types";

export const getAllNotes = () => {
  // sort notes based on date
  const notes: Note[] = getSlugs()
    .map((slug) => getNoteFromSlug(slug))
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  return notes;
};

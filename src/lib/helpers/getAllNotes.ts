import { NOTES_PATH } from "~lib/utils/contentsPath";
import { NoteMetaProps } from "~models";
import { getNoteFromSlug } from "./getNoteFromSlug";
import { getSlugs } from "./getSlugs";

interface NoteProps {
  content: string;
  meta: NoteMetaProps;
}

export const getAllNotes = () => {
  // sort notes based on date
  const notes: Array<NoteProps> = getSlugs(NOTES_PATH)
    .map((slug) => getNoteFromSlug(slug))
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  return notes;
};

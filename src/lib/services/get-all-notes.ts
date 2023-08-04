import { NoteMetaProps } from "~interfaces";

import { NOTES_PATH } from "../utils/constants";
import { getNoteFromSlug } from "./get-note-from-slug";
import { getSlugs } from "./get-slugs";

interface NoteProps {
  content: string;
  meta: NoteMetaProps;
}

export function getAllNotes() {
  // sort notes based on date
  const notes: NoteProps[] = getSlugs(NOTES_PATH)
    .map((slug) => getNoteFromSlug(slug))
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  return notes;
}

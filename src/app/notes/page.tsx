import NotesClient from "~sections/NotesClient";
import { cxm } from "~lib/helpers/cxm";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import type { NoteMetaProps } from "~models";
import Seo from "~ui/Seo";

export default function Notes() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, getAllNotes().length)
    .map((note) => note.meta);

  return (
    <Seo
      title="Notes"
      description="Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as Notes."
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <NotesClient notes={notes} />
    </Seo>
  );
}

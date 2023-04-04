/**
 * TODO: implement search notes
 */
import { ListNotes } from "~ui/lists";
import { cxm } from "~lib/helpers/cxm";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import type { NoteMetaProps } from "~models";
import Seo from "~ui/Seo";
import { Heading, Paragraph, Underline } from "~ui/typography";

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
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="title-font text-left">
            Notes
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>
            Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as{" "}
            <b>Notes</b>.
          </Paragraph>
        </div>
      </section>
      <section className="mb-10 mt-6 flex w-full flex-col space-y-8">
        <ListNotes filteredNotes={notes} />
      </section>
    </Seo>
  );
}

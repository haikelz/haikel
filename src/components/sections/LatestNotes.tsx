import { NoteMetaProps } from "~models";
import { ListNotes } from "~ui/lists";
import { Heading, Underline, UnderlineLink } from "~ui/typography";

export default function LatestNotes({ notes }: { notes: NoteMetaProps[] }) {
  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className="flex w-full flex-col items-start justify-start">
        <div>
          <Heading as="h2">Latest Notes</Heading>
          <Underline />
        </div>
        <div className="mb-8 mt-6 flex w-full flex-col space-y-8">
          <ListNotes filteredNotes={notes} />
        </div>
        <div className="flex w-full items-start justify-start">
          <UnderlineLink href="/notes" role="button" aria-label="latest notes">
            See more notes
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}

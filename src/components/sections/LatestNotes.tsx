import Link from "next/link";
import { NoteMetaProps } from "~types";
import ListNotes from "~ui/lists/ListNotes";
import { Heading, Underline, UnderlineSpan } from "~ui/typography";

const LatestNotes = ({ notes }: { notes: NoteMetaProps[] }) => {
  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className="flex w-full flex-col items-start justify-start">
        <div>
          <Heading as="h2">Latest Notes</Heading>
          <Underline />
        </div>
        <div className="mt-6 mb-8 flex w-full flex-col space-y-8">
          <ListNotes filteredNotes={notes} />
        </div>
        <div className="flex w-full items-start justify-start">
          <Link role="button" href="/notes" className="w-fit text-left" aria-label="More Notes">
            <UnderlineSpan>See more notes</UnderlineSpan>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNotes;

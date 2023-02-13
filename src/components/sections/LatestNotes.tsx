import Link from "next/link";
import { NoteMetaProps } from "~types";
import ListNotes from "~ui/lists/ListNotes";
import { Heading, Underline, UnderlineSpan } from "~ui/typography";

const LatestNotes = ({ notes }: { notes: NoteMetaProps[] }) => {
  return (
    <section className="flex w-full flex-wrap items-center justify-center">
      <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4">
        <div>
          <Heading as="h2" className="text-center">
            Latest Notes
          </Heading>
          <Underline />
        </div>
        <div className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-5 sm:grid-cols-2">
          <ListNotes filteredNotes={notes} />
        </div>
        <div className="mt-3 flex w-full items-end justify-end">
          <Link role="button" href="/notes" className="w-fit text-right" aria-label="More Notes">
            <UnderlineSpan>See more notes</UnderlineSpan>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNotes;

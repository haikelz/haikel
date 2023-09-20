import { Notes, Works } from "contentlayer/generated";
import About from "~components/about";
import Main from "~components/main";
import { tw } from "~lib/helpers";
import { sortedAllNotes, sortedAllWorks } from "~lib/services";
import { NotesList, WorksList } from "~ui/lists";
import { Heading, Underline, UnderlineLink } from "~ui/typography";

export default async function HomePage() {
  const notes: Notes[] = sortedAllNotes.slice(0, 4);
  const works: Works[] = sortedAllWorks.slice(0, 4);

  return (
    <Main className={tw("flex flex-col items-start justify-start", "py-8")}>
      <About />
      <section className="mb-12 flex w-full flex-wrap items-center justify-center">
        <div className="flex w-full flex-col items-start justify-start">
          <div>
            <Heading as="h2">Featured Works</Heading>
            <Underline />
          </div>
          <div className="mb-8 mt-6 flex w-full flex-col space-y-8">
            <WorksList works={works} />
          </div>
          <div className="flex w-full items-end justify-start">
            <UnderlineLink href="/works" role="button" aria-label="See more works">
              See more works
            </UnderlineLink>
          </div>
        </div>
      </section>
      <section className="mb-12 flex w-full flex-wrap items-center justify-center">
        <div className="flex w-full flex-col items-start justify-start">
          <div>
            <Heading as="h2">Latest Notes</Heading>
            <Underline />
          </div>
          <div className="mb-8 mt-6 flex w-full flex-col space-y-8">
            <NotesList filteredNotes={notes} />
          </div>
          <div className="flex w-full items-start justify-start">
            <UnderlineLink href="/notes" role="button" aria-label="See more notes">
              See more notes
            </UnderlineLink>
          </div>
        </div>
      </section>
    </Main>
  );
}

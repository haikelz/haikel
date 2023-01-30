import type { GetStaticProps } from "next";
import Link from "next/link";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import About from "~sections/About";
import FeaturedWorks from "~sections/FeaturedWorks";
import { NoteMetaProps, NotesProps } from "~types";
import ListNotes from "~ui/lists/ListNotes";
import Layout from "~ui/templates/Layout";
import { Heading, Underline, UnderlineSpan } from "~ui/typography";

export const getStaticProps: GetStaticProps = async () => {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);

  return {
    props: {
      notes,
    },
  };
};

const Home = ({ notes }: NotesProps) => {
  return (
    <Layout
      title="Haikel"
      description="A person who interested in Frontend stuff"
      className="flex flex-col items-center justify-center pt-6 pb-12 md:pt-12"
    >
      <About />
      <FeaturedWorks />
      {/** Latest Notes */}
      <section className="flex w-full flex-wrap items-center justify-center">
        <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4">
          <div>
            <Heading as="h2" className="text-center">
              Latest Notes
            </Heading>
            <Underline />
          </div>
          <div className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
            <ListNotes filteredNotes={notes} />
          </div>
          <div className="mt-3 flex w-full items-end justify-end">
            <Link role="button" href="/notes" className="w-fit text-right" aria-label="More Notes">
              <UnderlineSpan>See more notes</UnderlineSpan>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

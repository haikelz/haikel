import type { GetStaticProps } from "next";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import { getAllWorks } from "~lib/helpers/getAllWorks";
import About from "~sections/About";
import FeaturedWorks from "~sections/FeaturedWorks";
import LatestNotes from "~sections/LatestNotes";
import { NoteMetaProps, WorkMetaProps } from "~types";
import Layout from "~ui/templates/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);

  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, 4)
    .map((work) => work.meta);

  return {
    props: {
      notes,
      works,
    },
  };
};

type InitialDataProps = {
  notes: NoteMetaProps[];
  works: WorkMetaProps[];
};

const Home = ({ notes, works }: InitialDataProps) => {
  return (
    <Layout
      title="Haikel"
      description="A person who interested in Frontend stuff"
      className="flex flex-col items-center justify-center pt-6 pb-12 md:pt-12"
    >
      <About />
      <FeaturedWorks works={works} />
      <LatestNotes notes={notes} />
    </Layout>
  );
};

export default Home;

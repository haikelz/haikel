import type { GetStaticProps } from "next";
import { twJoin } from "tailwind-merge";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import { getAllWorks } from "~lib/helpers/getAllWorks";
import About from "~sections/About";
import FeaturedWorks from "~sections/FeaturedWorks";
import LatestNotes from "~sections/LatestNotes";
import { NoteMetaProps, WorkMetaProps } from "~types";
import Layout from "~ui/layout";

type InitialDataProps = {
  notes: NoteMetaProps[];
  works: WorkMetaProps[];
};

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

const Home = ({ notes, works }: InitialDataProps) => {
  return (
    <Layout
      title="Haikel"
      description="A person who interested in Frontend stuff"
      className={twJoin("flex flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <About />
      <FeaturedWorks works={works} />
      <LatestNotes notes={notes} />
    </Layout>
  );
};

export default Home;

import type { GetStaticProps } from "next";
import { twJoin } from "tailwind-merge";
import { getAllNotes, getAllWorks } from "~lib/helpers";
import { NoteMetaProps, WorkMetaProps } from "~models";
import { About, FeaturedWorks, LatestNotes } from "~sections";
import Layout from "~ui/layout";

interface InitialDataProps {
  notes: Array<NoteMetaProps>;
  works: Array<WorkMetaProps>;
}

export const getStaticProps: GetStaticProps = async () => {
  const notes: Array<NoteMetaProps> = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);

  const works: Array<WorkMetaProps> = getAllWorks()
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

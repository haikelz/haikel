import ListNotes from "@/components/organisms/listNotes";
import Underline from "@/components/atoms/underline";
import { getAllnotes } from "@/helpers/getAllNotes";
import { Note, Tag } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export const getStaticPaths: GetStaticPaths = async () => {
  const notes: Note[] = getAllnotes();
  const tags: Set<string> = new Set(notes.map((note) => note.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const notes = getAllnotes().filter((note) => note.meta.tags.includes(slug));

  return {
    props: {
      slug,
      notes: notes.map((note) => note.meta),
    },
  };
};

const Tags = ({ slug, notes }: Tag) => {
  return (
    <>
      <NextSeo title="Tags" />
      <section className="min-h-screen tracking-wide">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center object-center px-4 pt-6 pb-24 sm:px-6 md:py-24">
          <div className="flex justify-center items-center flex-wrap w-full mb-10">
            <div className="w-full flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold title-font mb-1 text-center">Tags #{slug}</h1>
              <Underline />
            </div>
          </div>
          <ListNotes notes={notes} />
        </div>
      </section>
    </>
  );
};

export default Tags;

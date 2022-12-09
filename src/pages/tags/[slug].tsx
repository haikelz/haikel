import { getAllNotes } from "@/helpers/getAllNotes";
import { Note, Tag } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Underline } from "@/components/atoms/underline";
import ListNotes from "@/components/organisms/listNotes";

export const getStaticPaths: GetStaticPaths = async () => {
  const notes: Note[] = getAllNotes();
  const tags: Set<string> = new Set(notes.map((note) => note.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const notes = getAllNotes().filter((note) => note.meta.tags.includes(slug));

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
      <section className="mx-auto min-h-screen max-w-5xl px-4 md:pt-24 container tracking-wide flex flex-col items-center justify-start pt-6 pb-12">
        <div className="flex justify-center items-center flex-wrap w-full mb-10">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold title-font mb-1 text-center">Tags #{slug}</h1>
            <Underline />
          </div>
        </div>
        <ListNotes notes={notes} />
      </section>
    </>
  );
};

export default Tags;

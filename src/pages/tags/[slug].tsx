import { Heading, Underline } from "@/ui/typography";
import { getAllNotes } from "@/lib/helpers/getAllNotes";
import ListNotes from "@/ui/lists/ListNotes";
import Layout from "@/templates/Layout";
import { NoteMetaProps, NoteProps } from "@/types";
import type { GetStaticPaths, GetStaticProps } from "next";

type TagProps = {
  slug: string;
  notes: NoteMetaProps[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const notes: NoteProps[] = getAllNotes();
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

const Tags = ({ slug, notes }: TagProps) => {
  return (
    <Layout
      title={`Tags #${slug}`}
      description="Tags"
      className="flex min-h-screen flex-col items-center justify-start pt-6 pb-6 md:pb-12 md:pt-24"
    >
      <div className="mb-6 flex w-full flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Heading as="h2" className="title-font mb-1 text-center">
            Tags #{slug}
          </Heading>
          <Underline />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
        <ListNotes filteredNotes={notes} />
      </div>
    </Layout>
  );
};

export default Tags;

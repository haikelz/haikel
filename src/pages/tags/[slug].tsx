import type { GetStaticPaths, GetStaticProps } from "next";
import { cxm } from "~lib/helpers/cxm";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import { NoteMetaProps } from "~models";
import Layout from "~ui/layout";
import { ListNotes } from "~ui/lists";
import { Heading, Underline } from "~ui/typography";

interface TagProps {
  slug: string;
  notes: Array<NoteMetaProps>;
}

interface NoteProps {
  content: string;
  meta: NoteMetaProps;
}

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

export default function Tags({ slug, notes }: TagProps) {
  return (
    <Layout
      title={`Tags #${slug}`}
      description="Tags"
      className={cxm("flex min-h-screen flex-col items-center justify-start", "py-8", "md:py-12")}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="title-font text-left">
            Tags #{slug}
          </Heading>
          <Underline />
        </div>
      </section>
      <section className="mt-6 mb-10 flex w-full flex-col space-y-8">
        <ListNotes filteredNotes={notes} />
      </section>
    </Layout>
  );
}

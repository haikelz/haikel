import { Paragraph } from "@/components/atoms/paragraph";
import { Underline } from "@/components/atoms/underline";
import ListNotes from "@/components/organisms/listNotes";
import Layout from "@/components/templates/layout";
import { getAllNotes } from "@/helpers/getAllNotes";
import { NoteMeta, NotesProps } from "@/types";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps = async () => {
  const notes: NoteMeta[] = getAllNotes()
    .slice(0, 9)
    .map((note) => note.meta);

  return {
    props: {
      notes,
    },
  };
};

const Notes = ({ notes }: NotesProps) => {
  return (
    <>
      <NextSeo
        title="Notes"
        description="Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as Notes."
      />
      <Layout className="flex min-h-screen flex-col items-center justify-center pt-6 pb-12 md:pt-24">
        <div className="mb-10 flex w-full flex-wrap items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="title-font text-center text-3xl font-bold">Notes</h2>
            <Underline />
          </div>
          <div className="w-full text-center leading-relaxed">
            <Paragraph isCenter>
              Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this
              as <b>Notes</b>.
            </Paragraph>
          </div>
        </div>
        <ListNotes notes={notes} />
      </Layout>
    </>
  );
};

export default Notes;

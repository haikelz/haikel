import { GetStaticProps } from "next";
import { getAllNotes } from "@/helpers/getAllNotes";
import { NoteMeta, NotesProps } from "@/types";
import { NextSeo } from "next-seo";
import { Underline } from "@/components/atoms/underline";
import ListNotes from "@/components/organisms/listNotes";
import { Paragraph } from "@/components/atoms/paragraph";

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
      <NextSeo title="Notes" />
      <section className="mx-auto max-w-5xl px-4 md:pt-24 container min-h-screen tracking-wide flex flex-col items-center justify-center pt-6 pb-12">
        <div className="flex justify-center items-center flex-wrap w-full mb-10">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold title-font text-center">Notes</h2>
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
      </section>
    </>
  );
};

export default Notes;

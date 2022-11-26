import { GetStaticProps } from "next";
import { getAllNotes } from "@/helpers/getAllNotes";
import { NoteMeta, NotesProps } from "@/types";
import { NextSeo } from "next-seo";
import { useKeydown } from "@/hooks/useKeydown";
import ListNotes from "@/components/organisms/listNotes";
import { Underline } from "@/components/atoms/underline";

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
  useKeydown({ isCtrlKey: true, previousUrl: "/works", nextUrl: "/" });

  return (
    <>
      <NextSeo title="Notes" />
      <section className="min-h-screen tracking-wide">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center object-center px-4 pt-6 pb-24 sm:px-6 md:py-24">
          <div className="flex justify-center items-center flex-wrap w-full mb-10">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold title-font mb-1 text-center">Notes</h1>
              <Underline />
            </div>
            <p className="w-full text-center leading-relaxed">
              Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this
              as <b>Notes</b>.
            </p>
          </div>
          <ListNotes notes={notes} />
        </div>
      </section>
    </>
  );
};

export default Notes;

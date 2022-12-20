import { Heading } from "@/atoms/Heading";
import { Paragraph } from "@/atoms/Paragraph";
import { Underline } from "@/atoms/Underline";
import { getAllNotes } from "@/helpers/getAllNotes";
import ListNotes from "@/organisms/ListNotes";
import Layout from "@/templates/Layout";
import { NoteMetaProps, NotesProps } from "@/types";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const notes: NoteMetaProps[] = getAllNotes()
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
    <Layout
      title="Notes"
      description="Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as Notes."
      className="flex min-h-screen flex-col items-center justify-center pt-6 pb-12 md:pt-24"
    >
      <div className="mb-10 flex w-full flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Heading as="h2" className="title-font text-center">
            Notes
          </Heading>
          <Underline />
        </div>
        <div className="w-full text-center leading-relaxed">
          <Paragraph isCenter>
            Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as{" "}
            <b>Notes</b>.
          </Paragraph>
        </div>
      </div>
      <ListNotes notes={notes} />
    </Layout>
  );
};

export default Notes;

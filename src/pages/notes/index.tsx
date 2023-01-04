import { Heading, Paragraph, SearchBar, Underline } from "@/atoms";
import { getAllNotes } from "@/helpers/getAllNotes";
import ListNotes from "@/organisms/ListNotes";
import Layout from "@/templates/Layout";
import { NoteMetaProps, NotesProps } from "@/types";
import { GetStaticProps } from "next";
import { useMemo, useState } from "react";

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
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(
    () =>
      notes.filter((note) => {
        if (note.title === search) return note;
        else if (note.title.toLowerCase().includes(search.toLowerCase())) return note;
      }),
    [notes, search]
  );

  return (
    <Layout
      title="Notes"
      description="Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as Notes."
      className="flex min-h-screen flex-col items-center justify-start pt-6 pb-6 md:pb-12 md:pt-24"
    >
      <div className="flex w-full flex-wrap items-center justify-center">
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
      <SearchBar search={search} setSearch={setSearch} />
      {filteredNotes.length ? (
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
          <ListNotes filteredNotes={filteredNotes} />
        </div>
      ) : (
        <Paragraph className="font-semibold">The note that you search is not found!</Paragraph>
      )}
    </Layout>
  );
};

export default Notes;

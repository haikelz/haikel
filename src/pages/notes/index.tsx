import { getAllNotes } from "@/lib/helpers/getAllNotes";
import { matchSearch } from "@/lib/helpers/matchSearch";
import Layout from "@/templates/Layout";
import { NoteMetaProps } from "@/types";
import { SearchBar } from "@/ui/input";
import ListNotes from "@/ui/lists/ListNotes";
import { Heading, Paragraph, Underline } from "@/ui/typography";
import type { GetStaticProps } from "next";
import { useMemo, useState } from "react";

type NotesProps = {
  notes: NoteMetaProps[];
};

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
  const matchResult: string | undefined = matchSearch(search);

  const filteredNotes = useMemo(
    () =>
      notes.filter((note) => {
        if (note.title === matchResult) return note;
        else if (
          note.title.toLowerCase().includes(matchResult === undefined || null ? "" : matchResult)
        )
          return note;
      }),
    [notes, matchResult]
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

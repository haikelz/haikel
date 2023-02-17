import { Searcher } from "fast-fuzzy";
import type { GetStaticProps } from "next";
import { useMemo, useState } from "react";
import { twJoin } from "tailwind-merge";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import { NoteMetaProps, NotesProps } from "~types";
import { SearchBar } from "~ui/input";
import Layout from "~ui/layout";
import ListNotes from "~ui/lists/ListNotes";
import { Heading, Paragraph, Underline } from "~ui/typography";

export const getStaticProps: GetStaticProps = async () => {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, getAllNotes().length)
    .map((note) => note.meta);

  return {
    props: {
      notes,
    },
  };
};

const Notes = ({ notes }: NotesProps) => {
  const [search, setSearch] = useState<string>("");

  const searcher: Searcher<
    NoteMetaProps,
    {
      keySelector: (obj: NoteMetaProps) => string;
    }
  > = new Searcher(notes, { keySelector: (obj) => obj.title.toLowerCase() });

  const filteredNotes = useMemo(() => {
    if (search.toLowerCase() === "") return notes;
    return searcher.search(search.toLowerCase());
  }, [search, notes]);

  return (
    <Layout
      title="Notes"
      description="Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as Notes."
      className={twJoin(
        "flex min-h-screen",
        "flex-col items-center justify-start",
        "pt-6 pb-12 md:pt-12"
      )}
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
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-5 sm:grid-cols-2">
          <ListNotes filteredNotes={filteredNotes} />
        </div>
      ) : (
        <Paragraph className="font-semibold">The note that you search is not found!</Paragraph>
      )}
    </Layout>
  );
};

export default Notes;

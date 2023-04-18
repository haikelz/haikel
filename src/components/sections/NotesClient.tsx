"use client";

import { Searcher } from "fast-fuzzy";
import { useMemo, useState } from "react";
import { NoteMetaProps } from "~models";
import { SearchInput } from "~ui/inputs";
import { ListNotes } from "~ui/lists";
import { Heading, Paragraph, Underline } from "~ui/typography";

type SearcherType = Searcher<
  NoteMetaProps,
  {
    keySelector: (obj: NoteMetaProps) => string;
  }
>;

export default function NotesClient({ notes }: { notes: NoteMetaProps[] }) {
  const [search, setSearch] = useState<string>("");

  const filteredNotes = useMemo(() => {
    /**
     * Fuzzy search with fast-fuzzy
     * @see https://github.com/EthanRutherford/fast-fuzzy
     */
    const searcher: SearcherType = new Searcher(notes, {
      keySelector: (obj) => obj.title.toLowerCase(),
    });

    // if user haven't input anything yet, then return all notes
    if (search.toLowerCase() === "") return notes;

    // and if user already input something, then do fuzzy search
    return searcher.search(search.toLowerCase());
  }, [search, notes]);

  return (
    <>
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Notes
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>
            Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as{" "}
            <b>Notes</b>.
          </Paragraph>
        </div>
      </section>
      <SearchInput search={search} setSearch={setSearch} />
      {filteredNotes.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <ListNotes filteredNotes={filteredNotes} />
        </section>
      ) : (
        <Paragraph className="font-semibold">The note that you search is not found!</Paragraph>
      )}
    </>
  );
}

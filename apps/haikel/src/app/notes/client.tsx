"use client";

import { Searcher } from "fast-fuzzy";
import { useMemo, useState } from "react";
import { NoteMetaProps } from "~interfaces";
import { SearchInput } from "~ui/inputs";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

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
      <SearchInput search={search} setSearch={setSearch} />
      {filteredNotes.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <NotesList filteredNotes={filteredNotes} search={search} />
        </section>
      ) : (
        <Paragraph className="font-semibold">The note that you search is not found!</Paragraph>
      )}
    </>
  );
}

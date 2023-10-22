"use client";

import { Notes } from "contentlayer/generated";
import { Searcher } from "fast-fuzzy";
import { SearchIcon } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import { tw } from "~lib/helpers";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

type SearcherType = Searcher<
  Notes,
  {
    keySelector: (obj: Notes) => string;
  }
>;

export default function NotesClient({ notes }: { notes: Notes[] }) {
  const [search, setSearch] = useState<string>("");

  const deferredSearch = useDeferredValue<string>(search);

  const filteredNotes = useMemo(() => {
    /**
     * Fuzzy search with fast-fuzzy
     * @see https://github.com/EthanRutherford/fast-fuzzy
     */
    const searcher: SearcherType = new Searcher(notes, {
      keySelector: (obj) => obj.title.toLowerCase(),
    });

    // if user haven't input anything yet, then return all notes
    if (deferredSearch.toLowerCase() === "") return notes;

    // and if user already input something, then do fuzzy search
    return searcher.search(deferredSearch.toLowerCase());
  }, [deferredSearch, notes]);

  return (
    <>
      <div className="relative my-6 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon size={20} />
        </div>
        <input
          className={tw(
            "block w-full border-2 border-base-0",
            "focus:border-blue-500 focus:ring-blue-500 focus:ring-1",
            "dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-1",
            "dark:border-base-5 bg-white dark:bg-base-0",
            "rounded-md",
            "px-4 py-1.5 pl-12 font-medium outline-none"
          )}
          type="text"
          name="search"
          placeholder="Search Here...."
          value={search}
          onChange={(e) => setSearch((e!.currentTarget as HTMLInputElement).value)}
        />
      </div>
      {filteredNotes.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <NotesList filteredNotes={filteredNotes} search={search} />
        </section>
      ) : (
        <Paragraph data-cy="not-found-note" className="font-semibold">
          The note that you search is not found!
        </Paragraph>
      )}
    </>
  );
}

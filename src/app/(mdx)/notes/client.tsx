"use client";

import { Notes, allNotes } from "contentlayer/generated";
import { Searcher } from "fast-fuzzy";
import { atom, useAtom } from "jotai";
import { SearchIcon } from "lucide-react";
import { useDeferredValue, useMemo } from "react";
import { P, match } from "ts-pattern";
import { sortedAllNotes } from "~features";
import { tw } from "~lib/utils/tw";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

type SearcherProps = Searcher<
  Notes,
  {
    keySelector: (obj: Notes) => string;
  }
>;

const searchAtom = atom<string>("");

export default function Client() {
  const notes: Notes[] = sortedAllNotes.slice(0, allNotes.length);

  const [search, setSearch] = useAtom(searchAtom);

  const deferredSearch = useDeferredValue(search);

  const filteredNotes = useMemo(() => {
    /**
     * Fuzzy search with fast-fuzzy
     * @see https://github.com/EthanRutherford/fast-fuzzy
     */
    const searcher: SearcherProps = new Searcher(notes, {
      keySelector: (obj) => obj.title.toLowerCase(),
    });

    // if user haven't input anything yet, then return all notes
    if (deferredSearch === "") {
      return notes;
    }

    // and if user already input something, then do fuzzy search
    return searcher.search(deferredSearch);
  }, [deferredSearch, notes]);

  return (
    <>
      <div className="relative mt-4 mb-6 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon size={20} />
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={tw(
            "block w-full border border-solid border-base-5",
            "focus:border-blue-500 focus:ring-blue-500 focus:ring-1",
            "dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-1",
            "dark:border-base-5 dark:bg-base-0",
            "rounded-md",
            "px-4 py-1.5 pl-12 font-medium outline-none"
          )}
          type="search"
          name="search"
          placeholder="Search Here...."
        />
      </div>
      {match({ filteredNotes: filteredNotes })
        .with(
          { filteredNotes: P.when((filteredNotes) => filteredNotes.length) },
          () => (
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 grid-rows-1 w-full gap-4">
              <NotesList
                filteredNotes={filteredNotes}
                search={deferredSearch}
              />
            </div>
          )
        )
        .otherwise(() => (
          <Paragraph data-cy="not-found-note" className="font-semibold">
            The note that you search is not found!
          </Paragraph>
        ))}
    </>
  );
}

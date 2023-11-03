"use client";

import { allNotes } from "contentlayer/generated";
import { atom, useAtom } from "jotai";
import { useRef } from "react";
import { useClickOutside } from "~hooks";
import { tw } from "~lib/helpers";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

const tagAtom = atom<string>("");

export default function TagsClient({ tagsList }: { tagsList: string[] }) {
  const [tag, setTag] = useAtom(tagAtom);

  const ref = useRef<HTMLDivElement>(null);

  const filteredNotes = allNotes.filter((item) => item.tags.includes(tag));

  useClickOutside(setTag, ref, "");

  return (
    <div ref={ref}>
      <div className="flex flex-wrap gap-3">
        {tagsList.map((item) => (
          <button
            type="button"
            aria-label={`tag ${item}`}
            className={tw(
              "px-4 py-1 transition-all",
              "hover:scale-110",
              tag === item ? "bg-red text-white dark:bg-blue-600" : "bg-gray-200 dark:bg-base-2"
            )}
            onClick={() => setTag(item)}
          >
            <Paragraph className="text-center font-medium">{item}</Paragraph>
          </button>
        ))}
      </div>
      <div className="mt-6">
        {filteredNotes.length ? (
          <div className="space-y-8">
            <NotesList filteredNotes={filteredNotes} />
          </div>
        ) : (
          <Paragraph className="font-bold">No notes matching with tag!</Paragraph>
        )}
      </div>
    </div>
  );
}

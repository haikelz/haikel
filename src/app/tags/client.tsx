"use client";

import { allNotes } from "contentlayer/generated";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { useClickOutside } from "~hooks";
import { tw } from "~lib/helpers";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

export default function TagsClient({ tagsList }: { tagsList: string[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const filteredNotes = allNotes.filter((item) =>
    item.tags.includes(searchParams.get("tag") as string)
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useClickOutside(ref, router);

  return (
    <div ref={ref}>
      <div className="flex flex-wrap gap-3">
        {tagsList.map((item) => (
          <button
            key={item}
            type="button"
            aria-label={`tag ${item}`}
            className={tw(
              "px-4 py-1 transition-all",
              "hover:scale-110",
              searchParams.get("tag") === item
                ? "bg-red text-white dark:bg-blue-600"
                : "bg-gray-200 dark:bg-base-2"
            )}
            onClick={() => router.replace("?" + createQueryString("tag", item))}
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
          <Paragraph className="font-bold">
            No notes matching with tag!
          </Paragraph>
        )}
      </div>
    </div>
  );
}

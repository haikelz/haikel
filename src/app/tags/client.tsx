"use client";

import { allNotes } from "contentlayer/generated";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { P, match } from "ts-pattern";
import { tw } from "~lib/helpers";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

export default function Client({ tagsList }: { tagsList: string[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filteredNotes = useMemo(
    () =>
      allNotes.filter((item) =>
        item.tags.includes(searchParams.get("tag") as string)
      ),
    [searchParams]
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="mt-4">
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
                ? "bg-[#F84B3E] text-base-5 dark:bg-blue-600"
                : "bg-base-5 dark:bg-base-2"
            )}
            onClick={() => router.replace("?" + createQueryString("tag", item))}
          >
            <Paragraph className="text-center font-medium">{item}</Paragraph>
          </button>
        ))}
      </div>
      <div className="mt-8">
        {match({ filteredNotes: filteredNotes })
          .with(
            { filteredNotes: P.when((filteredNotes) => filteredNotes.length) },
            () => (
              <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 grid-rows-1 w-full gap-4">
                <NotesList filteredNotes={filteredNotes} />
              </div>
            )
          )
          .otherwise(() => (
            <Paragraph className="font-bold">
              No notes matching with tag!
            </Paragraph>
          ))}
      </div>
    </div>
  );
}

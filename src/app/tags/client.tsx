"use client";

import { allNotes } from "contentlayer/generated";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import TransitionLayout from "~components/transition-layout";
import { useClickOutside } from "~hooks";
import { tw } from "~lib/helpers";
import { NotesList } from "~ui/lists";
import { Paragraph } from "~ui/typography";

export default function Client({ tagsList }: { tagsList: string[] }) {
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

  useClickOutside(ref, "tags");

  return (
    <>
      <div ref={ref} className="mt-4">
        <TransitionLayout
          transition={{ duration: 0.3, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-3"
        >
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
              onClick={() =>
                router.replace("?" + createQueryString("tag", item))
              }
            >
              <Paragraph className="text-center font-medium">{item}</Paragraph>
            </button>
          ))}
        </TransitionLayout>
        <TransitionLayout
          transition={{ duration: 0.3, delay: 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-8"
        >
          {filteredNotes.length ? (
            <div className="space-y-8">
              <NotesList filteredNotes={filteredNotes} />
            </div>
          ) : (
            <Paragraph className="font-bold">
              No notes matching with tag!
            </Paragraph>
          )}
        </TransitionLayout>
      </div>
    </>
  );
}

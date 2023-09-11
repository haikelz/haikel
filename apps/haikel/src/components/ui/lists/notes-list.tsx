import { Notes } from "contentlayer/generated";
import format from "date-fns/format";
import Link from "next/link";
import reactStringReplace from "react-string-replace";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";
import { Paragraph } from "~ui/typography";

export function NotesList({ filteredNotes, search }: { filteredNotes: Notes[]; search?: string }) {
  return (
    <>
      {filteredNotes.map((note) => (
        <div data-cy="note-item" key={note.slug} className="h-full">
          <Paragraph className={tw("text-left font-medium", ibmPlexSans.className)}>
            {format(new Date(note.date) ?? new Date(), "LLLL d, yyyy")}
          </Paragraph>
          <div className="mt-2">
            <Link
              className={tw(
                "cursor-pointer text-xl font-bold",
                "hover:text-blue-500",
                ibmPlexSans.className
              )}
              href={`/${note.slug}`}
              aria-label={note.title}
            >
              {search
                ? reactStringReplace(note.title, search, (match: string, index: number) => (
                    <span key={index + 1} className="text-blue-500">
                      {match}
                    </span>
                  ))
                : note.title}
            </Link>
          </div>
          <Paragraph className="my-2 tracking-wide">{note.description}</Paragraph>
          <div className={tw("flex space-x-2", ibmPlexSans.className)}>
            {note.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} aria-label={tag}>
                <span
                  className={tw(
                    "cursor-pointer rounded-sm",
                    "border-2 border-gray-300",
                    "px-1 font-medium",
                    "dark:border-gray-500",
                    "hover:text-blue-500 hover:decoration-blue-500"
                  )}
                >
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

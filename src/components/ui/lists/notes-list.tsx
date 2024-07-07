import { Notes } from "contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";
import reactStringReplace from "react-string-replace";
import { P, match } from "ts-pattern";
import { tw } from "~lib/helpers";
import { inter } from "~lib/utils/fonts";
import { Heading, Paragraph } from "~ui/typography";

export function NotesList({
  filteredNotes,
  search,
}: {
  filteredNotes: Notes[];
  search?: string;
}) {
  return (
    <>
      {filteredNotes.map((note) => (
        <div
          data-cy="note-item"
          key={note.slug}
          className={tw(
            "p-4 w-full flex flex-col bg-white dark:bg-base-0",
            "flex-wrap border border-dashed border-base-4 dark:border-base-5 shadow-sm"
          )}
        >
          <div>
            <div>
              <Paragraph
                className={tw("text-left text-sm font-medium", inter.className)}
              >
                {format(new Date(note.date) ?? new Date(), "LLLL d, yyyy")}
              </Paragraph>
            </div>
            <div className="mt-2 w-fit">
              <Link
                className={tw(
                  "cursor-pointer text-lg font-bold",
                  "hover:text-blue-500",
                  inter.className
                )}
                href={`/${note.slug}`}
                aria-label={note.title}
              >
                <Heading as="h3">
                  {match({ search: search })
                    .with({ search: P.when((search) => search) }, () =>
                      reactStringReplace(
                        note.title,
                        search,
                        (match: string, index: number) => (
                          <span key={index + 1} className="text-blue-500">
                            {match}
                          </span>
                        )
                      )
                    )
                    .otherwise(() => note.title)}
                </Heading>
              </Link>
            </div>
            <Paragraph className="my-2 tracking-wide line-clamp-2">
              {note.description}
            </Paragraph>
            <div className={tw("flex space-x-2", inter.className)}>
              {note.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags?tag=${tag}`}
                  aria-label={tag}
                  className={tw(
                    "cursor-pointer rounded-sm",
                    "bg-base-5 text-sm dark:bg-base-2 dark:text-base-5",
                    "px-1 font-medium"
                  )}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

import Link from "next/link";
import reactStringReplace from "react-string-replace";
import { NoteMetaProps } from "~interfaces";
import { cxm } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";
import { Paragraph } from "~ui/typography";

export function NotesList({
  filteredNotes,
  search,
}: {
  filteredNotes: NoteMetaProps[];
  search?: string;
}) {
  return (
    <>
      {filteredNotes.map((note) => (
        <div key={note.slug} className="h-full">
          <Paragraph className={cxm("text-left font-medium", ibmPlexSans.className)}>
            {note.date}
          </Paragraph>
          <div className="mt-2">
            <Link
              className={cxm(
                "cursor-pointer text-xl font-bold",
                "hover:text-blue-500",
                ibmPlexSans.className
              )}
              href={`/notes/${note.slug}`}
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
          <div className={cxm("flex space-x-2", ibmPlexSans.className)}>
            {note.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} aria-label={tag}>
                <span
                  className={cxm(
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

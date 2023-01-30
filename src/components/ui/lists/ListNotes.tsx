import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import type { NoteMetaProps } from "~types";
import { Heading, Paragraph } from "~ui/typography";

type NotesArticlesProps = {
  filteredNotes: NoteMetaProps[];
};

const ListNotes = ({ filteredNotes }: NotesArticlesProps) => {
  return (
    <>
      {filteredNotes.map((note) => (
        <div
          className={twJoin(
            "overflow-hidden border-[2.5px]",
            "border-black bg-azure transition-all ease-in-out",
            "hover:shadow-light active:scale-95",
            "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
          )}
          key={note.slug}
        >
          <div className="h-full px-6 pb-6 pt-3">
            <Link href={`/notes/${note.slug}`} passHref>
              <Heading as="h4" className="mt-2 mb-2 cursor-pointer">
                {note.title}
              </Heading>
            </Link>
            <Paragraph className="mb-2 tracking-wide">{note.preview}</Paragraph>
            <div className={twMerge("mt-3 flex space-x-2 font-medium", spaceGrotesk.className)}>
              {note.tags.map((tag) => (
                <Link
                  className={twJoin(
                    "cursor-pointer bg-celedongreen px-1.5 text-sm text-white",
                    "dark:bg-lightgray dark:text-slate-900"
                  )}
                  key={tag}
                  href={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
            <Paragraph className={twMerge("mt-2 text-right font-medium", spaceGrotesk.className)}>
              {note.date}
            </Paragraph>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListNotes;

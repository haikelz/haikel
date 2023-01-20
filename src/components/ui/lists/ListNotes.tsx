import type { NoteMetaProps } from "@/types";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { Paragraph } from "../typography";

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
              <h4 className="mt-2 mb-2 cursor-pointer text-xl font-bold">{note.title}</h4>
            </Link>
            <Paragraph className="mb-2 tracking-wide">{note.preview}</Paragraph>
            <div className="mt-3 flex space-x-2 font-grotesk font-medium">
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
            <Paragraph className="mt-2 text-right font-grotesk font-medium">{note.date}</Paragraph>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListNotes;

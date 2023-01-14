import type { NoteMetaProps } from "@/types";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

type NotesArticlesProps = {
  filteredNotes: NoteMetaProps[];
};

const ListNotes = ({ filteredNotes }: NotesArticlesProps) => {
  return (
    <>
      {filteredNotes.map((note) => (
        <div
          className={twJoin(
            "overflow-hidden border-[2.5px] border-black",
            "bg-antiflashwhite transition-all ease-in-out hover:shadow-light active:scale-95",
            "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
          )}
          key={note.slug}
        >
          <div className="h-full px-6 pb-6 pt-3">
            <Link href={`/notes/${note.slug}`} passHref>
              <h4 className="mt-2 mb-2 cursor-pointer text-xl font-bold">{note.title}</h4>
            </Link>
            <p className="mb-2 tracking-wide">{note.preview}</p>
            <div className="mt-3 flex gap-2 font-medium">
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
            <p className="mt-2 text-right font-medium">{note.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListNotes;

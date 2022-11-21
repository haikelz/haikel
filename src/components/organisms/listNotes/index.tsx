import type { NotesArticles } from "@/types";
import Link from "next/link";
import { memo } from "react";

const ListNotes = ({ notes }: NotesArticles) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {notes.map((note) => (
        <div
          className="overflow-hidden border-[2.5px] border-black bg-lightCard transition-all duration-200 hover:shadow-dark active:scale-95 dark:border-white dark:bg-darkCard dark:hover:shadow-light"
          key={note.slug}
        >
          <div className="px-6 h-full pb-6 pt-3">
            <Link href={`/notes/${note.slug}`} passHref>
              <h4 className="mt-2 cursor-pointer mb-2 text-xl font-bold">{note.title}</h4>
            </Link>
            <p className="mb-2 tracking-wide">{note.preview}</p>
            <div className="mt-3 flex gap-2 font-medium">
              {note.tags.map((tag) => (
                <Link
                  className="bg-lightTag px-1.5 cursor-pointer text-sm text-white dark:bg-darkTag dark:text-slate-900"
                  key={tag}
                  href={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
            <p className="text-right mt-2 font-medium">{note.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ListNotes);

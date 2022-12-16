import type { NotesArticlesProps } from "@/types";
import Link from "next/link";

const ListNotes = ({ notes }: NotesArticlesProps) => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
      {notes.map((note) => (
        <div
          className="overflow-hidden border-[2.5px] border-black bg-card-light transition-all duration-200 hover:shadow-dark active:scale-95 dark:border-white dark:bg-card-dark dark:hover:shadow-light"
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
                  className="cursor-pointer bg-tag-light px-1.5 text-sm text-white dark:bg-tag-dark dark:text-slate-900"
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
    </div>
  );
};

export default ListNotes;

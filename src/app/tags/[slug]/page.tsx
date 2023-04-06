import { cxm } from "~lib/helpers/cxm";
import { getAllNotes } from "~lib/services";
import { NoteMetaProps } from "~models";
import Seo from "~ui/Seo";
import { ListNotes } from "~ui/lists";
import { Heading, Underline } from "~ui/typography";

interface NoteProps {
  content: string;
  meta: NoteMetaProps;
}

export async function generateStaticParams() {
  const notes: NoteProps[] = getAllNotes();
  const tags: Set<string> = new Set(notes.map((note) => note.meta.tags).flat());

  return Array.from(tags).map((tag) => ({ slug: tag }));
}

export default function Tags({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const notes = getAllNotes()
    .filter((note) => note.meta.tags.includes(slug))
    .map((note) => note.meta);

  return (
    <Seo
      title={`Tags #${slug}`}
      description="Tags"
      className={cxm("flex min-h-screen flex-col items-center justify-start", "py-8", "md:py-12")}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Tags #{slug}
          </Heading>
          <Underline />
        </div>
      </section>
      <section className="mb-10 mt-6 flex w-full flex-col space-y-8">
        <ListNotes filteredNotes={notes} />
      </section>
    </Seo>
  );
}

import { cxm } from "~lib/helpers/cxm";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import { getAllWorks } from "~lib/helpers/getAllWorks";
import { NoteMetaProps, WorkMetaProps } from "~models";
import About from "~sections/About";
import FeaturedWorks from "~sections/FeaturedWorks";
import LatestNotes from "~sections/LatestNotes";
import Seo from "~ui/Seo";

export default function HomePage() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);
  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, 4)
    .map((work) => work.meta);

  return (
    <Seo
      title="Haikel"
      description="A person who interested in Frontend stuff"
      className={cxm("flex flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <About />
      <FeaturedWorks works={works} />
      <LatestNotes notes={notes} />
    </Seo>
  );
}

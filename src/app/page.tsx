import { cxm } from "~lib/helpers/cxm";
import { getAllNotes, getAllWorks } from "~lib/services";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { NoteMetaProps, WorkMetaProps } from "~models";
import About from "~sections/About";
import FeaturedWorks from "~sections/FeaturedWorks";
import LatestNotes from "~sections/LatestNotes";
import Main from "~ui/Main";

const baseMetadata = {
  title: "Haikel",
  description: "A person who interested in Frontend stuff",
  url: "https://haikel.my.id/",
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
    siteName: "haikel.my.id",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
};

export default function HomePage() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);
  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, 4)
    .map((work) => work.meta);

  return (
    <Main className={cxm("flex flex-col items-start justify-start", "py-8", "md:py-12")}>
      <About />
      <FeaturedWorks works={works} />
      <LatestNotes notes={notes} />
    </Main>
  );
}

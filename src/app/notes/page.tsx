import { cxm } from "~lib/helpers/cxm";
import { getAllNotes } from "~lib/services";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { NoteMetaProps } from "~models";
import NotesClient from "~sections/NotesClient";
import Main from "~ui/Main";

const baseMetadata = {
  title: "Notes",
  description:
    "Sometimes i write something, mostly about Linux, Web, and life. So yeah, i call this as Notes.",
  url: "https://haikel.my.id/notes",
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
    siteName: "haikel.my.id",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
};

export default function Notes() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, getAllNotes().length)
    .map((note) => note.meta);

  return (
    <Main
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <NotesClient notes={notes} />
    </Main>
  );
}

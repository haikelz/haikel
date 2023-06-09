import { Heading, Paragraph, Underline } from "~ui/typography";
import { cxm } from "~lib/helpers";
import { getAllNotes } from "~lib/services";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { NoteMetaProps } from "~models";
import NotesClient from "~sections/NotesClient";
import Main from "~ui/Main";

const baseMetadata = {
  title: "Notes",
  description:
    "Sometimes i write something. Mostly about technical stuff. So yeah, i call this as Notes.",
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
  metadataBase: new URL(url),
};

export default function Notes() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, getAllNotes().length)
    .map((note) => note.meta);

  return (
    <Main
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Notes
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>
            Sometimes, i write something. Mostly about technical stuff. So yeah, i call this as{" "}
            <b>Notes</b>.
          </Paragraph>
        </div>
      </section>
      <NotesClient notes={notes} />
    </Main>
  );
}

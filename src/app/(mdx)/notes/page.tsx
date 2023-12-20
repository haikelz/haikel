import { Notes, allNotes } from "contentlayer/generated";
import { Metadata } from "next";
import Main from "~components/main";
import { sortedAllNotes } from "~features/notes";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { Heading, Paragraph, Underline } from "~ui/typography";

import NotesClient from "./client";

const baseMetadata = {
  title: "Notes",
  description:
    "Sometimes i write something. Mostly about technical stuff. So yeah, i call this as Notes.",
  url: `${SITE_URL}/notes`,
};

const { title, description, url } = baseMetadata;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "haikel.app",
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

export default function NotesPage() {
  const notes: Notes[] = sortedAllNotes.slice(0, allNotes.length);

  return (
    <Main
      className={tw(
        "flex min-h-screen flex-col items-start justify-start",
        "pt-8"
      )}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Notes
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph data-cy="description">
            Sometimes, i write something. Mostly about technical stuff. So yeah,
            i call this as <span className="font-semibold">Notes</span>.
          </Paragraph>
        </div>
      </section>
      <NotesClient notes={notes} />
    </Main>
  );
}

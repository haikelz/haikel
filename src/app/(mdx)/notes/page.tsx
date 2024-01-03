import { Metadata } from "next";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { Heading, Notation, Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";

import Client from "./client";

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
  return (
    <Main
      className={tw(
        "flex min-h-screen flex-col items-start justify-start",
        "pt-8"
      )}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <TransitionLayout
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          <div>
            <Heading as="h2" className="text-left mb-2">
              <Notation
                type="highlight"
                animationDelay={500}
                lightModeColor="#FFFF3F"
                darkModeColor="#E11D48"
              >
                Notes
              </Notation>
            </Heading>
          </div>
          <Paragraph data-cy="description">
            Sometimes, i write something. Mostly about technical stuff. So yeah,
            i call this as <span className="font-semibold">Notes</span>.
          </Paragraph>
          <Client />
        </TransitionLayout>
      </section>
    </Main>
  );
}

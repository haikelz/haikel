import { allNotes } from "contentlayer/generated";
import { Metadata } from "next";
import { useMemo } from "react";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { Heading, Notation, Paragraph } from "~components/ui/typography";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";

import Client from "./client";

const baseMetadata = {
  title: "Tags",
  description: "Select spesific notes based on the list of tags below.",
  url: `${SITE_URL}/tags`,
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

export default function Tags() {
  // Merge all tags in the notes into one array and sort it alphabetically
  const tagsList = useMemo(
    () =>
      [
        ...new Set(
          allNotes
            .map((item) => [...new Set(item.tags)].join(" "))
            .join(" ")
            .split(" ")
        ),
      ].sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }),
    []
  );

  return (
    <Main
      className={tw(
        "flex min-h-screen flex-col items-start justify-start",
        "pt-8"
      )}
    >
      <section className="flex mb-10 w-full flex-wrap items-start justify-start">
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
                Tags
              </Notation>
            </Heading>
            <Paragraph data-cy="description">
              Select spesific notes based on the list of tags below.
            </Paragraph>
          </div>
          <Client tagsList={tagsList} />
        </TransitionLayout>
      </section>
    </Main>
  );
}

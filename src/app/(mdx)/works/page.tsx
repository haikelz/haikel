import { Works, allWorks } from "contentlayer/generated";
import { Metadata } from "next";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { sortedAllWorks } from "~features/works";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { WorksList } from "~ui/lists";
import { Heading, Paragraph } from "~ui/typography";

const baseMetadata = {
  title: "Works",
  description: "List some of my works",
  url: `${SITE_URL}/works`,
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

export default function WorksPage() {
  const works: Works[] = sortedAllWorks.slice(0, allWorks.length);

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
            <Heading as="h1" className="text-left">
              Works
            </Heading>
          </div>
          <Paragraph data-cy="description">List some of my works</Paragraph>
          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 grid-rows-1 w-full gap-4 mb-10">
            <WorksList works={works} />
          </div>
        </TransitionLayout>
      </section>
    </Main>
  );
}

import { Works, allWorks } from "contentlayer/generated";
import { Metadata } from "next";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { WorksList } from "~components/ui/lists";
import { Heading, Notation, Paragraph } from "~components/ui/typography";
import { sortedAllWorks } from "~features/works";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";

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
        >
          <div>
            <Heading as="h2" className="text-left">
              <Notation
                type="highlight"
                animationDelay={500}
                lightModeColor="#FFFF3F"
                darkModeColor="#E11D48"
              >
                Works
              </Notation>
            </Heading>
          </div>
          <Paragraph data-cy="description">List some of my works</Paragraph>
          <div className="mb-10 mt-4 flex w-full flex-col space-y-8">
            <WorksList works={works} />
          </div>
        </TransitionLayout>
      </section>
    </Main>
  );
}

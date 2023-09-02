import { Works, allWorks } from "contentlayer/generated";
import Main from "~components/main";
import { tw } from "~lib/helpers";
import { sortedAllWorks } from "~lib/services";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { WorksList } from "~ui/lists";
import { Heading, Paragraph, Underline } from "~ui/typography";

const baseMetadata = {
  title: "Works",
  description: "List some of my works",
  url: `${SITE_URL}/works`,
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
    <Main className={tw("flex min-h-screen flex-col items-start justify-start", "py-8")}>
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Works
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>List some of my works</Paragraph>
        </div>
      </section>
      <section className="mb-10 mt-6 flex w-full flex-col space-y-8">
        <WorksList works={works} />
      </section>
    </Main>
  );
}

import { cxm } from "~lib/helpers";
import { getAllWorks } from "~lib/services";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { WorkMetaProps } from "~models";
import Main from "~ui/Main";
import { WorksList } from "~ui/lists";
import { Heading, Paragraph, Underline } from "~ui/typography";

const baseMetadata = {
  title: "Works",
  description: "List some of my works",
  url: "https://haikel.app/works",
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

export default function Works() {
  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, getAllWorks().length)
    .map((work) => work.meta);

  return (
    <Main
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
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

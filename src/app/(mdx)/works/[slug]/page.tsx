import { Works, allWorks } from "contentlayer/generated";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";
import Main from "~components/main";
import ReadingProgress from "~components/reading-progress";
import { tw } from "~lib/helpers";
import { ABSOLUTE_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexSans, naskhArabic } from "~lib/utils/fonts";
import { Heading, UnderlineLink } from "~ui/typography";

const LightboxImage = dynamic(() => import("~ui/images/lightbox-image"));
const Video = dynamic(() => import("~components/video"));
const AuthorImage = dynamic(() => import("~ui/images/author-image"));
const ReadingTime = dynamic(() => import("~components/reading-time"));

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allWorks.map((item) => ({ slug: item.slug.replace("works/", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { slug } = params;
  const { title, description, author } = allWorks.find(
    (item) => item._raw.flattenedPath.replace("works/", "") === slug
  ) as Works;

  return {
    title,
    description,
    creator: author,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/works/${slug}`,
      title,
      description,
      siteName: "haikel.app",
      images: [
        {
          url: `${ABSOLUTE_OG_URL}?title=${title}`,
          alt: "OG Image",
        },
      ],
    },
    twitter: {
      title,
      description,
      site: `${SITE_URL}/works/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(`${SITE_URL}/works/${slug}`),
  };
}

export default async function DetailWorkPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { body, title, author, preview, repo } = allWorks.find(
    (item) => item._raw.flattenedPath.replace("works/", "") === slug
  ) as Works;

  const Content = getMDXComponent(body.code);

  return (
    <Main
      className={tw(
        "flex dark:bg-grid-dark bg-center bg-grid-light  min-h-screen flex-col items-center justify-start"
      )}
    >
      <ReadingProgress />
      <article className={tw("flex w-full flex-col flex-wrap justify-center py-8", "md:mb-3")}>
        <section className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <div className={tw("tracking-[0.050em]", ibmPlexSans.className)}>
              <span className={tw("text-base font-semibold leading-[1.75rem]", "md:text-lg")}>
                {author}, <ReadingTime content={body.raw} />.
              </span>{" "}
              {preview ? (
                <button
                  type="button"
                  aria-label="Preview"
                  className={tw("text-base leading-[1.75rem] tracking-[0.050em]", "md:text-lg")}
                >
                  <UnderlineLink href={preview}>Preview</UnderlineLink>
                </button>
              ) : null}
              {preview && repo ? " / " : null}
              {repo ? (
                <button
                  type="button"
                  aria-label="Source"
                  className={tw(
                    "text-base font-normal leading-[1.75rem] tracking-[0.050em]",
                    "md:text-lg"
                  )}
                >
                  <UnderlineLink href={repo}>Source</UnderlineLink>
                </button>
              ) : null}
            </div>
          </div>
        </section>
        <article
          className={tw(
            "prose prose-gray mt-6 w-full max-w-full",
            "md:prose-lg",
            "dark:prose-invert"
          )}
        >
          <p className={tw("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <Content components={{ LightboxImage, Video }} />
        </article>
      </article>
    </Main>
  );
}

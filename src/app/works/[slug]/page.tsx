import { Metadata } from "next";
import dynamic from "next/dynamic";
import { cxm } from "~lib/helpers";
import { getSlugs, getWorkFromSlug } from "~lib/services";
import { ABSOLUTE_OG_URL, SITE_URL, WORKS_PATH } from "~lib/utils/constants";
import { ibmPlexSans, naskhArabic } from "~lib/utils/fonts";
import Main from "~ui/main";
import MDXComponents from "~ui/mdx-components";
import ReadingProgress from "~ui/reading-progress";
import { Heading, UnderlineLink } from "~ui/typography";

const AuthorImage = dynamic(() => import("~ui/images/author-image"));
const ReadingTime = dynamic(() => import("~ui/reading-time"));

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getSlugs(WORKS_PATH).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { slug } = params;
  const { meta } = getWorkFromSlug(slug);
  const { title, description, author } = meta;

  return {
    title,
    description,
    authors: author,
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
  const { content, meta } = getWorkFromSlug(slug);

  const components = await MDXComponents(content);

  return (
    <Main className={cxm("flex min-h-screen flex-col items-center justify-start")}>
      <ReadingProgress />
      <article
        className={cxm("flex w-full flex-col flex-wrap justify-center py-8", "md:py-12 md:mb-3")}
      >
        <section className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <div className={cxm("tracking-[0.050em]", ibmPlexSans.className)}>
              <span className={cxm("text-base font-semibold leading-[1.75rem]", "md:text-lg")}>
                {meta.author}, <ReadingTime content={content} />.
              </span>{" "}
              {meta.preview ? (
                <button
                  type="button"
                  aria-label="Preview"
                  className={cxm("text-base leading-[1.75rem] tracking-[0.050em]", "md:text-lg")}
                >
                  <UnderlineLink href={meta.preview}>Preview</UnderlineLink>
                </button>
              ) : null}
              {meta.preview && meta.repo ? " / " : null}
              {meta.repo ? (
                <button
                  type="button"
                  aria-label="Source"
                  className={cxm(
                    "text-base font-normal leading-[1.75rem] tracking-[0.050em]",
                    "md:text-lg"
                  )}
                >
                  <UnderlineLink href={meta.repo}>Source</UnderlineLink>
                </button>
              ) : null}
            </div>
          </div>
        </section>
        <article
          className={cxm(
            "prose prose-gray mt-6 w-full max-w-full",
            "md:prose-lg",
            "dark:prose-invert"
          )}
        >
          <p className={cxm("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          {components}
        </article>
      </article>
    </Main>
  );
}

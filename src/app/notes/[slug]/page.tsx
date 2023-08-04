import { Metadata } from "next";
import dynamic from "next/dynamic";
import { cxm } from "~lib/helpers";
import { getNoteFromSlug, getSlugs } from "~lib/services";
import { ABSOLUTE_OG_URL, NOTES_PATH, SITE_URL } from "~lib/utils/constants";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import Main from "~ui/main";
import MDXComponents from "~ui/mdx-components";
import { Heading, Paragraph } from "~ui/typography";

const AuthorImage = dynamic(() => import("~ui/images/author-image"));
const ReadingTime = dynamic(() => import("~ui/reading-time"));
const Comments = dynamic(() => import("~ui/comments"));
const ReadingProgress = dynamic(() => import("~ui/reading-progress"));

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getSlugs(NOTES_PATH).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { slug } = params;
  const { meta } = getNoteFromSlug(slug);
  const { title, description, date, author } = meta;

  return {
    title,
    description,
    authors: author,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/notes/${slug}`,
      title,
      description,
      publishedTime: date,
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
      site: `${SITE_URL}/notes/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(`https://haikel.app/notes/${slug}`),
  };
}

export default async function NotePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content, meta } = getNoteFromSlug(slug);
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
            <Paragraph
              className={cxm(
                "text-base font-semibold tracking-[0.050em]",
                "md:text-lg",
                spaceGrotesk.className
              )}
            >
              <span>{meta.author}</span>, <ReadingTime content={content} /> / {meta.date}
            </Paragraph>
          </div>
        </section>
        <article
          className={cxm(
            "prose prose-gray mt-6 w-full max-w-full",
            "dark:prose-invert",
            "md:prose-lg"
          )}
        >
          <p className={cxm("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          {components}
        </article>
        <Comments />
      </article>
    </Main>
  );
}

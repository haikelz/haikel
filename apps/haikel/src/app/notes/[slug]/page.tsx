import { Notes, allNotes } from "contentlayer/generated";
import format from "date-fns/format";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";
import { tw } from "~lib/helpers";
import { ABSOLUTE_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexSans, naskhArabic } from "~lib/utils/fonts";
import Main from "~ui/main";
import { Heading, Paragraph } from "~ui/typography";

const Video = dynamic(() => import("~ui/video"));
const LightboxImage = dynamic(() => import("~ui/images/lightbox-image"));
const AuthorImage = dynamic(() => import("~ui/images/author-image"));
const ReadingTime = dynamic(() => import("~ui/reading-time"));
const Comments = dynamic(() => import("~ui/comments"));
const ReadingProgress = dynamic(() => import("~ui/reading-progress"));

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allNotes.map((item) => ({ slug: item.slug.replace("notes/", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { slug } = params;
  const { title, description, date, author } = allNotes.find(
    (item) => item._raw.flattenedPath.replace("notes/", "") === slug
  ) as Notes;

  return {
    title,
    description,
    creator: author,
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

  const { title, date, author, body } = allNotes.find(
    (item) => item._raw.flattenedPath.replace("notes/", "") === slug
  ) as Notes;

  const Content = getMDXComponent(body.code);

  return (
    <Main className={tw("flex min-h-screen flex-col items-center justify-start")}>
      <ReadingProgress />
      <article className={tw("flex w-full flex-col flex-wrap justify-center py-8", "md:mb-3")}>
        <section className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <Paragraph
              className={tw(
                "text-base font-semibold tracking-[0.050em]",
                "md:text-lg",
                ibmPlexSans.className
              )}
            >
              <span>{author}</span>, <ReadingTime content={body.raw} /> /{" "}
              {format(new Date(date) ?? new Date(), "LLLL d, yyyy")}
            </Paragraph>
          </div>
        </section>
        <article
          className={tw(
            "prose prose-gray mt-6 w-full max-w-full",
            "dark:prose-invert",
            "md:prose-lg"
          )}
        >
          <p className={tw("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <Content components={{ Video, LightboxImage }} />
        </article>
        <Comments />
      </article>
    </Main>
  );
}

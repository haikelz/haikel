import { Redis } from "@upstash/redis/nodejs";
import { Notes, allNotes } from "contentlayer/generated";
import format from "date-fns/format";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";
import Main from "~components/main";
import NoteViews from "~components/note-views";
import { tw } from "~lib/helpers";
import { ABSOLUTE_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexSans, naskhArabic } from "~lib/utils/fonts";
import { Heading, Paragraph } from "~ui/typography";

const Video = dynamic(() => import("~components/video"));
const Comments = dynamic(() => import("~components/comments"));
const ReadingTime = dynamic(() => import("~components/reading-time"));
const ReadingProgress = dynamic(() => import("~components/reading-progress"));
const LightboxImage = dynamic(() => import("~ui/images/lightbox-image"));
const AuthorImage = dynamic(() => import("~ui/images/author-image"));

const redis = Redis.fromEnv();

export const revalidate = 60;

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

  const { title, date, body } = allNotes.find(
    (item) => item._raw.flattenedPath.replace("notes/", "") === slug
  ) as Notes;

  // pageviews
  const views = (await redis.get<number>(["pageviews", "notes", slug].join(":"))) ?? 0;

  const Content = getMDXComponent(body.code);

  return (
    <>
      <NoteViews slug={slug} />
      <Main className={tw("flex min-h-screen flex-col items-center justify-start")}>
        <ReadingProgress />
        <article className={tw("flex w-full flex-col flex-wrap justify-center py-8", "md:mb-3")}>
          <section className="flex flex-col">
            <Heading as="h1" className="gradient dark:gradient-dark">
              {title}
            </Heading>
            <div className="my-3 flex items-center">
              <Paragraph
                className={tw(
                  "text-base font-semibold tracking-[0.050em]",
                  "md:text-lg",
                  ibmPlexSans.className
                )}
              >
                {format(new Date(date) ?? new Date(), "LLLL d, yyyy")} /{" "}
                <ReadingTime content={body.raw} /> / {views} views
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
    </>
  );
}

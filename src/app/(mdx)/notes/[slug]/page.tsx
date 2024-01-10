import { kv } from "@vercel/kv";
import { Notes, allNotes } from "contentlayer/generated";
import format from "date-fns/format";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";
import Breadcrumbs from "~components/breadcrumbs";
import Main from "~components/main";
import NoteViews from "~components/note-views";
import TransitionLayout from "~components/transition-layout";
import { tw } from "~lib/helpers";
import { ABSOLUTE_OG_URL, SITE_URL } from "~lib/utils/constants";
import { inter, naskhArabic } from "~lib/utils/fonts";
import { Heading, Notation, Paragraph } from "~ui/typography";

const Video = dynamic(() => import("~components/video"));
const Comments = dynamic(() => import("~components/comments"));
const ReadingTime = dynamic(() => import("~components/reading-time"));
const LightboxImage = dynamic(() => import("~ui/images/lightbox-image"));
const BackToTop = dynamic(() => import("~components/back-to-top"));

export const revalidate = 60;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allNotes.map((item) => ({ slug: item.slug.replace("notes/", "") }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
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

export default async function NotePage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const { title, date, body } = allNotes.find(
    (item) => item._raw.flattenedPath.replace("notes/", "") === slug
  ) as Notes;

  // pageviews
  const views =
    (await kv.get<number>(["pageviews", "notes", slug].join(":"))) ?? 0;

  const Content = getMDXComponent(body.code);

  return (
    <>
      <NoteViews slug={slug} />
      <Main
        className={tw(
          "flex min-h-screen flex-col items-center justify-start bg-center"
        )}
      >
        <TransitionLayout
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          <article
            className={tw(
              "flex w-full flex-col flex-wrap justify-center py-8",
              "md:mb-3"
            )}
          >
            <section className="flex flex-col">
              <Breadcrumbs />
              <Heading as="h1" className="mt-8">
                <Notation
                  type="highlight"
                  lightModeColor="#FFFF3F"
                  darkModeColor="#E11D48"
                  animationDelay={500}
                >
                  {title}
                </Notation>
              </Heading>
              <div className="my-3 flex items-center">
                <Paragraph
                  className={tw(
                    "text-base font-semibold tracking-[0.050em]",
                    inter.className
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
                "dark:prose-invert"
              )}
            >
              <p
                className={tw(
                  "text-right text-xl font-bold",
                  naskhArabic.className
                )}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <Content components={{ Video, LightboxImage }} />
              <div className="w-full flex justify-end items-center mt-10">
                <BackToTop />
              </div>
            </article>
            <Comments />
          </article>
        </TransitionLayout>
      </Main>
    </>
  );
}

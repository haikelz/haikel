import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { getNoteFromSlug } from "~lib/helpers/getNoteFromSlug";
import { getReadingTime } from "~lib/helpers/getReadingTime";
import { getSlugs } from "~lib/helpers/getSlugs";
import { mdxSource } from "~lib/helpers/mdxSource";
import { NOTES_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { NotePageProps } from "~types";
import Layout from "~ui/layout";
import { Heading, Paragraph } from "~ui/typography";

const LightboxImage = dynamic(() => import("~ui/mdx/LightboxImage"));
const AuthorImage = dynamic(() => import("~ui/mdx/AuthorImage"));
const Video = dynamic(() => import("~ui/mdx/Video"));

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(NOTES_PATH).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getNoteFromSlug(slug);
  const source = await mdxSource(content);

  return {
    props: {
      note: {
        source,
        meta,
        content,
      },
    },
  };
};

const NotePage = ({ note }: NotePageProps) => {
  const memoizedReadingTime: string = useMemo(() => getReadingTime(note.content), [note.content]);

  return (
    <Layout
      title={note.meta.title}
      description={note.meta.description}
      className={twJoin(
        "flex min-h-screen flex-col items-center justify-start",
        "py-8",
        "md:py-12"
      )}
    >
      <article className="mb-3 flex w-full flex-col flex-wrap justify-center">
        <div className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {note.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <Paragraph
              className={twMerge(
                "text-base font-semibold tracking-[0.050em]",
                "md:text-lg",
                spaceGrotesk.className
              )}
            >
              <span>{note.meta.author}</span>, <span>{memoizedReadingTime}</span> / {note.meta.date}
            </Paragraph>
          </div>
        </div>
        <div
          className={twJoin(
            "prose prose-slate mt-6 w-full max-w-full",
            "dark:prose-invert",
            "md:prose-lg"
          )}
        >
          <p className={twMerge("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <MDXRemote {...note.source} components={{ Video, LightboxImage }} />
        </div>
      </article>
    </Layout>
  );
};

export default NotePage;

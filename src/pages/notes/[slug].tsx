import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { twMerge } from "tailwind-merge";
import { getNoteFromSlug } from "~lib/helpers/getNoteFromSlug";
import { getReadingTime } from "~lib/helpers/getReadingTime";
import { getSlugs } from "~lib/helpers/getSlugs";
import { highlighterOptions } from "~lib/helpers/highlighterOptions";
import { NOTES_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { NotePageProps } from "~types";
import Layout from "~ui/templates/Layout";
import { Heading, Paragraph } from "~ui/typography";

const LazyLoadImage = dynamic(() => import("~ui/mdx/LazyLoadImage"));
const AuthorImage = dynamic(() => import("~ui/mdx/AuthorImage"));
const Video = dynamic(() => import("~ui/mdx/Video"));

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const paths = getSlugs(NOTES_PATH).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getNoteFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypePrettyCode, highlighterOptions],
      ],
    },
  });

  return {
    props: {
      note: {
        source: mdxSource,
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
      className="flex min-h-screen flex-col items-center justify-start pt-6 pb-12 md:pt-12"
    >
      <article className="flex w-full flex-col flex-wrap justify-center md:mb-10">
        <div className="flex flex-col">
          <Heading as="h1" className="gradient">
            {note.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <Paragraph className={twMerge("tracking-[0.050em]", spaceGrotesk.className)}>
              <span className="font-semibold">{note.meta.author}</span>,{" "}
              <span className="font-semibold">{memoizedReadingTime} read</span> / {note.meta.date}
            </Paragraph>
          </div>
        </div>
        <div className="prose prose-slate mt-6 w-full max-w-full dark:prose-invert lg:prose-lg">
          <p className={twMerge("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <MDXRemote {...note.source} components={{ Video, LazyLoadImage }} />
        </div>
      </article>
    </Layout>
  );
};

export default NotePage;

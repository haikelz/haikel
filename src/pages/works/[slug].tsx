import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { twMerge } from "tailwind-merge";
import { getReadingTime } from "~lib/helpers/getReadingTime";
import { getSlugs } from "~lib/helpers/getSlugs";
import { getWorkFromSlug } from "~lib/helpers/getWorkFromSlug";
import { highlighterOptions } from "~lib/helpers/highlighterOptions";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { WORKS_PATH } from "~lib/utils/path";
import { WorkPageProps } from "~types";
import Layout from "~ui/templates/Layout";
import { Heading, Paragraph } from "~ui/typography";

const AuthorImage = dynamic(() => import("~ui/mdx/AuthorImage"));
const Video = dynamic(() => import("~ui/mdx/Video"));
const WorkImage = dynamic(() => import("~ui/mdx/WorkImage"));

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(WORKS_PATH).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getWorkFromSlug(slug);
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
      work: {
        source: mdxSource,
        meta,
      },
    },
  };
};

const DetailWorkPage = ({ work }: WorkPageProps) => {
  const readingTime: number = useMemo(
    () => getReadingTime({ ...work.source }.compiledSource),
    [work.source]
  );

  return (
    <Layout
      title={work.meta.title}
      description={work.meta.preview}
      className="flex min-h-screen flex-col items-center justify-start pt-6 pb-12 md:pt-12"
    >
      <article className="flex w-full flex-col flex-wrap justify-center md:mb-10">
        <div className="flex flex-col">
          <Heading as="h1" className="gradient">
            {work.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <Paragraph className={spaceGrotesk.className} isCenter={false}>
              <span className="font-semibold">{work.meta.author}</span>,{" "}
              <span className="font-semibold">{readingTime} Min read</span>
            </Paragraph>
          </div>
        </div>
        <div className="prose prose-slate mt-6 w-full max-w-full dark:prose-invert lg:prose-lg">
          <p className={twMerge("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <MDXRemote {...work.source} components={{ Video, WorkImage }} />
        </div>
      </article>
    </Layout>
  );
};

export default DetailWorkPage;

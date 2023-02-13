import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { twMerge } from "tailwind-merge";
import { getReadingTime } from "~lib/helpers/getReadingTime";
import { getSlugs } from "~lib/helpers/getSlugs";
import { getWorkFromSlug } from "~lib/helpers/getWorkFromSlug";
import { highlighterOptions } from "~lib/helpers/highlighterOptions";
import { WORKS_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { WorkPageProps } from "~types";
import Layout from "~ui/templates/Layout";
import { Heading, UnderlineSpan } from "~ui/typography";

const AuthorImage = dynamic(() => import("~ui/mdx/AuthorImage"));
const Video = dynamic(() => import("~ui/mdx/Video"));
const LazyLoadImage = dynamic(() => import("~ui/mdx/LazyLoadImage"));

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
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
        content,
      },
    },
  };
};

const DetailWorkPage = ({ work }: WorkPageProps) => {
  const memoizedReadingTime: string = useMemo(() => getReadingTime(work.content), [work.content]);

  return (
    <Layout
      title={work.meta.title}
      description={work.meta.description}
      className="flex min-h-screen flex-col items-center justify-start pt-6 pb-12 md:pt-12"
    >
      <article className="flex w-full flex-col flex-wrap justify-center md:mb-10">
        <div className="flex flex-col">
          <Heading as="h1" className="gradient">
            {work.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <div className={twMerge("tracking-[0.050em]", spaceGrotesk.className)}>
              <span className="text-base font-normal leading-[1.75rem]">
                {work.meta.author}, {memoizedReadingTime} read.
              </span>{" "}
              {work.meta.preview ? (
                <button
                  type="button"
                  aria-label="Preview"
                  className="text-base font-normal leading-[1.75rem] tracking-[0.050em]"
                >
                  <Link href={work.meta.preview}>
                    <UnderlineSpan>Preview</UnderlineSpan>
                  </Link>
                </button>
              ) : null}
              {work.meta.preview && work.meta.repo ? " / " : null}
              {work.meta.repo ? (
                <button
                  type="button"
                  aria-label="Source"
                  className="text-base font-normal leading-[1.75rem] tracking-[0.050em]"
                >
                  <Link href={work.meta.repo}>
                    <UnderlineSpan>Source</UnderlineSpan>
                  </Link>
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="prose prose-slate mt-6 w-full max-w-full dark:prose-invert lg:prose-lg">
          <p className={twMerge("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <MDXRemote {...work.source} components={{ Video, LazyLoadImage }} />
        </div>
      </article>
    </Layout>
  );
};

export default DetailWorkPage;

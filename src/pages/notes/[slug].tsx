import { LazyLoadImage } from "@/components/atoms/lazyLoadImage";
import { Paragraph } from "@/components/atoms/paragraph";
import { Video } from "@/components/atoms/video";
import Layout from "@/components/templates/layout";
import { getNoteFromSlug } from "@/helpers/getNoteFromSlug";
import { getReadingTime } from "@/helpers/getReadingTime";
import { getSlugs } from "@/helpers/getSlugs";
import { NotePageProps } from "@/types";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useMemo } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

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
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
    },
  });

  return {
    props: {
      note: {
        source: mdxSource,
        meta,
      },
    },
  };
};

const NotePage = ({ note }: NotePageProps) => {
  const readingTime: number = useMemo(
    () => getReadingTime({ ...note.source }.compiledSource),
    [note.source]
  );

  return (
    <>
      <NextSeo title={note.meta.title} description={note.meta.preview} />
      <Layout className="flex min-h-screen flex-col items-center justify-center pt-6 pb-12 md:pt-24">
        <div className="flex w-full flex-col flex-wrap justify-center md:mb-10">
          <div className="flex flex-col">
            <h1 className="text-3xl font-medium md:text-4xl">{note.meta.title}</h1>
            <div className="my-3 flex items-center">
              <Image
                src="https://avatars.githubusercontent.com/u/77146709?v=4"
                className="mr-2 rounded-full"
                width={23}
                height={23}
                priority
                alt="Github Profile Picture"
              />
              <Paragraph isCenter={false}>
                <span className="font-semibold">{note.meta.author}</span>,{" "}
                <span className="font-semibold">{readingTime} Min read</span> / {note.meta.date}
              </Paragraph>
            </div>
          </div>
          <div className="prose prose-slate mt-6 w-full max-w-full dark:prose-invert lg:prose-lg">
            <p className="text-right font-arabic text-2xl font-bold">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <MDXRemote {...note.source} components={{ Video, LazyLoadImage }} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotePage;

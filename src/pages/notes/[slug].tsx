import { Heading } from "@/atoms/Heading";
import { Paragraph } from "@/atoms/Paragraph";
import { getNoteFromSlug } from "@/helpers/getNoteFromSlug";
import { getReadingTime } from "@/helpers/getReadingTime";
import { getSlugs } from "@/helpers/getSlugs";
import Layout from "@/templates/Layout";
import { NotePageProps } from "@/types";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const LazyLoadImage = dynamic(() =>
  import("@/atoms/LazyLoadImage").then((item) => item.LazyLoadImage)
);
const AuthorImage = dynamic(() => import("@/atoms/AuthorImage").then((item) => item.AuthorImage));
const Video = dynamic(() => import("@/atoms/Video").then((item) => item.Video));

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
      development: false,
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
    <Layout
      title={note.meta.title}
      description={note.meta.preview}
      className="flex min-h-screen flex-col items-center justify-center pt-6 pb-12 md:pt-24"
    >
      <div className="flex w-full flex-col flex-wrap justify-center md:mb-10">
        <div className="flex flex-col">
          <Heading as="h1" className="gradient">
            {note.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage username="haikelz" alt="Github Profile Picture" />
            <Paragraph className="" isCenter={false}>
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
  );
};

export default NotePage;

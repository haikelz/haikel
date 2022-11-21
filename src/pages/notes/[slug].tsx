import { MDXRemote } from "next-mdx-remote";
import { NotePageProps } from "@/types";
import { serialize } from "next-mdx-remote/serialize";
import { getNoteFromSlug } from "@/helpers/getNoteFromSlug";
import { getSlugs } from "@/helpers/getSlugs";
import { NextSeo } from "next-seo";
import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Video from "@/components/atoms/video";

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
  return (
    <>
      <NextSeo title={note.meta.title} />
      <section className="min-h-screen tracking-wide">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center object-center px-4 pt-4 pb-10 sm:px-6 sm:pt-6 sm:pb-12 md:py-24">
          <div className="flex justify-center flex-wrap flex-col w-full mb-10">
            <div className="flex flex-col">
              <h1 className="md:text-4xl text-3xl font-medium">{note.meta.title}</h1>
              <div className="flex my-3 items-center">
                <Image
                  src="https://avatars.githubusercontent.com/u/77146709?v=4"
                  className="mr-2 rounded-full"
                  width={27}
                  height={27}
                  priority
                  alt="Github Profile Picture"
                />
                <p className="text-lg">
                  <span className="font-semibold">{note.meta.author}</span> / {note.meta.date}
                </p>
              </div>
            </div>
            <div className="max-w-full mt-6 prose-lg prose-slate dark:prose-invert prose w-full">
              <p className="font-bold text-right text-2xl font-arabic">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <MDXRemote {...note.source} components={{ Image, Video }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotePage;

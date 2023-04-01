import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { cxm } from "~lib/helpers/cxm";
import { getNoteFromSlug } from "~lib/helpers/getNoteFromSlug";
import { getSlugs } from "~lib/helpers/getSlugs";
import { mdxSource } from "~lib/helpers/mdxSource";
import { NOTES_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { MDXProps, NoteMetaProps } from "~models";
import Layout from "~ui/layout";
import { Heading, Paragraph } from "~ui/typography";

interface NotePageProps extends MDXProps {
  meta: NoteMetaProps;
}

const AuthorImage = dynamic(() => import("~ui/images/AuthorImage"));
const LightboxImage = dynamic(() => import("~ui/images/LightboxImage"));
const Video = dynamic(() => import("~ui/Video"));
const ReadingTime = dynamic(() => import("~ui/ReadingTime"));

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

export default function NotePage({ note }: { note: NotePageProps }) {
  return (
    <Layout
      title={note.meta.title}
      description={note.meta.description}
      className={cxm("flex min-h-screen flex-col items-center justify-start", "py-8", "md:py-12")}
    >
      <article className="mb-3 flex w-full flex-col flex-wrap justify-center">
        <section className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {note.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <Paragraph
              className={cxm(
                "text-base font-semibold tracking-[0.050em]",
                "md:text-lg",
                spaceGrotesk.className
              )}
            >
              <span>{note.meta.author}</span>, <ReadingTime content={note.content} /> /{" "}
              {note.meta.date}
            </Paragraph>
          </div>
        </section>
        <article
          className={cxm(
            "prose prose-slate mt-6 w-full max-w-full",
            "dark:prose-invert",
            "md:prose-lg"
          )}
        >
          <p className={cxm("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <MDXRemote {...note.source} components={{ Video, LightboxImage }} />
        </article>
      </article>
    </Layout>
  );
}

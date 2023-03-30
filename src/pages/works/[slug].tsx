import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { cxm } from "~lib/helpers/cxm";
import { getSlugs } from "~lib/helpers/getSlugs";
import { getWorkFromSlug } from "~lib/helpers/getWorkFromSlug";
import { mdxSource } from "~lib/helpers/mdxSource";
import { WORKS_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { MDXProps, WorkMetaProps } from "~models";
import Layout from "~ui/layout";
import { Heading, UnderlineLink } from "~ui/typography";

interface DetailWorkPageProps extends MDXProps {
  meta: WorkMetaProps;
}

const AuthorImage = dynamic(() => import("~ui/mdx/AuthorImage"));
const LightboxImage = dynamic(() => import("~ui/mdx/LightboxImage"));
const Video = dynamic(() => import("~ui/mdx/Video"));
const ReadingTime = dynamic(() => import("~ui/mdx/ReadingTime"));

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
  const source = await mdxSource(content);

  return {
    props: {
      work: {
        source,
        meta,
        content,
      },
    },
  };
};

const DetailWorkPage = ({ work }: { work: DetailWorkPageProps }) => {
  return (
    <Layout
      title={work.meta.title}
      description={work.meta.description}
      className={cxm("flex min-h-screen flex-col items-center justify-start", "py-8", "md:py-12")}
    >
      <article className="mb-3 flex w-full flex-col flex-wrap justify-center">
        <section className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {work.meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <div className={cxm("tracking-[0.050em]", spaceGrotesk.className)}>
              <span className={cxm("text-base font-semibold leading-[1.75rem]", "md:text-lg")}>
                {work.meta.author}, <ReadingTime content={work.content} />.
              </span>{" "}
              {work.meta.preview ? (
                <button
                  type="button"
                  aria-label="Preview"
                  className={cxm("text-base leading-[1.75rem] tracking-[0.050em]", "md:text-lg")}
                >
                  <UnderlineLink href={work.meta.preview}>Preview</UnderlineLink>
                </button>
              ) : null}
              {work.meta.preview && work.meta.repo ? " / " : null}
              {work.meta.repo ? (
                <button
                  type="button"
                  aria-label="Source"
                  className={cxm(
                    "text-base font-normal leading-[1.75rem] tracking-[0.050em]",
                    "md:text-lg"
                  )}
                >
                  <UnderlineLink href={work.meta.repo}>Source</UnderlineLink>
                </button>
              ) : null}
            </div>
          </div>
        </section>
        <article
          className={cxm(
            "prose prose-slate mt-6 w-full max-w-full",
            "md:prose-lg",
            "dark:prose-invert"
          )}
        >
          <p className={cxm("text-right text-2xl font-bold", naskhArabic.className)}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <MDXRemote {...work.source} components={{ Video, LightboxImage }} />
        </article>
      </article>
    </Layout>
  );
};

export default DetailWorkPage;

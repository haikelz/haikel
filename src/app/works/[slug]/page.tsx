import dynamic from "next/dynamic";
import { cxm } from "~lib/helpers/cxm";
import { getSlugs } from "~lib/helpers/getSlugs";
import { getWorkFromSlug } from "~lib/helpers/getWorkFromSlug";
import { mdxSource } from "~lib/helpers/mdxSource";
import { WORKS_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import MDXComponents from "~ui/MDXComponents";
import Seo from "~ui/Seo";
import { Heading, UnderlineLink } from "~ui/typography";

const AuthorImage = dynamic(() => import("~ui/images/AuthorImage"));
const ReadingTime = dynamic(() => import("~ui/ReadingTime"));

export async function generateStaticParams() {
  return getSlugs(WORKS_PATH).map((slug) => ({ slug }));
}

export default async function DetailWorkPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content, meta } = getWorkFromSlug(slug);
  const source = await mdxSource(content);

  return (
    <Seo
      title={meta.title}
      description={meta.description}
      className={cxm("flex min-h-screen flex-col items-center justify-start", "py-8", "md:py-12")}
    >
      <article className="mb-3 flex w-full flex-col flex-wrap justify-center">
        <section className="flex flex-col">
          <Heading as="h1" className="gradient dark:gradient-dark">
            {meta.title}
          </Heading>
          <div className="my-3 flex items-center">
            <AuthorImage />
            <div className={cxm("tracking-[0.050em]", spaceGrotesk.className)}>
              <span className={cxm("text-base font-semibold leading-[1.75rem]", "md:text-lg")}>
                {meta.author}, <ReadingTime content={content} />.
              </span>{" "}
              {meta.preview ? (
                <button
                  type="button"
                  aria-label="Preview"
                  className={cxm("text-base leading-[1.75rem] tracking-[0.050em]", "md:text-lg")}
                >
                  <UnderlineLink href={meta.preview}>Preview</UnderlineLink>
                </button>
              ) : null}
              {meta.preview && meta.repo ? " / " : null}
              {meta.repo ? (
                <button
                  type="button"
                  aria-label="Source"
                  className={cxm(
                    "text-base font-normal leading-[1.75rem] tracking-[0.050em]",
                    "md:text-lg"
                  )}
                >
                  <UnderlineLink href={meta.repo}>Source</UnderlineLink>
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
          <MDXComponents source={source} />
        </article>
      </article>
    </Seo>
  );
}

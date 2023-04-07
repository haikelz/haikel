import dynamic from "next/dynamic";
import { cxm } from "~lib/helpers/cxm";
import { getNoteFromSlug, getSlugs, mdxSource } from "~lib/services";
import { NOTES_PATH } from "~lib/utils/contentsPath";
import { naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import MDXComponents from "~ui/MDXComponents";
import Seo from "~ui/Seo";
import { Heading, Paragraph } from "~ui/typography";

const AuthorImage = dynamic(() => import("~ui/images/AuthorImage"));
const ReadingTime = dynamic(() => import("~ui/ReadingTime"));

export async function generateStaticParams() {
  return getSlugs(NOTES_PATH).map((slug) => ({ slug }));
}

export default async function NotePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content, meta } = getNoteFromSlug(slug);
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
            <Paragraph
              className={cxm(
                "text-base font-semibold tracking-[0.050em]",
                "md:text-lg",
                spaceGrotesk.className
              )}
            >
              <span>{meta.author}</span>, <ReadingTime content={content} /> / {meta.date}
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
          <MDXComponents source={source} />
        </article>
      </article>
    </Seo>
  );
}
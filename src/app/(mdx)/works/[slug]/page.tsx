import { Works, allWorks } from "contentlayer/generated";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";
import { P, match } from "ts-pattern";
import Breadcrumbs from "~components/breadcrumbs";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { tw } from "~lib/helpers";
import { ABSOLUTE_OG_URL, SITE_URL } from "~lib/utils/constants";
import { inter, naskhArabic } from "~lib/utils/fonts";
import { Heading, UnderlineLink } from "~ui/typography";

const LightboxImage = dynamic(() => import("~ui/images/lightbox-image"));
const Video = dynamic(() => import("~components/video"));
const AuthorImage = dynamic(() => import("~ui/images/author-image"));
const ReadingTime = dynamic(() => import("~components/reading-time"));
const BackToTop = dynamic(() => import("~components/back-to-top"));

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allWorks.map((item) => ({ slug: item.slug.replace("works/", "") }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata | undefined> {
  const { slug } = params;
  const { title, description, author } = allWorks.find(
    (item) => item._raw.flattenedPath.replace("works/", "") === slug
  ) as Works;

  return {
    title,
    description,
    creator: author,
    openGraph: {
      type: "article",
      url: `${SITE_URL}/works/${slug}`,
      title,
      description,
      siteName: "ekel.dev",
      images: [
        {
          url: `${ABSOLUTE_OG_URL}?title=${title}`,
          alt: "OG Image",
        },
      ],
    },
    twitter: {
      title,
      description,
      site: `${SITE_URL}/works/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(`${SITE_URL}/works/${slug}`),
  };
}

export default async function DetailWorkPage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const { body, title, author, preview, repo } = allWorks.find(
    (item) => item._raw.flattenedPath.replace("works/", "") === slug
  ) as Works;

  const Content = getMDXComponent(body.code);

  return (
    <Main
      className={tw(
        "flex min-h-screen flex-col items-center justify-start bg-center"
      )}
    >
      <TransitionLayout
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full mb-3"
      >
        <article
          className={tw("flex w-full flex-col flex-wrap justify-center py-8")}
        >
          <section className="flex flex-col">
            <Breadcrumbs />
            <Heading as="h1" className="mt-8 w-full max-w-full">
              {title}
            </Heading>
            <div className="my-3 flex items-center">
              <AuthorImage />
              <div className={tw("tracking-[0.050em]", inter.className)}>
                <span
                  className={tw("text-base font-semibold leading-[1.75rem]")}
                >
                  {author}, <ReadingTime content={body.raw} />.
                </span>{" "}
                {match({ preview: preview })
                  .with({ preview: P.when(() => preview) }, () => (
                    <button
                      type="button"
                      aria-label="Preview"
                      className={tw(
                        "text-base leading-[1.75rem] tracking-[0.050em]"
                      )}
                    >
                      <UnderlineLink href={preview as string}>
                        Preview
                      </UnderlineLink>
                    </button>
                  ))
                  .otherwise(() => null)}
                {preview && repo ? " / " : null}
                {match({ repo: repo })
                  .with({ repo: P.when((repo) => repo) }, () => (
                    <button
                      type="button"
                      aria-label="Source"
                      className={tw(
                        "text-base font-normal leading-[1.75rem] tracking-[0.050em]"
                      )}
                    >
                      <UnderlineLink href={repo as string}>
                        Source
                      </UnderlineLink>
                    </button>
                  ))
                  .otherwise(() => null)}
              </div>
            </div>
          </section>
          <article
            className={tw(
              "prose prose-gray mt-6 w-full max-w-full",
              "dark:prose-invert"
            )}
          >
            <p
              className={tw(
                "text-right text-xl font-bold",
                naskhArabic.className
              )}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <Content components={{ LightboxImage, Video }} />
            <div className="w-full flex justify-end items-center mt-10">
              <BackToTop />
            </div>
          </article>
        </article>
      </TransitionLayout>
    </Main>
  );
}

import { SeoProps } from "@/types";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

/**
 * TODO:
 * - Dynamic URL
 */
export const Seo = ({ title, description }: SeoProps) => {
  const router = useRouter();

  return (
    <NextSeo
      title={title}
      titleTemplate="%s"
      defaultTitle={title}
      description={description}
      canonical={`https://haikel.my.id${router.asPath}`}
      openGraph={{
        type: "website",
        url: `https://haikel.my.id${router.asPath}`,
        title: title,
        description: description,
        images: [
          {
            url: `https://og-image.vercel.app/**Haikel's%20%20Website**%20.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg`,
            alt: `OG Image`,
          },
        ],
        site_name: "haikel",
      }}
      twitter={{
        handle: "@ginkgo_byte",
        site: "@ginkgo_byte",
        cardType: "summary_large_image",
      }}
    />
  );
};

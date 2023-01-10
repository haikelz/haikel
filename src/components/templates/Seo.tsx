import { SeoProps } from "@/types";
import { NextSeo } from "next-seo";
import { NextRouter, useRouter } from "next/router";

const Seo = ({ title, description }: SeoProps) => {
  const router: NextRouter = useRouter();

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
            url: "https://avatars.githubusercontent.com/u/77146709?v=4",
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

export default Seo;

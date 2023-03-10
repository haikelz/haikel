import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { ChildrenProps, SeoProps } from "~types";

type LayoutProps = ChildrenProps &
  SeoProps & {
    className?: string;
  };

const Layout = ({ children, className, title, description }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate="%s"
        defaultTitle={title}
        description={description}
        canonical={`https://haikel.my.id${router.pathname}`}
        openGraph={{
          type: "website",
          url: `https://haikel.my.id${router.pathname}`,
          title: title,
          description: description,
          images: [
            {
              url: "https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569",
              alt: "OG Image",
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
      <main className={twMerge("container mx-auto max-w-3xl tracking-wide", className)}>
        {children}
      </main>
    </>
  );
};

export default Layout;

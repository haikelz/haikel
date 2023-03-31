import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { cxm } from "~lib/helpers/cxm";
import { ChildrenProps, SeoProps } from "~models";

type LayoutProps = ChildrenProps &
  SeoProps & {
    className?: string;
  };

const Layout = ({ children, className, title, description }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate="%s"
        defaultTitle={title}
        description={description}
        canonical={`https://haikel.my.id${asPath}`}
        openGraph={{
          type: "website",
          url: `https://haikel.my.id${asPath}`,
          title: title,
          description: description,
          images: [
            {
              url:
                asPath === "/" ||
                asPath === "/works" ||
                asPath === "/notes" ||
                asPath === "/guestbook"
                  ? "https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569"
                  : `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${title}`,
              alt: "Default OG Image",
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
      <main className={cxm("container mx-auto max-w-3xl tracking-wide", className)}>
        {children}
      </main>
    </>
  );
};

export default Layout;

import { NextSeo } from "next-seo";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { ChildrenProps, SeoProps } from "~types";

type LayoutProps = ChildrenProps &
  SeoProps & {
    className?: string;
  };

const Layout = ({ children, className, title, description }: LayoutProps) => {
  const path: string | null = usePathname();

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate="%s"
        defaultTitle={title}
        description={description}
        canonical={`https://haikel.my.id${path}`}
        openGraph={{
          type: "website",
          url: `https://haikel.my.id${path}`,
          title: title,
          description: description,
          images: [
            {
              url: "https://avatars.githubusercontent.com/u/77146709?v=4",
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
      <main className={twMerge("container mx-auto max-w-2xl tracking-wide", className)}>
        {children}
      </main>
    </>
  );
};

export default Layout;

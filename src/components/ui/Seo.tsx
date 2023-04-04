"use client";

import { NextSeo } from "next-seo";
import { usePathname } from "next/navigation";
import { cxm } from "~lib/helpers/cxm";
import { ChildrenProps, SeoProps } from "~models";

type LayoutProps = ChildrenProps &
  SeoProps & {
    className?: string;
  };

export default function Seo({ children, className, title, description }: LayoutProps) {
  const pathname = usePathname();

  const absoluteOgUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? "https://" + process.env.NEXT_PUBLIC_BASE_URL + "/api/og"
    : "/api/og";

  return (
    <>
      <NextSeo
        useAppDir={true}
        title={title}
        titleTemplate="%s"
        defaultTitle={title}
        description={description}
        canonical={`https://haikel.my.id${pathname}`}
        openGraph={{
          type: "website",
          url: `https://haikel.my.id${pathname}`,
          title: title,
          description: description,
          images: [
            {
              url:
                pathname === "/" ||
                pathname === "/works" ||
                pathname === "/notes" ||
                pathname === "/guestbook"
                  ? "https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569"
                  : absoluteOgUrl + `?title=${title}`,
              alt: "OG Image",
            },
          ],
          site_name: "haikel.my.id",
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
}

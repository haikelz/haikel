/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Haikel",
  titleTemplate: "%s | Haikel",
  defaultTitle: "Haikel",
  description: "Penikmat kopi dan pempek",
  canonical: "https://haikel.pages.dev/",
  openGraph: {
    url: "https://haikel.pages.dev/",
    title: "Haikel",
    description: "Penikmat kopi dan pempek",
    images: [
      {
        url: "/img/og-image.webp",
        alt: "Haikel",
      },
    ],
    site_name: "haikel",
  },
  twitter: {
    handle: "@ginkgo_byte",
    site: "@ginkgo_byte",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

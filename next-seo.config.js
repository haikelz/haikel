/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Haikel",
  titleTemplate: "%s | Haikel",
  defaultTitle: "Haikel",
  description: "Coffee and Nature Enjoyer",
  canonical: "https://haikel.my.id/",
  openGraph: {
    url: "https://haikel.my.id/",
    title: "Haikel",
    description: "Coffee and Nature Enjoyer",
    images: [
      {
        url: "https://raw.githubusercontent.com/haikelz/website/master/public/img/og-image.webp",
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

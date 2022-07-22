/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Haikel's Website",
  titleTemplate: "%s",
  defaultTitle: "Haikel's Website",
  description: "Penikmat Angin Pantai",
  canonical: "https://haikel.my.id/",
  openGraph: {
    type: "website",
    url: "https://haikel.my.id/",
    title: "Haikel",
    description: "Penikmat Angin Pantai",
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

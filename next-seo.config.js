/** @type {import('next-seo').DefaultSeoProps} */

const defaultSEOConfig = {
  title: "Haikel's Website",
  titleTemplate: "%s",
  defaultTitle: "Haikel's Website",
  description: "Frontend Enthusiast",
  canonical: "https://haikel.my.id",
  openGraph: {
    type: "website",
    url: "https://haikel.my.id",
    title: "Haikel",
    description: "Frontend Enthusiast",
    images: [
      {
        url: "https://og-image.vercel.app/**Haikel**%20.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg",
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

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://haikel.my.id/",
    sitemap: "https://haikel.my.id/sitemap.xml",
  };
}

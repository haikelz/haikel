import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://haikel.my.id/",
    sitemap: "https://haikel.my.id/sitemap.xml",
  };
}

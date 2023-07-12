import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://haikel.app/",
    sitemap: "https://haikel.app/sitemap.xml",
  };
}

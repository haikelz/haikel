import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://ekel.dev/",
    sitemap: "https://ekel.dev/sitemap.xml",
  };
}

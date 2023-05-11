import { MetadataRoute } from "next";
import { getAllNotes, getAllWorks } from "~lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getAllNotes().map(({ meta }) => ({
    url: `https://haikel.my.id/notes/${meta.slug}`,
    lastModified: meta.date,
  }));

  const works = getAllWorks().map(({ meta }) => ({
    url: `https://haikel.my.id/works/${meta.slug}`,
  }));

  const routes = ["", "/works", "/notes", "/guestbook"].map((route) => ({
    url: `https://haikel.my.id${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes, ...works];
}

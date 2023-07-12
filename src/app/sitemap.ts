import { MetadataRoute } from "next";
import { getAllNotes, getAllWorks } from "~lib/services";

export default function Sitemap(): MetadataRoute.Sitemap {
  const tags = getAllNotes()
    .map(({ meta }) =>
      meta.tags.map((tag) => ({ url: `https://haikel.app/tags/${tag}`, lastModified: meta.date }))
    )
    .flat();

  const notes = getAllNotes().map(({ meta }) => ({
    url: `https://haikel.app/notes/${meta.slug}`,
    lastModified: meta.date,
  }));

  const works = getAllWorks().map(({ meta }) => ({
    url: `https://haikel.app/works/${meta.slug}`,
  }));

  const routes = ["", "/works", "/notes", "/guestbook"].map((route) => ({
    url: `https://haikel.app${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes, ...works, ...tags];
}

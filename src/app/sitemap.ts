import { allNotes, allWorks } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  const tags = allNotes
    .map((item) =>
      item.tags.map((tag) => ({ url: `https://haikel.app/tags/${tag}`, lastModified: item.date }))
    )
    .flat();

  const notes = allNotes.map((item) => ({
    url: `https://haikel.app/notes/${item.slug}`,
    lastModified: item.date,
  }));

  const works = allWorks.map((item) => ({
    url: `https://haikel.app/works/${item.slug}`,
  }));

  const routes = ["/", "/works", "/notes", "/tags", "/guestbook"].map((route) => ({
    url: `https://haikel.app${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes, ...works, ...tags];
}

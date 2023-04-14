import { MetadataRoute } from "next";
import { getAllNotes, getAllWorks } from "~lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getAllNotes().map((note) => ({
    url: `https://haikel.my.id/notes/${note.meta.slug}`,
    lastModified: note.meta.date,
  }));

  const works = getAllWorks().map((work) => ({
    url: `https://haikel.my.id/works/${work.meta.slug}`,
  }));

  return [...notes, ...works];
}

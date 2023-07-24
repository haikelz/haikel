import { format } from "date-fns/esm";
import { writeFileSync } from "fs";
import RSS, { FeedOptions } from "rss";

import { getAllNotes } from "./get-all-notes";

/**
 * @see https://blog.logrocket.com/adding-rss-feed-next-js-app/
 */
export async function generateRssFeed() {
  const currentYear = format(new Date(), "yyyy");

  const feedOptions: FeedOptions = {
    title: "haikel.app",
    description: `RSS Feed for haikel.app`,
    site_url: "https://haikel.app",
    feed_url: `https://haikel.app/rss.xml`,
    image_url: `https://haikel.app/img/logo.png`,
    pubDate: new Date(),
    copyright: `2020-${currentYear} Haikel Ilham Hakim`,
  };

  const feed = new RSS(feedOptions);

  getAllNotes().map(({ meta }) => {
    feed.item({
      author: meta.author,
      title: meta.title,
      description: meta.description,
      url: `https://haikel.app/notes/${meta.slug}`,
      date: meta.date,
    });
  });

  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}

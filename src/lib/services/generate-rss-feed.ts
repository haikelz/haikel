import { format } from "date-fns/esm";
import { writeFileSync } from "fs";
import RSS, { FeedOptions } from "rss";
import { SITE_URL } from "~lib/utils/constants";
import { getAllNotes } from "./get-all-notes";

/**
 * @see https://blog.logrocket.com/adding-rss-feed-next-js-app/
 */
export async function generateRssFeed() {
  const currentYear = format(new Date(), "yyyy");

  const feedOptions: FeedOptions = {
    title: "haikel.app",
    description: `RSS Feed for haikel.app`,
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    image_url: `${SITE_URL}/img/logo.png`,
    pubDate: new Date(),
    copyright: `2020-${currentYear} Haikel Ilham Hakim`,
  };

  const feed = new RSS(feedOptions);

  getAllNotes().map(({ meta }) => {
    feed.item({
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/notes/${meta.slug}`,
      date: meta.date,
    });
  });

  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}

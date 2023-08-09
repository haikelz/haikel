import RSS, { FeedOptions } from "rss";
import { getAllNotes } from "~lib/services";

/**
 * @see https://www.jovertical.dev/articles/rss-feed-in-next-js-13-app-router
 */
export async function GET() {
  const feedOptions: FeedOptions = {
    title: "haikel.app",
    description: `RSS Feed for haikel.app`,
    site_url: "https://haikel.app",
    feed_url: `https://haikel.app/rss.xml`,
    image_url: `https://haikel.app/img/logo.png`,
    pubDate: new Date(),
    copyright: `Crafted by Haikel`,
  };

  const feed = new RSS(feedOptions);

  getAllNotes().forEach(({ meta }) => {
    feed.item({
      author: meta.author,
      title: meta.title,
      description: meta.description,
      url: `https://haikel.app/notes/${meta.slug}`,
      date: meta.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

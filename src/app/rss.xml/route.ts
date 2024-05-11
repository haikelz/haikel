import { allNotes } from "contentlayer/generated";
import RSS, { FeedOptions } from "rss";

/**
 * @see https://www.jovertical.dev/articles/rss-feed-in-next-js-13-app-router
 */
export async function GET() {
  const feedOptions: FeedOptions = {
    title: "ekel.dev",
    description: `RSS Feed for ekel.dev`,
    site_url: "https://ekel.dev",
    feed_url: `https://ekel.dev/rss.xml`,
    image_url: `https://ekel.dev/img/logo.png`,
    pubDate: new Date(),
    copyright: `Crafted by Haikel`,
  };

  const feed = new RSS(feedOptions);

  allNotes.forEach((item) => {
    feed.item({
      author: item.author,
      title: item.title,
      description: item.description,
      url: `https://ekel.dev/notes/${item.slug}`,
      date: item.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

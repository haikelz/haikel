import { format } from "date-fns/esm";
import { NextResponse } from "next/server";
import RSS, { FeedOptions } from "rss";
import { getAllNotes } from "~lib/services";
import { SITE_URL } from "~lib/utils/constants";

export async function GET() {
  try {
    const currentYear = format(new Date(), "yyyy");

    const feedOptions: FeedOptions = {
      title: "haikel.app",
      description: `RSS Feed for haikel.app`,
      site_url: SITE_URL,
      feed_url: `${SITE_URL}/rss.xml`,
      image_url: `${SITE_URL}/img/logo.png`,
      pubDate: new Date(),
      language: "en",
      copyright: `2020-${currentYear} Haikel Ilham Hakim`,
    };

    const feed = new RSS(feedOptions);

    getAllNotes().map(({ meta }) => {
      feed.item({
        author: meta.author,
        title: meta.title,
        description: meta.description,
        categories: meta.tags,
        url: `${SITE_URL}/notes/${meta.slug}`,
        date: meta.date,
      });
    });

    return new NextResponse(feed.xml({ indent: true }), {
      status: 200,
      statusText: "Success",
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        data: null,
        message: "Cannot get RSS Feed!",
      },
      { status: 500 }
    );
  }
}

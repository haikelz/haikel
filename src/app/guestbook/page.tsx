import { cxm } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import db from "~lib/utils/db";
import { GuestsList } from "~ui/lists";
import Main from "~ui/main";
import { Paragraph } from "~ui/typography";

import GuestbookClient from "./client";

const baseMetadata = {
  title: "Guestbook",
  description: "Write a message for me and others",
  url: `${SITE_URL}/guestbook`,
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "haikel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

/**
 * Implement ISR(Incremental Static Regeneration)
 * @see https://beta.nextjs.org/docs/data-fetching/revalidating
 */
export const revalidate = 0;

async function getData() {
  try {
    const { data, error } = await db.from("guestbook").select().order("id", { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default async function Guestbook() {
  const guestbook = await getData();

  return (
    <Main
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <GuestbookClient />
      {guestbook?.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <GuestsList guestbook={guestbook} />
        </section>
      ) : (
        <Paragraph className="font-semibold">There is no messages now!</Paragraph>
      )}
    </Main>
  );
}

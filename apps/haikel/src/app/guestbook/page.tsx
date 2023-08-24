import { format } from "date-fns/esm";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import db from "~lib/utils/db";
import { ibmPlexSans } from "~lib/utils/fonts";
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
    <Main className={tw("flex min-h-screen flex-col items-start justify-start", "py-8")}>
      <GuestbookClient />
      {guestbook?.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          {guestbook?.map((guest) => (
            <div key={guest.id} className="h-full">
              <div>
                <span
                  className={tw(
                    "cursor-pointer text-xl font-bold",
                    "hover:text-blue-500",
                    ibmPlexSans.className
                  )}
                >
                  {guest.message}
                </span>
              </div>
              <Paragraph className="mt-2 font-medium tracking-wide">
                {guest.username}
                {guest.created_at !== ""
                  ? `. ${format(new Date(guest.created_at), "LLLL d, yyyy")}`
                  : null}
              </Paragraph>
            </div>
          ))}
        </section>
      ) : (
        <Paragraph className="font-semibold">There is no messages now!</Paragraph>
      )}
    </Main>
  );
}

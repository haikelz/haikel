import { cxm } from "~lib/helpers/cxm";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import supabase from "~lib/utils/supabase";
import GuestbookClient from "~sections/GuestbookClient";
import Main from "~ui/Main";
import { ListGuests } from "~ui/lists";
import { Paragraph } from "~ui/typography";

const baseMetadata = {
  title: "Guestbook",
  description: "Write a message for me and others",
  url: "https://haikel.my.id/guestbook",
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
    siteName: "haikel.my.id",
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
export const revalidate = 25;

async function getDataFromSupabase() {
  try {
    const { data, error } = await supabase
      .from("guestbook")
      .select()
      .order("id", { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default async function Guestbook() {
  const guestbook = await getDataFromSupabase();

  return (
    <Main
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <GuestbookClient />
      {guestbook?.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <ListGuests guestbook={guestbook} />
        </section>
      ) : (
        <Paragraph className="font-semibold">There is no messages now!</Paragraph>
      )}
    </Main>
  );
}

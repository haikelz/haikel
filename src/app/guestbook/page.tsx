import { ListGuests } from "~ui/lists";
import { Paragraph } from "~ui/typography";
import { cxm } from "~lib/helpers/cxm";
import supabase from "~lib/utils/supabase";
import GuestbookClient from "~sections/GuestbookClient";
import Seo from "~ui/Seo";

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
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default async function Guestbook() {
  const guestbook = await getDataFromSupabase();

  return (
    <Seo
      title="Guestbook"
      description="Write a message for me and others"
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
    </Seo>
  );
}

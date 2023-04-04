"use client";

/**
 * TODO: fetch data from supabase in server components
 */
import { atom, useAtom } from "jotai";
import { signIn, signOut, useSession } from "next-auth/react";
import { SyntheticEvent, useEffect, useRef } from "react";
import { cxm } from "~lib/helpers/cxm";
import supabase from "~lib/utils/supabase";
import { GithubIcon } from "~ui/icons";
import { MessageInput } from "~ui/inputs";
import { ListGuests } from "~ui/lists";
import { Heading, Paragraph, Underline } from "~ui/typography";

const guestbookAtom = atom<Array<{}>>([{}]);

export default function GuestbookClient() {
  const [guestbook, setGuestbook] = useAtom(guestbookAtom);
  const { data: session } = useSession();

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      const { error } = await supabase.from("guestbook").insert([
        {
          message: ref.current?.value,
          username: session?.user?.name,
          email: session?.user?.email,
        },
      ]);

      if (error) throw error;
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function getDataFromSupabase() {
      const { data, error } = await supabase
        .from("guestbook")
        .select()
        .order("created_at", { ascending: false });

      if (error) throw error;
      setGuestbook(data);
    }

    getDataFromSupabase();
  }, []);

  return (
    <>
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Guestbook
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>
            Write a message for me and others.
            {session ? (
              <span>
                {" "}
                Want to Sign Out instead? Just click{" "}
                <button
                  className={cxm(
                    "cursor-pointer font-bold",
                    "underline decoration-dashed underline-offset-[5px]",
                    "hover:text-blue-500 hover:decoration-blue-500"
                  )}
                  type="button"
                  aria-label="sign out"
                  onClick={() => signOut()}
                >
                  here
                </button>
              </span>
            ) : null}
          </Paragraph>
        </div>
      </section>
      {!session ? (
        <div className="my-4">
          <button
            type="button"
            aria-label="sign in"
            className={cxm(
              "flex items-center justify-center space-x-3 rounded-md",
              "bg-zinc-800",
              "px-3.5 py-2",
              "font-semibold text-white",
              "hover:bg-zinc-700"
            )}
            onClick={() => signIn("github")}
          >
            <GithubIcon />
            <span className="text-base md:text-lg">Sign In with Github</span>
          </button>
        </div>
      ) : (
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <MessageInput ref={ref} />
          </form>
        </div>
      )}
      {guestbook?.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          <ListGuests guestbook={guestbook} />
        </section>
      ) : (
        <Paragraph className="font-semibold">There is no messages now!</Paragraph>
      )}
    </>
  );
}

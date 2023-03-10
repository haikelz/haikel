import { atom, useAtom } from "jotai";
import { signIn, signOut, useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { twJoin } from "tailwind-merge";
import supabase from "~lib/utils/supabase";
import { messageAtom } from "~store";
import { GuestbookProps } from "~types";
import { MessageBar } from "~ui/input";
import Layout from "~ui/layout";
import ListGuests from "~ui/lists/ListGuests";
import { Heading, Paragraph, Underline } from "~ui/typography";

const guestbookAtom = atom<GuestbookProps>([
  { id: "", created_at: "", email: "", username: "", message: "" },
]);

const Guestbook = () => {
  const router: NextRouter = useRouter();

  const { data: session } = useSession();

  const [guestbook, setGuestbook] = useAtom(guestbookAtom);
  const [message, setMessage] = useAtom(messageAtom);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const { error } = await supabase.from("guestbook").insert([
        {
          message,
          username: session?.user?.name,
          email: session?.user?.email,
        },
      ]);

      if (error) throw error;
      router.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getDataFromSupabase = async () => {
      try {
        /**
         * Order by "created_at" and set ascending to false
         */
        const { data, error } = await supabase
          .from("guestbook")
          .select()
          .order("created_at", { ascending: false });

        if (error) throw error;
        if (data) setGuestbook(data);
      } catch (err) {
        console.error(err);
      }
    };

    getDataFromSupabase();
  }, [setGuestbook]);

  return (
    <Layout
      title="Guestbook"
      description="Write a message for me and others"
      className={twJoin("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <div className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="title-font text-left">
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
                  className={twJoin(
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
      </div>
      {!session ? (
        <div className="my-4">
          <button
            type="button"
            aria-label="sign in"
            className={twJoin(
              "flex items-center justify-center space-x-3 rounded-md",
              "bg-zinc-800",
              "py-2 px-3.5",
              "font-semibold text-white",
              "hover:bg-zinc-700"
            )}
            onClick={() => signIn("github")}
          >
            <FaGithub size={22} />
            <span>Sign In with Github</span>
          </button>
        </div>
      ) : (
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <MessageBar message={message} setMessage={setMessage} />
          </form>
        </div>
      )}
      {guestbook?.length ? (
        <div className="mb-10 flex w-full flex-col space-y-8">
          <ListGuests guestbook={guestbook} />
        </div>
      ) : (
        <Paragraph className="font-semibold">There is no messages now!</Paragraph>
      )}
    </Layout>
  );
};

export default Guestbook;

import { PostgrestError } from "@supabase/supabase-js";
import { useAtom } from "jotai";
import type { GetStaticProps } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { twJoin } from "tailwind-merge";
import supabase from "~lib/utils/supabase";
import { messageAtom } from "~store";
import { MessageBar } from "~ui/input/MessageBar";
import Layout from "~ui/layout";
import ListGuests from "~ui/lists/ListGuests";
import { Heading, Paragraph, Underline } from "~ui/typography";

type GuestbookProps = {
  guestbook: {
    data: [
      {
        id: string;
        created_at: string;
        email: string;
        username: string;
        message: string;
      }
    ];
    error: PostgrestError | null;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  /**
   * Order by "id" the data from guestbook and set ascending to false
   */
  const { data, error } = await supabase
    .from("guestbook")
    .select()
    .order("id", { ascending: false });

  if (error) throw error;

  return {
    props: {
      guestbook: {
        data,
      },
    },
  };
};

const Guestbook = ({ guestbook }: GuestbookProps) => {
  const { data: session } = useSession();
  const { data } = guestbook;

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
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

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
      {data.length ? (
        <div className="mb-10 flex w-full flex-col space-y-8">
          <ListGuests guestbook={data} />
        </div>
      ) : (
        <Paragraph className="font-semibold">There is no messages now!</Paragraph>
      )}
    </Layout>
  );
};

export default Guestbook;

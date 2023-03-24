import type { GetStaticProps } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { SyntheticEvent, useRef } from "react";
import { twJoin } from "tailwind-merge";
import { MessageInput } from "~components/ui/inputs";
import supabase from "~lib/utils/supabase";
import { GuestbookProps } from "~types";
import { GithubIcon } from "~ui/icons";
import Layout from "~ui/layout";
import ListGuests from "~ui/lists/ListGuests";
import { Heading, Paragraph, Underline } from "~ui/typography";

export const getStaticProps: GetStaticProps = async () => {
  /**
   * Order by "created_at" and set ascending to false
   */
  const { data, error } = await supabase
    .from("guestbook")
    .select()
    .order("created_at", { ascending: false });
  if (error) throw error;

  return {
    props: {
      guestbook: data,
    },
    revalidate: 5,
  };
};

const Guestbook = ({ guestbook }: { guestbook: GuestbookProps }) => {
  const ref = useRef<HTMLInputElement>(null);

  const { reload } = useRouter();
  const { data: session } = useSession();

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
      reload();
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
      <section className="flex w-full flex-wrap items-start justify-start">
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
      </section>
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
    </Layout>
  );
};

export default Guestbook;

"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { ChangeEvent, useRef } from "react";
import { cxm } from "~lib/helpers";
import db from "~lib/utils/db";
import { MessageInput } from "~ui/inputs";
import { GoogleIcon } from "~ui/svgs";
import { Heading, Paragraph, Underline } from "~ui/typography";

export default function GuestbookClient() {
  const { data: session } = useSession();

  const messageRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const { error } = await db.from("guestbook").insert([
        {
          message: messageRef.current?.value,
          username: session?.user?.name,
          email: session?.user?.email,
        },
      ]);

      if (error) throw error;

      messageRef.current!.value = "";
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

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
        <div className="my-4 flex items-center justify-center space-x-3">
          <button
            type="button"
            aria-label="sign in with github"
            className={cxm(
              "flex items-center justify-center space-x-3 rounded-md",
              "bg-base-1",
              "px-3.5 py-2",
              "font-semibold text-white"
            )}
            onClick={() => signIn("github")}
          >
            <IconBrandGithub size={22} />
            <span className="text-base md:text-lg">Github</span>
          </button>
          <span className="text-base">or</span>
          <button
            className={cxm(
              "flex items-center justify-center space-x-3 rounded-md",
              "bg-base-5",
              "px-3.5 py-2",
              "font-semibold text-black"
            )}
            type="button"
            aria-label="sign in with google"
            onClick={() => signIn("google")}
          >
            <GoogleIcon />
            <span className="text-base md:text-lg">Google</span>
          </button>
        </div>
      ) : (
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <MessageInput ref={messageRef} />
          </form>
        </div>
      )}
    </>
  );
}

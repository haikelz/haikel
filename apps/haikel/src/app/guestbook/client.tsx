"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconBrandGithub } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { tw } from "~lib/helpers";
import db from "~lib/utils/db";
import { messageSchema } from "~lib/utils/schema";
import { GoogleIcon } from "~ui/svgs";
import { Heading, Paragraph, Underline } from "~ui/typography";

export default function GuestbookClient() {
  const { data: session } = useSession();

  const {
    getValues,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ defaultValues: { message: "" }, resolver: zodResolver(messageSchema) });

  async function onSubmit() {
    try {
      const { error } = await db.from("guestbook").insert([
        {
          message: getValues("message"),
          username: session?.user?.name,
          email: session?.user?.email,
        },
      ]);

      if (error) throw error;
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
                  className={tw(
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
            className={tw(
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
            className={tw(
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-6 w-full relative">
              <input
                {...register("message")}
                className={tw(
                  "block w-full border-2 border-base-0",
                  "focus:border-blue-500 focus:ring-blue-500 focus:ring-1",
                  "dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-1",
                  "dark:border-base-5 bg-white dark:bg-base-0",
                  "rounded-md",
                  "px-4 py-1.5 font-medium outline-none"
                )}
                type="text"
                name="message"
                required
                placeholder="Add your message...."
              />
              {errors.message ? (
                <Paragraph className="mt-1">{errors.message.message}</Paragraph>
              ) : null}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

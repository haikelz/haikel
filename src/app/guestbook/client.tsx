"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { GuestbookProps } from "@types";
import { format } from "date-fns";
import { atom, useAtom } from "jotai";
import { GithubIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { P, match } from "ts-pattern";
import Turnstile from "~components/turnstile";
import { useGuestbook } from "~hooks";
import { tw } from "~lib/utils/tw";
import { inter } from "~lib/utils/fonts";
import { messageSchema } from "~lib/utils/form-schema";
import { GoogleIcon } from "~ui/svgs";
import { Paragraph } from "~ui/typography";

import ErrorClient from "./error-client";
import LoadingClient from "./loading-client";

const idAtom = atom<number>(0);
const isEditedAtom = atom<boolean>(false);

export function FormAndGuestsList({ session }: { session: Session }) {
  const [isShowLoginGuestbookMethod, setIsShowLoginGuestbookMethod] =
    useState<boolean>(false);

  const [id, setId] = useAtom(idAtom);
  const [isEdited, setIsEdited] = useAtom(isEditedAtom);

  const { get, postMutation, updateMutation, deleteMutation } = useGuestbook({
    getKey: "guestbook",
    postKey: "post-message",
    updateKey: id,
    deleteKey: id,
  });

  const {
    getValues,
    setValue,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: { message: "" },
    resolver: zodResolver(messageSchema),
  });

  function onSubmit() {
    // detect if value are edited
    match({ isEdited: isEdited })
      .with({ isEdited: true }, () =>
        updateMutation
          .mutateAsync({
            id: id,
            message: getValues("message"),
          })
          .then(() => get.refetch())
      )
      .otherwise(() =>
        postMutation
          .mutateAsync({
            message: getValues("message"),
            username: session?.user.name as string,
            email: session?.user.email as string,
          })
          .then(() => get.refetch())
      );

    setValue("message", "");
  }

  function handleDelete(id: number) {
    deleteMutation.mutateAsync({ id: id }).then(() => get.refetch());
  }

  function handleEdit(id: number, message: string) {
    setValue("message", message);
    setIsEdited(true);
    setId(id);
  }

  if (get.isPending) return <LoadingClient />;
  if (get.isError) return <ErrorClient />;

  const guestbook = get.data as GuestbookProps[];

  return (
    <>
      {match({ session: session })
        .with({ session: P.when((session) => !session) }, () => (
          <>
            {match({ isShowLoginGuestbookMethod })
              .with(
                {
                  isShowLoginGuestbookMethod: true,
                },
                () => (
                  <div className="my-4 w-fit flex items-center justify-center space-x-3">
                    <SignInWithGithub />
                    <span className="text-base">or</span>
                    <SignInWithGoogle />
                  </div>
                )
              )
              .otherwise(() => null)}
            <Turnstile
              setIsShowLoginGuestbookMethod={setIsShowLoginGuestbookMethod}
            />
          </>
        ))
        .otherwise(() => (
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
                {match(errors)
                  .with({ message: P.when((message) => message) }, () => (
                    <Paragraph className="mt-2">
                      {errors.message?.message}
                    </Paragraph>
                  ))
                  .otherwise(() => null)}
              </div>
            </form>
          </div>
        ))}
      {match({ guestbook: guestbook })
        .with({ guestbook: P.when((guestbook) => guestbook.length) }, () => (
          <section className="mb-10 flex w-full flex-col space-y-8">
            {guestbook
              .slice(guestbook.length < 100 ? 0 : 100, guestbook.length)
              .map((guest) => (
                <div data-cy="guest-item" key={guest.id} className="h-full">
                  <div
                    className={
                      session ? "flex space-x-3 justify-start items-center" : ""
                    }
                  >
                    <span
                      className={tw(
                        "cursor-pointer text-lg font-bold",
                        "hover:text-blue-500",
                        inter.className
                      )}
                    >
                      {guest.message}
                    </span>
                    {match({ session: session })
                      .with(
                        {
                          session: P.when(
                            (session) =>
                              (session &&
                                guest.email === session?.user.email) ||
                              session?.user.role === "admin"
                          ),
                        },
                        () => (
                          <>
                            {match(session.user)
                              .with(
                                { role: P.when((role) => role === "admin") },
                                () => (
                                  <button
                                    type="button"
                                    aria-label="delete message"
                                    className={tw(
                                      "dark:bg-base-1 bg-base-5",
                                      "hover:bg-base-5 dark:hover:bg-base-2 p-1 rounded-md"
                                    )}
                                    onClick={() =>
                                      handleDelete(Number(guest.id))
                                    }
                                  >
                                    <TrashIcon size={22} />
                                  </button>
                                )
                              )
                              .otherwise(() => null)}
                            <button
                              type="button"
                              aria-label="edit message"
                              className={tw(
                                "dark:bg-base-1 bg-base-5",
                                "hover:bg-base-5 dark:hover:bg-base-2 p-1 rounded-md"
                              )}
                              onClick={() =>
                                handleEdit(
                                  Number(guest.id),
                                  guest.message as string
                                )
                              }
                            >
                              <PencilIcon size={22} />
                            </button>
                          </>
                        )
                      )
                      .otherwise(() => null)}
                  </div>
                  <Paragraph className="mt-2 text-base font-medium tracking-wide">
                    {guest.username}
                    {guest.created_at !== ""
                      ? `. ${format(
                          new Date(guest.created_at as string),
                          "LLLL d, yyyy"
                        )}`
                      : null}
                  </Paragraph>
                </div>
              ))}
          </section>
        ))
        .otherwise(() => (
          <Paragraph className="font-semibold">
            There is no messages now!
          </Paragraph>
        ))}
    </>
  );
}

function SignInWithGoogle() {
  return (
    <button
      className={tw(
        "flex items-center justify-center space-x-3 rounded-md",
        "bg-base-5",
        "px-3.5 py-2",
        "font-bold text-base-0"
      )}
      type="button"
      aria-label="sign in with google"
      onClick={() => signIn("google")}
    >
      <GoogleIcon />
      <span className="text-base ">Google</span>
    </button>
  );
}

function SignInWithGithub() {
  return (
    <button
      type="button"
      aria-label="sign in with github"
      className={tw(
        "flex items-center justify-center space-x-3 rounded-md",
        "bg-base-1",
        "px-3.5 py-2",
        "font-bold text-base-5"
      )}
      onClick={() => signIn("github")}
    >
      <GithubIcon />
      <span className="text-base">Github</span>
    </button>
  );
}

export function SignOut() {
  return (
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
  );
}

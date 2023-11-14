"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  QueryClient,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import { format } from "date-fns/esm";
import { atom, useAtom } from "jotai";
import { GithubIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";
import { messageSchema } from "~lib/utils/form-schema";
import { trpc } from "~lib/utils/trpc/client";
import { GoogleIcon } from "~ui/svgs";
import { Paragraph } from "~ui/typography";

import ErrorClient from "./error-client";
import LoadingClient from "./loading-client";

const idAtom = atom<number>(0);
const isEditedAtom = atom<boolean>(false);

export function FormAndGuestsList({ session }: { session: Session | null }) {
  const [id, setId] = useAtom(idAtom);
  const [isEdited, setIsEdited] = useAtom(isEditedAtom);

  const queryClient: QueryClient = useQueryClient();

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

  // post
  const postMutation = trpc.post.useMutation({
    mutationKey: ["post-message"],
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["post-message"],
        exact: true,
      });
    },
  });

  // delete
  const deleteMutation = trpc.delete.useMutation({
    mutationKey: [id],
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: [id], exact: true });
    }, 
  });

  // update
  const updateMutation = trpc.patch.useMutation({
    mutationKey: [id],
    onSettled: async () =>{
      return await queryClient.invalidateQueries({ queryKey: [id], exact: true });
    } 
  });

  const { data, isError, isPending } = trpc.get.useQuery(
    { key: "guestbook" },
    {
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  function onSubmit() {
    // detect if value are edited
    if (isEdited) {
      updateMutation.mutate({
        id: id,
        message: getValues("message"),
      });
    } else {
      postMutation.mutate({
        message: getValues("message"),
        username: session?.user.name as string,
        email: session?.user.email as string,
      });
    }

    setValue("message", "");
  }

  function handleDelete(id: number) {
    deleteMutation.mutate({ id: id });
  }

  function handleEdit(id: number, message: string) {
    setValue("message", message);
    setIsEdited(true);
    setId(id);
  }

  if (isPending) return <LoadingClient />;
  if (isError) return <ErrorClient />;

  const guestbook = data;

  return (
    <>
      {!session ? (
        <div className="my-4 flex items-center justify-center space-x-3">
          <SignInWithGithub />
          <span className="text-base">or</span>
          <SignInWithGoogle />
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
                <Paragraph className="mt-2">{errors.message.message}</Paragraph>
              ) : null}
            </div>
          </form>
        </div>
      )}
      {guestbook?.length ? (
        <section className="mb-10 flex w-full flex-col space-y-8">
          {guestbook?.map((guest) => (
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
                    ibmPlexSans.className
                  )}
                >
                  {guest.message}
                </span>
                {(session && guest.email === session.user.email) ||
                session?.user.role === "admin" ? (
                  <>
                    <button
                      type="button"
                      aria-label="delete message"
                      className={tw(
                        "dark:bg-base-1 bg-base-5",
                        "hover:bg-gray-200 dark:hover:bg-base-2 p-1 rounded-md"
                      )}
                      onClick={() => handleDelete(Number(guest.id))}
                    >
                      <TrashIcon size={22} />
                    </button>
                    <button
                      type="button"
                      aria-label="edit message"
                      className={tw(
                        "dark:bg-base-1 bg-base-5",
                        "hover:bg-gray-200 dark:hover:bg-base-2 p-1 rounded-md"
                      )}
                      onClick={() =>
                        handleEdit(Number(guest.id), guest.message as string)
                      }
                    >
                      <PencilIcon size={22} />
                    </button>
                  </>
                ) : null}
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
      ) : (
        <Paragraph className="font-semibold">
          There is no messages now!
        </Paragraph>
      )}
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
        "font-semibold text-black"
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
        "font-semibold text-white"
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

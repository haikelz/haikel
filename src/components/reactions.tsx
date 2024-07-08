"use client";

import { keepPreviousData, useQueryClient } from "@tanstack/react-query";
import { HeartIcon } from "lucide-react";
import { trpc } from "~lib/utils/trpc/client";

export default function Reactions({ slug }: { slug: string }) {
  const queryClient = useQueryClient();

  const { data, refetch } = trpc.reactions.get.useQuery(
    { slug },
    {
      placeholderData: keepPreviousData,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const postMutation = trpc.reactions.post.useMutation({
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [slug], exact: true }),
  });

  function onLove() {
    postMutation.mutateAsync({ slug }).then(() => refetch());
  }

  return (
    <button
      type="button"
      aria-label="love"
      onClick={onLove}
      className="border border-dashed border-base-4 dark:border-base-5 bg-base-5 dark:bg-base-1 flex justify-center items-center w-fit space-x-2 px-3 py-1.5"
    >
      <HeartIcon className="fill-red-500 text-red-500" />
      <span className="font-bold">{data?.love ? data.love : "-"} Love</span>
    </button>
  );
}

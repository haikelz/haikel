"use client";

import {
  QueryClient,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import { trpc } from "~lib/utils/trpc/client";

type UseGuestbookProps<T> = {
  getKey: string;
  postKey: T;
  updateKey: T;
  deleteKey: T;
};

export function useGuestbook({
  getKey,
  postKey,
  updateKey,
  deleteKey,
}: UseGuestbookProps<string | number>) {
  const queryClient: QueryClient = useQueryClient();

  const postMutation = trpc.guestbook.post.useMutation({
    mutationKey: [postKey],
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: [postKey], exact: true }),
  });

  const updateMutation = trpc.guestbook.patch.useMutation({
    mutationKey: [updateKey],
    onSettled: async () =>
      await queryClient.invalidateQueries({
        queryKey: [updateKey],
        exact: true,
      }),
  });

  const deleteMutation = trpc.guestbook.delete.useMutation({
    mutationKey: [deleteKey],
    onSettled: async () =>
      await queryClient.invalidateQueries({
        queryKey: [deleteKey],
        exact: true,
      }),
  });

  const get = trpc.guestbook.get.useQuery(
    {
      key: getKey,
    },
    {
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return { get, postMutation, updateMutation, deleteMutation };
}

"use client";

import { keepPreviousData } from "@tanstack/react-query";
import { trpc } from "~lib/utils/trpc/client";

export default function NoteViews({ slug }: { slug: string }) {
  const { data } = trpc.pageviews.post.useQuery(
    { slug },
    {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    }
  );

  return data?.count;
}

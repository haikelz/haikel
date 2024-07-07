"use client";

import { useQuery } from "@tanstack/react-query";
import { ofetch } from "ofetch";
import { env } from "~env.mjs";
import { CONDITION } from "~lib/utils/constants";

const { NEXT_PUBLIC_DEVELOPMENT_URL, NEXT_PUBLIC_PRODUCTION_URL } = env;

type ViewsProps = {
  count: number;
};

async function postViews(slug: string, title: string): Promise<number> {
  const response: ViewsProps = await ofetch(
    `${
      CONDITION === "development"
        ? NEXT_PUBLIC_DEVELOPMENT_URL
        : NEXT_PUBLIC_PRODUCTION_URL
    }/api/pageviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, title }),
    }
  );

  return response.count;
}

export default function NoteViews({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const { data } = useQuery({
    queryKey: ["pageviews"],
    queryFn: () => postViews(slug, title),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return data;
}

"use client";

import { ofetch } from "ofetch";
import { useEffect } from "react";
import { env } from "~env.mjs";

const condition = process.env.NODE_ENV;

const { NEXT_PUBLIC_DEVELOPMENT_URL, NEXT_PUBLIC_PRODUCTION_URL } = env;

export default function NoteViews({ slug }: { slug: string }) {
  useEffect(() => {
    async function noteViews(): Promise<void> {
      await ofetch(
        `${
          condition === "development"
            ? NEXT_PUBLIC_DEVELOPMENT_URL
            : NEXT_PUBLIC_PRODUCTION_URL
        }/api/pageviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        }
      );
    }

    noteViews();
  }, [slug]);

  return null;
}

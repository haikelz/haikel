"use client";

import { ofetch } from "ofetch";
import { useEffect } from "react";
import { env } from "~env.mjs";

const condition = process.env.NODE_ENV;

const { NEXT_PUBLIC_PRODUCTION_URL, NEXT_PUBLIC_DEVELOPMENT_URL } = env;

/**
 * A custom hook that will do a POST operation to `/api/pageviews`
 * @param slug
 */
export function useViews(slug: string): void {
  useEffect(() => {
    async function postViews() {
      await ofetch(
        `${
          condition === "development" ? NEXT_PUBLIC_DEVELOPMENT_URL : NEXT_PUBLIC_PRODUCTION_URL
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

    postViews();
  }, [slug]);
}

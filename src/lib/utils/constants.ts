import { env } from "~env.mjs";

const { NEXT_PUBLIC_VERCEL_URL } = env;

export const SITE_URL = `https://${NEXT_PUBLIC_VERCEL_URL}`;
export const DEFAULT_OG_URL = "/img/opengraph.png";

export const ABSOLUTE_OG_URL = NEXT_PUBLIC_VERCEL_URL
  ? "https://" + NEXT_PUBLIC_VERCEL_URL + "/api/og"
  : "/api/og";

export const condition = process.env.NODE_ENV;

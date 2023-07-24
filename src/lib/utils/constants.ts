import { join } from "path";
import { env } from "~env.mjs";

const { NEXT_PUBLIC_VERCEL_URL } = env;

export const SITE_URL = `https://${NEXT_PUBLIC_VERCEL_URL}`;
export const NOTES_PATH = join(process.cwd(), "src/contents/notes");
export const WORKS_PATH = join(process.cwd(), "src/contents/works");
export const DEFAULT_OG_URL =
  "https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569";
export const ABSOLUTE_OG_URL = NEXT_PUBLIC_VERCEL_URL
  ? "https://" + NEXT_PUBLIC_VERCEL_URL + "/api/og"
  : "/api/og";

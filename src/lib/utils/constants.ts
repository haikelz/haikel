import { join } from "path";

export const NOTES_PATH: string = join(process.cwd(), "src/contents/notes");
export const WORKS_PATH: string = join(process.cwd(), "src/contents/works");
export const absoluteOgUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api/og"
  : "/api/og";

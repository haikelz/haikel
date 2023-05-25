import { join } from "path";

export const NOTES_PATH: string = join(process.cwd(), "src/contents/notes");
export const WORKS_PATH: string = join(process.cwd(), "src/contents/works");
export const DEFAULT_OG_URL =
  "https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569";
export const ABSOLUTE_OG_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api/og"
  : "/api/og";

// env
export const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL as string;
export const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN as string;
export const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
export const GITHUB_SECRET = process.env.NEXT_PUBLIC_GITHUB_SECRET as string;
export const GITHUB_ID = process.env.NEXT_PUBLIC_GITHUB_ID as string;
export const GOOGLE_SECRET = process.env.NEXT_PUBLIC_GOOGLE_SECRET as string;
export const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID as string;
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET as string;
export const NEXTAUTH_URL = process.env.NEXTAUTH_URL as string;
export const DABATASE_URL = process.env.DATABASE_URL as string;

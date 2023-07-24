import { createClient } from "@supabase/supabase-js";
import { env } from "~env.mjs";

const { NEXT_PUBLIC_SUPABASE_KEY, NEXT_PUBLIC_SUPABASE_URL } = env;

const db = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY, {
  auth: { persistSession: false },
});

export default db;

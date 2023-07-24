import { createClient } from "@supabase/supabase-js";
import { NEXT_PUBLIC_SUPABASE_KEY, NEXT_PUBLIC_SUPABASE_URL } from "./constants";

const db = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY, {
  auth: { persistSession: false },
});

export default db;

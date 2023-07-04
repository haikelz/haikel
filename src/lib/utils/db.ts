import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

const db = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

export default db;

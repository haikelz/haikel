import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

const supabaseKey = SUPABASE_KEY;
const supabaseUrl = SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

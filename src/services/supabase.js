import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rxmeypoqtuebpscgbcgh.supabase.co";
const supabaseAnonKey = "sb_publishable_q5ImiA3LLDllqPUa8QkIuw_1nIkPzH6";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
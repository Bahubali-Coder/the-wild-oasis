import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sogqurhipgllssnzwaca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZ3F1cmhpcGdsbHNzbnp3YWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MTc2MTksImV4cCI6MjA3MDM5MzYxOX0.WBzCZq0_-osdCrvBgzhxBEOCwwzK-Is3DKsx2YvJZWA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";
const supabase_url = "https://pwvdtqnhxptwytztfwnm.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3dmR0cW5oeHB0d3l0enRmd25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0MjIxMjQsImV4cCI6MTk5NDk5ODEyNH0.wwGpW5Vj2_cvxDZW_kteVs_dKrFimuqzxqNzVqthEwY";
const supabase = createClient(supabase_url, SUPABASE_API_KEY);
export { supabase, supabase_url, SUPABASE_API_KEY };

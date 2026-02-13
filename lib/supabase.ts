import { createClient } from '@supabase/supabase-js';

// 🔥 Replace these with your own Supabase values
const supabaseUrl = "https://qeozugufnzkuvwxbaxxx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlb3p1Z3VmbnprdXZ3eGJheHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NjA3NjYsImV4cCI6MjA4NjUzNjc2Nn0.owlVJMFYHXSRO5UZgToTBs_NzsdwBA8NKfFhwm17wws";

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
    },
});

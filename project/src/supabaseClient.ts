import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oupbeuitugitksrgopin.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cGJldWl0dWdpdGtzcmdvcGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NTIwNTEsImV4cCI6MjA3MzQyODA1MX0.cyhEuaGXVeRS8zFgO0K1Fs76M6PFuhfmZ5VPeNnGDeM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

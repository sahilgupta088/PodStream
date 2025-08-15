import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ocivkhdmoipyzdkgnlwd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jaXZraGRtb2lweXpka2dubHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNTU5NDcsImV4cCI6MjA3MDgzMTk0N30.fXERiR9XUjWBZg9YvfJDXrImrYHcDb-1WFWHMM41F08';

export const supabase = createClient(supabaseUrl, supabaseKey);

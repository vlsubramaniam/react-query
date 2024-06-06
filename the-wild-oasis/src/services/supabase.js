import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://enflovyeeovqsvusknoy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZmxvdnllZW92cXN2dXNrbm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MTA1NTEsImV4cCI6MjAzMzE4NjU1MX0.8k6Fl8yR7JDf_kjnE4Sk9K8GubjvuLk195SL1f7gh6A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

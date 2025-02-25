import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__PROJECT_URL,
  import.meta.env.VITE__SUPABASE__API_KEY,
);

export { supabase };

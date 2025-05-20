import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__URL,
  import.meta.env.VITE__SUPABASE__KEY,
);

export { supabase };

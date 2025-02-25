import { createClient } from '@supabase/supabase-js';

import { Database } from '../database.types';

const supabase = createClient<Database>(
  import.meta.env.VITE__SUPABASE__PROJECT_URL,
  import.meta.env.VITE__SUPABASE__API_KEY,
);

export { supabase };

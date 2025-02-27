import { createClient } from '@supabase/supabase-js';

import { Database } from '../database.types';

const supabase = createClient<Database>(
  import.meta.env.VITE__SUPABASE__PROJECT_URL,
  import.meta.env.VITE__SUPABASE__API_KEY,
);

function signOut() {
  supabase.auth.signOut();
}

async function getUserThroughSession() {
  const { data } = await supabase.auth.getSession();
  return data.session?.user;
}

export { supabase, signOut, getUserThroughSession };

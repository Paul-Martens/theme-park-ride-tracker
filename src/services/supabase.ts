import { createClient } from '@supabase/supabase-js';

import { useState } from 'react';

import type { Session } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__URL,
  import.meta.env.VITE__SUPABASE__ANON_KEY,
);

function useUser() {
  const [isInitialized, setIsInitialized] = useState(true);
  const [session, setSession] = useState<Session | null>();

  supabase.auth.onAuthStateChange((_, session) => {
    setIsInitialized(false);
    setSession(session);
  });

  return { isInitialized, session };
}

export { supabase, useUser };

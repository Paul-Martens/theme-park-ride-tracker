import { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

import type { Session } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__URL,
  import.meta.env.VITE__SUPABASE__KEY,
);

function useSession() {
  const [isPending, setIsPending] = useState(true);
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsPending(false);
      setSession(session);
    });
  }, []);

  return { session, isPending };
}

export { supabase, useSession };

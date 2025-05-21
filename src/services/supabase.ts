import { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

import type { Session } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__URL,
  import.meta.env.VITE__SUPABASE__ANON_KEY,
);

function useSession() {
  const [session, setSession] = useState<Session | null>();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsPending(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setIsPending(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { session, isPending };
}

export { supabase, useSession };

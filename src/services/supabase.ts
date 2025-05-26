import { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

import type { User } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__URL,
  import.meta.env.VITE__SUPABASE__ANON_KEY,
);

function useUser() {
  const [user, setUser] = useState<User | null>();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session ? session.user : null);
      setIsPending(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session ? session.user : null);
      setIsPending(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, isPending };
}

export { supabase, useUser };

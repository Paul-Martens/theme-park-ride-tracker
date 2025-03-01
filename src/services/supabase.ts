import { createClient, User } from '@supabase/supabase-js';

import { Database } from '../database.types';
import { useEffect, useState } from 'react';

const supabase = createClient<Database>(
  import.meta.env.VITE__SUPABASE__PROJECT_URL,
  import.meta.env.VITE__SUPABASE__API_KEY,
);

function useUser() {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      console.log('CHANGE:', _, session?.user);
      setUser(session?.user);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return user;
}

export { supabase, useUser };

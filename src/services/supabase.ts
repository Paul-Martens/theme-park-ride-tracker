import { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE__SUPABASE__URL,
  import.meta.env.VITE__SUPABASE__KEY,
);

function useUser() {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(() => {
      setIsPending(false);
    });
  }, []);

  return { isPending };
}

export { supabase, useUser };

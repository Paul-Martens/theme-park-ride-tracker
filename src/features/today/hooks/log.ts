import { useEffect, useState } from 'react';

import { supabase } from '~/services/supabase';

import type { Entry } from '../types/log';

function useAllLogEntries() {
  const [log, setLog] = useState<Entry[]>([]);
  const [isPending, setIsPending] = useState(true);

  async function fetchLog() {
    const { data, error } = await supabase
      .from('log')
      .select('*, rides(*), variants(*)');

    if (error) {
      throw new Error(error.message);
    }

    setLog(data);
    setIsPending(false);
  }

  useEffect(() => {
    fetchLog();
  }, []);

  return { log, isPending };
}

export { useAllLogEntries };

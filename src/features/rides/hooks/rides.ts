import { useEffect, useState } from 'react';

import { supabase } from '~/services/supabase';

import type { Ride } from '../types/rides';

function useAllRides() {
  const [rides, setRides] = useState<Ride[]>([]);
  const [isPending, setIsPending] = useState(true);

  async function fetchAllRides() {
    const { data: rides, error } = await supabase.from('rides').select('*');

    if (error) {
      throw new Error(error.message);
    }

    setRides(rides || []);
    setIsPending(false);
  }

  useEffect(() => {
    fetchAllRides();
  }, []);

  return { rides, isPending };
}

export { useAllRides };

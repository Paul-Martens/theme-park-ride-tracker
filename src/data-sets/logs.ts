import { supabase } from '../services/supabase';

async function fetchLogs() {
  const { data, error } = await supabase
    .from('log')
    .select('uuid, timestamp, ride(name), variant:ride_variant(name)');

  if (error) {
    throw error;
  }

  return data;
}

export { fetchLogs };

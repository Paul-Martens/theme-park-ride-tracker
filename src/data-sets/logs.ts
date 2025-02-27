import { getUserThroughSession, supabase } from '../services/supabase';

async function fetchLogs() {
  const user = await getUserThroughSession();

  if (!user) {
    throw new Error('Not signed in');
  }

  const { data, error } = await supabase
    .from('log')
    .select('uuid, timestamp, ride(name), variant:ride_variant(name)')
    .eq('auth_uuid', user?.id);

  if (error) {
    throw error;
  }

  return data;
}

export { fetchLogs };

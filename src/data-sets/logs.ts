import { supabase } from '../services/supabase';

async function fetchLogs() {
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    throw new Error('Not signed in');
  }

  const { data, error } = await supabase
    .from('log')
    .select('uuid, timestamp, date, time, ride(name), variant(name)')
    .eq('auth_uuid', userData.user.id);

  if (error) {
    throw error;
  }

  return data;
}

export { fetchLogs };

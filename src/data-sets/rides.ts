import { supabase } from '../services/supabase';

async function fetchRides() {
  const { data, error } = await supabase.from('ride').select();

  if (error) {
    throw error;
  }

  return data;
}

export { fetchRides };

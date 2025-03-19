import { supabase } from '../services/supabase';

async function fetchRides() {
  const { data, error } = await supabase
    .from('ride')
    .select('uuid, name, variants:variant(uuid, name), has_image').order('name');

  if (error) {
    throw error;
  }

  return data;
}

export { fetchRides };

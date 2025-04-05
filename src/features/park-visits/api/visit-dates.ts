import { supabase } from '@/services/supabase';

async function fetchVisitDates() {
  const { data } = await supabase.rpc('fetch_unique_dates');

  return data;
}

export { fetchVisitDates };

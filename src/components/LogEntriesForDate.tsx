import { Suspense, use } from 'react';

import { getTimeFromTimestamp } from '../helpers/date-and-time';

import { supabase } from '../services/supabase';

import './LogEntriesForDate.css';

async function fetchLogEntriesForDate(date: string) {
  const { data } = await supabase.rpc('get_log_entries_for_date', {
    date_to_match: date,
  });

  return data;
}

interface LogEntriesForDateProps {
  date: string;
}

function LogEntriesForDate({ date }: LogEntriesForDateProps) {
  const loader = fetchLogEntriesForDate(date);

  return (
    <Suspense>
      <Data loader={loader} />
    </Suspense>
  );
}

interface DataProps {
  loader: ReturnType<typeof fetchLogEntriesForDate>;
}

function Data({ loader }: DataProps) {
  const entries = use(loader);

  if (!entries || !entries.length) {
    return <p>There are no entries yet.</p>;
  }

  return (
    <table className="LogEntriesForDate">
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.uuid}>
            <td>{getTimeFromTimestamp(entry.timestamp)}</td>
            <td>
              {entry.ride_name}{' '}
              {entry.variant_name && `(${entry.variant_name})`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { LogEntriesForDate };

import { Suspense, use } from 'react';

import { getTimeFromTimestamp } from '../helpers/date-and-time';

import { supabase } from '../services/supabase';

import { Text } from './layout/Text';

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
    return (
      <div className="LogEntriesForDate">
        <Text>
          <p className="no-rides-yet">No rides yet, go have some fun!</p>
        </Text>
      </div>
    );
  }

  return (
    <div className="LogEntriesForDate">
      <table>
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
    </div>
  );
}

export { LogEntriesForDate };

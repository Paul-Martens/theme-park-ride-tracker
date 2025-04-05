import { useParams } from 'react-router';

import { LogEntriesForDate } from '@/components/LogEntriesForDate';

function ShowVisit() {
  const { date } = useParams();

  if (!date) {
    throw new Error('No date specified');
  }

  return <LogEntriesForDate date={date} />;
}

export { ShowVisit };

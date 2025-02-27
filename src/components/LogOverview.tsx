import { Suspense } from 'react';

import { LogOverviewData } from './LogOverviewData';

import { fetchLogs } from '../data-sets/logs';

function LogOverview() {
  const logLoader = fetchLogs();

  return (
    <Suspense>
      <LogOverviewData logLoader={logLoader} />
    </Suspense>
  );
}

export { LogOverview };

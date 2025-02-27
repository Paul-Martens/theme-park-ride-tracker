import { Suspense } from 'react';

import { ErrorWrapper } from './wrappers/ErrorWrapper';

import { LogOverviewData } from './LogOverviewData';

import { fetchLogs } from '../data-sets/logs';

function LogOverview() {
  const logLoader = fetchLogs();

  return (
    <ErrorWrapper>
      <Suspense>
        <LogOverviewData logLoader={logLoader} />
      </Suspense>
    </ErrorWrapper>
  );
}

export { LogOverview };

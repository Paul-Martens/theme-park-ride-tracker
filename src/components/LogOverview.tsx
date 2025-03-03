import { Suspense } from 'react';

import { fetchLogs } from '../data-sets/logs';

import { ErrorWrapper } from './wrappers/ErrorWrapper';

import { LogOverviewData } from './LogOverviewData';

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

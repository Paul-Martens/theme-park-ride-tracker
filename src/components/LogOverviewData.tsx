import { use } from 'react';

import { fetchLogs } from '../data-sets/logs';

interface LogOverviewDataProps {
  logLoader: ReturnType<typeof fetchLogs>;
}

function LogOverviewData({ logLoader }: LogOverviewDataProps) {
  const logs = use(logLoader);

  return (
    <section>
      {logs.map((log) => (
        <p key={log.uuid}>
          {log.timestamp} {log.ride.name} {log.variant?.name}
        </p>
      ))}
    </section>
  );
}

export { LogOverviewData };

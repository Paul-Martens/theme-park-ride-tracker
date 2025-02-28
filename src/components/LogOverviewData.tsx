import { use } from 'react';

import { fetchLogs } from '../data-sets/logs';

interface LogOverviewDataProps {
  logLoader: ReturnType<typeof fetchLogs>;
}

function LogOverviewData({ logLoader }: LogOverviewDataProps) {
  const logs = use(logLoader);

  return (
    <table>
      <tbody>
        {logs.map((log) => {
          const timestamp = new Date(log.timestamp);

          const hours = timestamp.getHours().toString().padStart(2, '0');
          const minutes = timestamp.getMinutes().toString().padStart(2, '0');

          return (
            <tr key={log.uuid}>
              <td>
                {hours}:{minutes}
              </td>
              <td>
                {log.ride.name} {log.variant && `(${log.variant.name})`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export { LogOverviewData };

import { Link } from 'react-router';

import { Page } from '~/ui/layout/Page';

import { useAllLogEntries } from '../hooks/log';

function Today() {
  const { log, isPending } = useAllLogEntries();

  if (isPending) {
    return null;
  }

  return (
    <Page>
      <h1>Today</h1>

      <p>
        <Link to="/rides">Log a ride</Link>
      </p>

      <table>
        <tbody>
          {log
            .filter(
              (entry) =>
                new Date(entry.timestamp).toLocaleDateString() ===
                new Date().toLocaleDateString(),
            )
            .map((entry) => (
              <tr key={entry.uuid}>
                <td>
                  {entry.rides.name}
                  {entry.variant_uuid && ` (${entry.variants?.name})`}
                </td>
                <td>{new Date(entry.timestamp).toLocaleTimeString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Page>
  );
}

export { Today };

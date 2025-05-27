import { Page } from '~/ui/layout/Page';

import { useAllRides } from '../hooks/rides';

function RidesOverview() {
  const { rides, isPending } = useAllRides();

  // TODO: Add a proper loading state
  if (isPending) {
    return null;
  }

  return (
    <Page>
      <h1>Rides Overview</h1>

      <table>
        <tbody>
          {rides.map((ride) => (
            <tr key={ride.uuid}>
              <td>{ride.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
}

export { RidesOverview };

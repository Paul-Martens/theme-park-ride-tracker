import { Page } from '~/ui/layout/Page';

import { useAllRides } from '../hooks/rides';
import { Fragment } from 'react/jsx-runtime';

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
              <td>
                {ride.name}
                {ride.variants.length > 0 && (
                  <Fragment>
                    <br />(
                    {ride.variants.map((variant) => variant.name).join(', ')})
                  </Fragment>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
}

export { RidesOverview };

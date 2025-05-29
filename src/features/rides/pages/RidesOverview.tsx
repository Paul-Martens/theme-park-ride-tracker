import { useNavigate } from 'react-router';

import { Page } from '~/ui/layout/Page';

import { Button } from '~/ui/forms/Button';

import { useAllRides } from '../hooks/rides';

function RidesOverview() {
  const navigate = useNavigate();

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
              <td>
                {ride.variants.length === 0 ? (
                  <Button
                    onClick={() => {
                      navigate(`/rides/log/${ride.uuid}`);
                    }}
                  >
                    Log Ride
                  </Button>
                ) : (
                  ride.variants.map((variant) => (
                    <Button
                      key={variant.uuid}
                      onClick={() => {
                        navigate(`/rides/log/${ride.uuid}/${variant.uuid}`);
                      }}
                    >
                      Log Ride ({variant.name})
                    </Button>
                  ))
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

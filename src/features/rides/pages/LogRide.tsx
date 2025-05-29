import { Link, useNavigate, useParams } from 'react-router';

import { supabase } from '~/services/supabase';

import { Page } from '~/ui/layout/Page';

import { Button } from '~/ui/forms/Button';

import { useAllRides } from '../hooks/rides';

type LogRideParams = {
  ride_uuid: string;
  variant_uuid?: string;
};

function LogRide() {
  const { ride_uuid, variant_uuid } = useParams<LogRideParams>();

  const navigate = useNavigate();

  const { rides, isPending } = useAllRides();

  const ride = rides.find((ride) => ride.uuid === ride_uuid);
  const variant = ride?.variants.find(
    (variant) => variant.uuid === variant_uuid,
  );

  async function logRide() {
    if (!ride_uuid) {
      throw new Error('Ride not found');
    }

    const { error } = await supabase
      .from('log')
      .insert({ ride_uuid, variant_uuid });

    if (error) {
      throw new Error(error.message);
    }

    navigate('/');
  }

  if (isPending) {
    return null;
  }

  if (!ride) {
    throw new Error('Ride not found');
  }

  return (
    <Page>
      <h1>Log Ride</h1>

      <p>
        <Link to="/">&larr; Back to Rides</Link>
      </p>

      <p>
        Ride: {ride.name}
        {variant && ` (${variant.name})`}
      </p>

      <Button onClick={logRide}>Log This Ride</Button>
    </Page>
  );
}

export { LogRide };

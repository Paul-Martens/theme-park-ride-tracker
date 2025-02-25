import { Fragment, Suspense, use } from 'react';

import { ErrorWrapper } from './wrappers/ErrorWrapper';

import { supabase } from '../services/supabase';

import './Rides.css';

async function fetchRides() {
  const { data, error } = await supabase.from('ride').select();

  if (error) {
    throw error;
  }

  return data;
}

function Rides() {
  return (
    <section className="Rides">
      <h2>Rides</h2>

      <ErrorWrapper>
        <Suspense>
          <RidesData ridesPromise={fetchRides()} />
        </Suspense>
      </ErrorWrapper>
    </section>
  );
}

interface RidesDataType {
  ridesPromise: ReturnType<typeof fetchRides>;
}

function RidesData({ ridesPromise }: RidesDataType) {
  const rides = use(ridesPromise);

  return (
    <Fragment>
      {rides?.map((ride) => (
        <div key={ride.uuid} className="Ride">
          {ride.name}
        </div>
      ))}
    </Fragment>
  );
}

export { Rides };

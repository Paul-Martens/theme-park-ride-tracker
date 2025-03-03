import { Suspense } from 'react';

import { fetchRides } from '../data-sets/rides';

import { ErrorWrapper } from './wrappers/ErrorWrapper';

import { RidesOverviewData } from './RidesOverviewData';

import './RidesOverview.css';

function RidesOverview() {
  return (
    <section className="Rides">
      <ErrorWrapper>
        <Suspense>
          <RidesOverviewData ridesPromise={fetchRides()} />
        </Suspense>
      </ErrorWrapper>
    </section>
  );
}

export { RidesOverview };

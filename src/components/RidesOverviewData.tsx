import { Fragment, use } from 'react';

import { fetchRides } from '../data-sets/rides';

import { Ride } from './Ride';

interface RidesOverviewDataType {
  ridesPromise: ReturnType<typeof fetchRides>;
}

function RidesOverviewData({ ridesPromise }: RidesOverviewDataType) {
  const rides = use(ridesPromise);

  return (
    <Fragment>
      {rides
        ?.filter((ride) => ride.has_image)
        .map((ride) => <Ride key={ride.uuid} {...ride} hasImage />)}

      {rides
        ?.filter((ride) => !ride.has_image)
        .map((ride) => <Ride key={ride.uuid} {...ride} />)}
    </Fragment>
  );
}

export { RidesOverviewData };

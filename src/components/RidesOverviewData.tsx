import { Fragment, use } from 'react';

import { fetchRides } from '../data-sets/rides';

interface RidesOverviewDataType {
  ridesPromise: ReturnType<typeof fetchRides>;
}

function RidesOverviewData({ ridesPromise }: RidesOverviewDataType) {
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

export { RidesOverviewData };

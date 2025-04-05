import { Route } from 'react-router';

import { ParkVisits } from '../ParkVisits';

import { VisitDates } from '../components/VisitDates';
import { ShowVisit } from '../components/ShowVisit';

function useParkVisitsRoutes() {
  return (
    <Route path="/park-visits" Component={ParkVisits}>
      <Route index Component={VisitDates} />
      <Route path=":date" Component={ShowVisit} />
    </Route>
  );
}

export { useParkVisitsRoutes };

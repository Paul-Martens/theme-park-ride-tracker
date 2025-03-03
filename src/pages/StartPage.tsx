import { Link } from 'react-router';

import { getCurrentDate } from '../helpers/date-and-time';

import { Page } from '../components/layout/Page';

import { LogEntriesForDate } from '../components/LogEntriesForDate';

function StartPage() {
  const date = getCurrentDate();

  return (
    <Page>
      <h1>Today's Rides</h1>
      <p>
        <Link to="/rides">Log a ride!</Link>
      </p>

      <LogEntriesForDate date={date} />
    </Page>
  );
}

export { StartPage };

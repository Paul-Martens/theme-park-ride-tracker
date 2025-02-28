import { Link } from 'react-router';

import { Page } from '../components/layout/Page';

import { LogOverview } from '../components/LogOverview';

function LogPage() {
  return (
    <Page>
      <h1>Log Page</h1>

      <p>
        <Link to="/rides">Log ride</Link>
      </p>

      <LogOverview />
    </Page>
  );
}

export { LogPage };

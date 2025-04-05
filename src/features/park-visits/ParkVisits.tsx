import { Link, Outlet, useParams } from 'react-router';

import { Page } from '@/components/ui-kit/layout/Page';
import { Text } from '@/components/ui-kit/layout/Text';

function ParkVisits() {
  const { date } = useParams();

  return (
    <Page>
      <Text>
        <h1>Park Visits</h1>
      </Text>

      {date && (
        <p>
          ← <Link to="/park-visits">Back</Link>
        </p>
      )}

      <Outlet />
    </Page>
  );
}

export { ParkVisits };

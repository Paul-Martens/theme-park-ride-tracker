import { Page } from '../components/layout/Page';
import { Text } from '../components/layout/Text';

import { RidesOverview } from '../components/RidesOverview';

function RidesPage() {
  return (
    <Page>
      <Text>
        <h1>Select a ride!</h1>
      </Text>

      <RidesOverview />
    </Page>
  );
}

export { RidesPage };

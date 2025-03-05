import { Link } from 'react-router';

import { getCurrentDate } from '../helpers/date-and-time';

import { useUser } from '../services/supabase';

import { Page } from '../components/layout/Page';
import { Text } from '../components/layout/Text';

import { SignInForm } from '../components/forms/SignInForm';

import { LogEntriesForDate } from '../components/LogEntriesForDate';

function StartPage() {
  const user = useUser();

  const date = getCurrentDate();

  if (!user) {
    return (
      <Page>
        <Text>
          <h1>Please sign in</h1>
        </Text>

        <SignInForm />
      </Page>
    );
  }

  return (
    <Page>
      <Text>
        <h1>Today's Rides</h1>
        <p>
          <Link to="/rides">Log a ride!</Link>
        </p>
      </Text>

      <LogEntriesForDate date={date} />
    </Page>
  );
}

export { StartPage };

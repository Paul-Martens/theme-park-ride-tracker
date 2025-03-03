import { Link } from 'react-router';

import { getCurrentDate } from '../helpers/date-and-time';

import { useUser } from '../services/supabase';

import { Page } from '../components/layout/Page';

import { LogEntriesForDate } from '../components/LogEntriesForDate';
import { SignInForm } from '../components/forms/SignInForm';

function StartPage() {
  const user = useUser();

  const date = getCurrentDate();

  if (!user) {
    return (
      <Page>
        <h1>Please sign in</h1>
        <SignInForm />
      </Page>
    );
  }

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

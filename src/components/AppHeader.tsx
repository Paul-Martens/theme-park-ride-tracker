import { Suspense } from 'react';
import { getUserThroughSession } from '../services/supabase';

import { User } from './User';

function AppHeader() {
  const userLoader = getUserThroughSession();

  return (
    <header>
      <h1>Theme Park Ride Tracker</h1>

      <Suspense>
        <User userLoader={userLoader} />
      </Suspense>
    </header>
  );
}

export { AppHeader };

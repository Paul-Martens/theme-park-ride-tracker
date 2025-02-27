import { use } from 'react';
import { Link } from 'react-router';

import { getUserThroughSession } from '../services/supabase';

interface UserProps {
  userLoader: ReturnType<typeof getUserThroughSession>;
}

function User({ userLoader }: UserProps) {
  const user = use(userLoader);

  if (user) {
    return (
      <p>
        {user.email} (<Link to="/sign-out">Sign out</Link>)
      </p>
    );
  }

  return (
    <p>
      <Link to="/sign-in">Sign in</Link>
    </p>
  );
}

export { User };

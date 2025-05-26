import { Link } from 'react-router';

import { useUser } from '~/services/supabase';

function CurrentUser() {
  const { user } = useUser();

  if (!user) {
    return (
      <p>
        <Link to="/account/sign-in">Sign In</Link>
      </p>
    );
  }

  return (
    <p>
      {user.email} (<Link to="/account/sign-out">Sign Out</Link>)
    </p>
  );
}

export { CurrentUser };

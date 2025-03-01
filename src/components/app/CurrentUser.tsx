import { Link } from 'react-router';

import { useUser } from '../../services/supabase';

function CurrentUser() {
  const user = useUser();

  if (!user) {
    return (
      <p>
        <Link to="/sign-in">Sign In</Link>
      </p>
    );
  }

  return (
    <p>
      {user.email} <Link to="/sign-out">Sign Out</Link>
    </p>
  );
}

export { CurrentUser };

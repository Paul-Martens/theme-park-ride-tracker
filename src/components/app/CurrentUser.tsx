import { Link } from 'react-router';

import { useUser } from '../../services/supabase';

function CurrentUser() {
  const user = useUser();

  if (!user) return null;

  return (
    <p>
      {user.email}
      <br />
      <Link to="/sign-out">Sign Out</Link>
    </p>
  );
}

export { CurrentUser };

import { Link } from 'react-router';

import { useUser } from '../../services/supabase';

import './CurrentUser.css';

function CurrentUser() {
  const user = useUser();

  if (!user) return null;

  return (
    <section className="CurrentUser">
      {user.email}
      <br />
      <Link to="/sign-out">Sign Out</Link>
    </section>
  );
}

export { CurrentUser };

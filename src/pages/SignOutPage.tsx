import { useNavigate } from 'react-router';

import { signOut } from '../services/supabase';

function SignOutPage() {
  const navigate = useNavigate();

  function signOutAndRedirect() {
    signOut();
    navigate('/');
  }

  return (
    <main>
      <h1>Sign In</h1>
      <div>
        <button onClick={signOutAndRedirect}>Sign Out</button>
      </div>
    </main>
  );
}

export { SignOutPage };

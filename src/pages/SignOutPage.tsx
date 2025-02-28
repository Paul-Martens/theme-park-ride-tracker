import { useNavigate } from 'react-router';

import { signOut } from '../services/supabase';

import { Page } from '../components/layout/Page';

function SignOutPage() {
  const navigate = useNavigate();

  function signOutAndRedirect() {
    signOut();
    navigate('/');
  }

  return (
    <Page>
      <h1>Sign In</h1>
      <div>
        <button onClick={signOutAndRedirect}>Sign Out</button>
      </div>
    </Page>
  );
}

export { SignOutPage };

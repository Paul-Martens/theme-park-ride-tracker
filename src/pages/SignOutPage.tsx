import { useNavigate } from 'react-router';

import { supabase } from '../services/supabase';

import { Page } from '../components/ui-kit/layout/Page';

function SignOutPage() {
  const navigate = useNavigate();

  function signOutAndRedirect() {
    supabase.auth.signOut();
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

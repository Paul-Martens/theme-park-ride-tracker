import { Route, Routes } from 'react-router';

import { useSession } from '~/services/supabase';

import { Home } from '~/features/home/pages/Home';
import { SignUp } from '~/features/account/pages/SignUp';
import { SignIn } from '~/features/account/pages/SignIn';

import './App.css';

function App() {
  const { isPending } = useSession();

  if (isPending) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" Component={Home} />

      <Route path="/account/sign-up" Component={SignUp} />
      <Route path="/account/sign-in" Component={SignIn} />
    </Routes>
  );
}

export { App };

import { BrowserRouter, Route, Routes } from 'react-router';

import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignUpConfirmPage } from './pages/SignUpConfirmPage';

import { RidesPage } from './pages/RidesPage';

import { supabase } from './services/supabase';

function App() {
  supabase.auth.getSession().then((session) => {
    console.log(session);
  });

  supabase.auth.getUser().then((user) => {
    console.log(user);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" Component={SignInPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/sign-up/confirm" Component={SignUpConfirmPage} />

        <Route path="/" Component={RidesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

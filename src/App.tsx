import { Route, Routes } from 'react-router';

import { SignIn } from '~/features/account/pages/SignIn';

import { useSession } from '~/services/supabase';

import { routes } from '~/routes';

import './App.css';

function App() {
  const { session, isPending } = useSession();

  if (isPending) return null;

  return (
    <Routes>
      {routes.map((route) => {
        if (
          !session &&
          route.path !== '/account/sign-in' &&
          route.path !== '/account/sign-up'
        ) {
          route.Component = SignIn;
        }

        return <Route {...route} />;
      })}
    </Routes>
  );
}

export { App };

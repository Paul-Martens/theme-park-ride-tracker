import { Route, Routes } from 'react-router';

import { useSession } from '~/services/supabase';

import { useRoutes } from '~/routes';

import './App.css';

function App() {
  const { isPending } = useSession();

  const { routes } = useRoutes();

  if (isPending) return null;

  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Routes>
  );
}

export { App };

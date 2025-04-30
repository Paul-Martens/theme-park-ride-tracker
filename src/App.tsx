import { Route, Routes } from 'react-router';

import { useUser } from '~/services/supabase';

import { routes } from '~/routes';

import './App.css';

function App() {
  const { isPending } = useUser();

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

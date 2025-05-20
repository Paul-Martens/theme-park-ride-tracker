import { Route, Routes } from 'react-router';

import { useSession } from '~/services/supabase';

import { Home } from '~/features/home/pages/Home';

import './App.css';

function App() {
  const { isPending } = useSession();

  if (isPending) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
}

export { App };

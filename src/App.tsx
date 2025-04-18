import { useUser } from '~/services/supabase';

import './App.css';

function App() {
  const { isInitialized } = useUser();

  if (isInitialized == null) return null;

  return (
    <main>
      <h1>Theme Park Ride Tracker</h1>
    </main>
  );
}

export { App };

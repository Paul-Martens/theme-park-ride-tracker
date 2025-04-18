import { Page } from '~/components/layout/Page';
import { Heading } from './components/content/Heading';

import { useUser } from '~/services/supabase';

import './App.css';

function App() {
  const { isInitialized } = useUser();

  if (isInitialized == null) return null;

  return (
    <Page>
      <Heading>Theme Park Ride Tracker</Heading>
    </Page>
  );
}

export { App };

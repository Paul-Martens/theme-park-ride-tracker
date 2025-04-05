import { BrowserRouter, Route, Routes } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Grid } from './components/development/Grid';

import { WebsiteHeader } from './components/app/WebsiteHeader';

import { SignOutPage } from './pages/SignOutPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignUpConfirmPage } from './pages/SignUpConfirmPage';

import { RidesPage } from './pages/RidesPage';
import { ConfirmLogPage } from './pages/ConfirmLogPage';

import { StartPage } from './pages/StartPage';

import { useParkVisitsRoutes } from './features/park-visits/routes/ParkVisitsRoutes';

const queryClient = new QueryClient();

function App() {
  const parkVisitRoutes = useParkVisitsRoutes();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Grid />

        <WebsiteHeader />

        <Routes>
          <Route path="/sign-out" Component={SignOutPage} />
          <Route path="/sign-up" Component={SignUpPage} />
          <Route path="/sign-up/confirm" Component={SignUpConfirmPage} />

          <Route path="/rides" Component={RidesPage} />
          <Route path="/rides/confirm" Component={ConfirmLogPage} />

          <Route path="/" Component={StartPage} />

          {parkVisitRoutes}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export { App };

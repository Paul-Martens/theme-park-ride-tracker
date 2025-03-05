import { BrowserRouter, Route, Routes } from 'react-router';

import { Grid } from './components/development/Grid';

import { WebsiteHeader } from './components/app/WebsiteHeader';

import { SignOutPage } from './pages/SignOutPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignUpConfirmPage } from './pages/SignUpConfirmPage';

import { RidesPage } from './pages/RidesPage';
import { ConfirmLogPage } from './pages/ConfirmLogPage';

import { StartPage } from './pages/StartPage';

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export { App };

import { BrowserRouter, Route, Routes } from 'react-router';

import { WebsiteHeader } from './components/app/WebsiteHeader';

import { SignInPage } from './pages/SignInPage';
import { SignOutPage } from './pages/SignOutPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignUpConfirmPage } from './pages/SignUpConfirmPage';

import { RidesPage } from './pages/RidesPage';
import { ConfirmLogPage } from './pages/ConfirmLogPage';

import { StartPage } from './pages/StartPage';

function App() {
  return (
    <BrowserRouter>
      <WebsiteHeader />

      <Routes>
        <Route path="/sign-in" Component={SignInPage} />
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

import { BrowserRouter, Route, Routes } from 'react-router';

import { AppHeader } from './components/AppHeader';

import { SignInPage } from './pages/SignInPage';
import { SignOutPage } from './pages/SignOutPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignUpConfirmPage } from './pages/SignUpConfirmPage';

import { RidesPage } from './pages/RidesPage';

function App() {
  return (
    <BrowserRouter>
      <AppHeader />

      <Routes>
        <Route path="/sign-in" Component={SignInPage} />
        <Route path="/sign-out" Component={SignOutPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/sign-up/confirm" Component={SignUpConfirmPage} />

        <Route path="/" Component={RidesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

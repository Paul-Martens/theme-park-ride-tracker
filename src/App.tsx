import { BrowserRouter, Route, Routes } from 'react-router';

import { SignUpPage } from './pages/SignUpPage';
import { SignUpConfirmPage } from './pages/SignUpConfirmPage';

import { RidesPage } from './pages/RidesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/sign-up/confirm" Component={SignUpConfirmPage} />

        <Route path="/" Component={RidesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

import { BrowserRouter, Route, Routes } from 'react-router';

import { RidesPage } from './pages/RidesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RidesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

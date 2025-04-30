import { Route, Routes } from 'react-router';

import { routes } from '~/routes';

import './App.css';

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Routes>
  );
}

export { App };

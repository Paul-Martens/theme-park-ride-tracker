import { Header } from '../layout/Header';

import { CurrentUser } from './CurrentUser';

import './WebsiteHeader.css';

function WebsiteHeader() {
  return (
    <Header>
      <h1>Ride Tracker</h1>
      <CurrentUser />
    </Header>
  );
}

export { WebsiteHeader };

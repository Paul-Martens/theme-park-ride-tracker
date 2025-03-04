import { Header } from '../layout/Header';

import { CurrentUser } from './CurrentUser';

import './WebsiteHeader.css';

function WebsiteHeader() {
  return (
    <Header>
      <h1 className="WebsiteTitle">
        Theme Park
        <br />
        Ride Tracker
      </h1>
      <CurrentUser />
    </Header>
  );
}

export { WebsiteHeader };

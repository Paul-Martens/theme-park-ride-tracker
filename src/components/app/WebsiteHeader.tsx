import { Link } from 'react-router';

import { Header } from '../layout/Header';

import { CurrentUser } from './CurrentUser';

import './WebsiteHeader.css';

function WebsiteHeader() {
  return (
    <Header>
      <Link to="/" className="WebsiteTitle">
        <h1>
          Theme Park
          <br />
          Ride Tracker
        </h1>
      </Link>

      <CurrentUser />
    </Header>
  );
}

export { WebsiteHeader };

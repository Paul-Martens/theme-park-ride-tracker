import { Link } from 'react-router';

import './WebsiteTitle.css';

function WebsiteTitle() {
  return (
    <Link to="/" className="WebsiteTitle">
      <h1>
        Theme Park
        <br />
        Ride Tracker
      </h1>
    </Link>
  );
}

export { WebsiteTitle };

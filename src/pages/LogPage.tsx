import { Link } from 'react-router';

import { LogOverview } from '../components/LogOverview';

function LogPage() {
  return (
    <main>
      <h1>Log Page</h1>

      <p>
        <Link to="/rides">Log ride</Link>
      </p>

      <LogOverview />
    </main>
  );
}

export { LogPage };

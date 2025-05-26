import type { ReactNode } from 'react';

import './Header.css';
import { Link } from 'react-router';

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="Header">
      <section>
        <Link className="app-name" to="/">
          <div>
            Theme Park
            <br />
            Ride Tracker
          </div>
        </Link>
      </section>
      <section>{children}</section>
    </header>
  );
}

export { Header };

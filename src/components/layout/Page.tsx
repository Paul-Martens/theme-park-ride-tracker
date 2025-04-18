import { ReactNode } from 'react';

import './Page.css';

interface PageProps {
  children?: ReactNode;
}

function Page({ children }: PageProps) {
  return <main className="page">{children}</main>;
}

export { Page };

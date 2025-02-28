import { ReactNode } from 'react';

import './Page.css';

interface PageProps {
  children?: ReactNode;
}

function Page({ children }: PageProps) {
  return <main className="Page">{children}</main>;
}

export { Page };

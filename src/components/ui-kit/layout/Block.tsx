import { ReactNode } from 'react';

import './Block.css';

interface BlockProps {
  children?: ReactNode;
}

function Block({ children }: BlockProps) {
  return <section className="Block">{children}</section>;
}

export { Block };

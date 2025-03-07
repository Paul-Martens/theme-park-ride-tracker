import { MouseEventHandler, ReactNode } from 'react';

import './Glass.css';

interface GlassProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
}

function Glass({ children, onClick }: GlassProps) {
  return (
    <section className="Glass" onClick={onClick}>
      {children}
    </section>
  );
}

export { Glass };

import { ReactNode } from 'react';

import './Heading.css';

interface HeadingProps {
  children?: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return <h1 className="heading">{children}</h1>;
}

export { Heading };

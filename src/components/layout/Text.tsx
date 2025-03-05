import { ReactNode } from 'react';

import './Text.css';

interface TextProps {
  children?: ReactNode;
}

function Text({ children }: TextProps) {
  return <section className="Text">{children}</section>;
}

export { Text };

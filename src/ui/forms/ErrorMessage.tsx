import type { ReactNode } from 'react';

import './ErrorMessage.css';

interface ErrorMessageProps {
  children?: ReactNode;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="ErrorMessage">{children}</p>;
}

export { ErrorMessage };

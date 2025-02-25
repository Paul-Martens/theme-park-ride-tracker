import { ReactNode } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import './ErrorWrapper.css';

interface ErrorBoundaryType {
  children?: ReactNode;
}

function ErrorWrapper({ children }: ErrorBoundaryType) {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div className="ErrorMessage">⚠ {error.message}</div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

export { ErrorWrapper };

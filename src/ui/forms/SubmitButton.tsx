import type { ReactNode } from 'react';

import './SubmitButton.css';

interface SubmitButtonProps {
  children?: ReactNode;
}

function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button className="SubmitButton" type="submit">
      {children}
    </button>
  );
}

export { SubmitButton };

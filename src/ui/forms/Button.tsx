import type { MouseEventHandler, ReactNode } from 'react';

import './Button.css';

interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, type = 'button', onClick }: ButtonProps) {
  return (
    <button className="Button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };

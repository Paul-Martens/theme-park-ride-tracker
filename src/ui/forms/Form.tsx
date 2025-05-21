import type { ReactNode } from 'react';

import './Form.css';

interface FormProps {
  children?: ReactNode;
  action: (payload: FormData) => void;
}

function Form({ children, action }: FormProps) {
  return (
    <form className="Form" action={action}>
      {children}
    </form>
  );
}

export { Form };

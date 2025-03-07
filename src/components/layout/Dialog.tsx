import { MouseEventHandler, ReactNode } from 'react';

import { stopPropagation } from '../../helpers/events';

import { Glass } from './Glass';

import './Dialog.css';

interface DialogProps {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLElement>;
}

function Dialog({ children, onClick }: DialogProps) {
  return (
    <Glass onClick={onClick}>
      <section className="Dialog" onClick={stopPropagation}>
        {children}
      </section>
    </Glass>
  );
}

export { Dialog };

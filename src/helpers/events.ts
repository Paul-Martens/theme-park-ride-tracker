import { MouseEvent } from 'react';

function stopPropagation(event: MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

export { stopPropagation };

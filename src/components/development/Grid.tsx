import { useEffect, useState } from 'react';

import './Grid.css';

function Grid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.code === 'KeyG') {
        setIsVisible(!isVisible);
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return <div className="Grid"></div>;
}

export { Grid };

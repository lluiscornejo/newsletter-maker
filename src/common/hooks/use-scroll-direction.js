import { useEffect, useState } from 'react';

export const useScrollDirection = (wheel) => {
  const [direction, setDirection] = useState(null);
  useEffect(() => {
    if (wheel > 0) {
      setDirection('down');
    } else {
      setDirection('up');
    }
  }, [wheel]);
  return direction;
};

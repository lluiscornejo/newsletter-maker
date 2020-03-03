import { useEffect, useRef, useState } from 'react';

export const useStateSafely = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const isSafe = useRef(true);

  useEffect(() => {
    // Future proofing for double-invoking
    // effects in Strict Mode.
    isSafe.current = true;
    return () => {
      isSafe.current = false;
    };
  }, []);

  const setValueSafely = (newValue) => {
    if (isSafe.current) {
      setValue(newValue);
    }
  };

  return [value, setValueSafely];
};

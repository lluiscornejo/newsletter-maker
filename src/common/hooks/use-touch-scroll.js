import { useCallback, useEffect } from 'react';
import { useStateSafely } from '@Common/hooks/use-state-safely';

export const useTouchScroll = (configuration, setWheel, horizontalScroll, verticalScroll) => {
  const [lastVerticalPosition, setLastVerticalPosition] = useStateSafely(0);
  const [lastHorizontalPosition, setLastHorizontalPosition] = useStateSafely(0);
  const [isDragging, setDragging] = useStateSafely(false);

  const dragEvent = (event) => {
    const speed = 50;
    if (configuration.horizontal) {
      setWheel((event.touches[0].clientX - lastHorizontalPosition) / speed);
      horizontalScroll();
    } else {
      setWheel((event.touches[0].clientY - lastVerticalPosition) / speed);
      verticalScroll();
    }
  };

  const setPosition = (e) => {
    if (e.touches.length > 0) {
      if (configuration.horizontal) {
        setLastHorizontalPosition(e.touches[0].clientX);
      } else {
        setLastVerticalPosition(e.touches[0].clientY);
      }
    }
  };

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      dragEvent(e);
    }
  }, [isDragging, lastHorizontalPosition, lastVerticalPosition]);

  const handleTouchEnd = useCallback((e) => {
    if (isDragging) {
      setDragging(false);
      setPosition(e);
    }
  }, [isDragging]);

  const handleTouchStart = useCallback((e) => {
    setDragging(true);
    setPosition(e);
  }, []);

  window.addEventListener('touchstart', handleTouchStart);

  useEffect(() => {
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchMove, handleTouchEnd]);
};

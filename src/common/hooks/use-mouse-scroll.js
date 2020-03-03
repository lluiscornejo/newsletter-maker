import { useCallback, useEffect } from 'react';
import { useStateSafely } from '@Common/hooks/use-state-safely';

export const useMouseScroll = (configuration, setWheel, horizontalScroll, verticalScroll) => {
  const [lastVerticalPosition, setLastVerticalPosition] = useStateSafely(0);
  const [lastHorizontalPosition, setLastHorizontalPosition] = useStateSafely(0);
  const [isDragging, setDragging] = useStateSafely(false);

  const dragEvent = (event) => {
    event.preventDefault();
    const speed = 3;
    if (configuration.horizontal) {
      setWheel((event.clientX - lastHorizontalPosition) / speed);
      horizontalScroll();
    } else {
      setWheel((event.clientY - lastVerticalPosition) / speed);
      verticalScroll();
    }
  };

  const setPosition = (e) => {
    if (configuration.horizontal) {
      setLastHorizontalPosition(e.clientX);
    } else {
      setLastVerticalPosition(e.clientY);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      dragEvent(e);
    }
  }, [isDragging, lastHorizontalPosition, lastVerticalPosition]);

  const handleMouseUp = useCallback((e) => {
    if (isDragging) {
      setDragging(false);
      setPosition(e);
    }
  }, [isDragging]);

  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    setPosition(e);
  }, []);

  if (configuration.mouseEvent) {
    window.addEventListener('mousedown', handleMouseDown);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);
};

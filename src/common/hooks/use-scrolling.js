import { useState, useMemo } from 'react';

export const useScrolling = (configuration, distance, wheel) => {
  const [scrolling, setScrolling] = useState(configuration.initialX);
  useMemo(() => {
    const wheelModified = Math.round(wheel * configuration.velocity);
    if (configuration.infinite) {
      if (configuration.reverse) {
        setScrolling(scrolling + wheelModified);
      } else {
        setScrolling(scrolling - wheelModified);
      }
    } else if (scrolling >= 0) {
      if (scrolling > distance) {
        setScrolling(distance);
      } else if (scrolling === 0 && wheelModified > 0) {
        setScrolling(0);
      } else if ((scrolling === distance) && wheelModified < 0) {
        setScrolling(distance);
      } else {
        setScrolling(scrolling - wheelModified);
      }
    } else {
      setScrolling(0);
    }
  }, [wheel]);

  return { scrolling, setScrolling };
};

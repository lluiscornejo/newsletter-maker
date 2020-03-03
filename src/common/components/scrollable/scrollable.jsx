import React, { useEffect, useRef } from 'react';
import { useScroll } from '@Common/hooks/use-scroll';
import { Root } from './scrollable.styled';

const Scrollable = ({
  children,
  config,
  setScrolling,
  ...props
}) => {
  const containerRef = useRef(null);
  const scrolling = useScroll(containerRef, config);
  useEffect(() => {
    if (setScrolling) setScrolling(scrolling);
  }, [scrolling]);

  return <Root ref={containerRef} {...props}>{children}</Root>;
};

export default Scrollable;

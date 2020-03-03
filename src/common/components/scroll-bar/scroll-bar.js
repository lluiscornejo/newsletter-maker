import React, { useRef } from 'react';
import { useScroll } from '@Common/hooks/use-scroll';
import { Root, Line } from './scroll-bar.styled';

const defaultConfig = {
  horizontal: true,
  skewLimit: 50,
  skewPower: 20,
  velocity: 3,
};

const ScrollBar = ({ color, width, config }) => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const bodyWidth = document.body.clientWidth;
  useScroll(
    elementRef,
    {
      ...defaultConfig,
      velocity: (bodyWidth / width) * config.velocity,
    },
    containerRef,
  );

  return (
    <Root ref={containerRef} style={{ width: bodyWidth * 2 }}>
      <Line ref={elementRef} color={color} />
    </Root>
  );
};

export default ScrollBar;

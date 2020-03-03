import normalizeWheel from 'normalize-wheel';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useStateSafely } from '@Common/hooks/use-state-safely';
import { defaultConfig } from '@Common/hooks/utils/config';
import { isFirefox } from '@Common/utils/navigators';
import {
  limitWheel,
  skewOrientations,
  limitSkew,
} from '@Common/hooks/utils/scroll';
import { useScrolling } from '@Common/hooks/use-scrolling';
import { useMouseScroll } from '@Common/hooks/use-mouse-scroll';
import { useTouchScroll } from '@Common/hooks/use-touch-scroll';

export const useScroll = (ele, config = {}, wrapperEle) => {
  const [bodyDimensions, setBodyDimensions] = useState({});
  const [elementRef, setElementRef] = useStateSafely(null);
  const [containerRef, setContainerElementRef] = useStateSafely(null);
  const [movement, setMovement] = useStateSafely(0);
  const [distance, setDistance] = useStateSafely(0);
  const [wheel, setWheel] = useStateSafely();
  const requestRef = useRef(null);
  const configuration = { ...defaultConfig, ...config };
  const { scrolling, setScrolling } = useScrolling(configuration, distance, wheel);

  const verticalScroll = () => {
    const maxDistanceScrolled = containerRef?.clientHeight || elementRef.clientHeight;
    setDistance(maxDistanceScrolled - bodyDimensions.height);
  };

  const horizontalScroll = () => {
    const maxDistanceScrolled = containerRef?.clientWidth || elementRef.clientWidth;
    setDistance(maxDistanceScrolled - bodyDimensions.width);
  };

  useMouseScroll(configuration, setWheel, horizontalScroll, verticalScroll);
  useTouchScroll(configuration, setWheel, horizontalScroll, verticalScroll);

  const scrollEvent = (event) => {
    const normalized = normalizeWheel(event);
    if (event.deltaY !== 0 || event.deltaX !== 0) {
      const wheel = -normalized.pixelY || -normalized.pixelX;
      if (configuration.horizontal) {
        horizontalScroll();
      } else {
        verticalScroll();
      }
      const maxWheel = (isFirefox ? 10 : 20) + Math.random();
      setWheel(limitWheel(wheel, maxWheel));
    } else {
      setWheel(0);
    }
  };

  const wheelEvents = () => {
    window.addEventListener('wheel', scrollEvent);
    window.addEventListener('DOMMouseScroll', scrollEvent);
    return () => {
      window.removeEventListener('wheel', scrollEvent);
      window.removeEventListener('DOMMouseScroll', scrollEvent);
    };
  };

  const render = () => {
    const increment = scrolling - movement;
    const sign = skewOrientations[configuration.skewOrientation];
    const speed = (increment * configuration.skewPower) / 5;
    const speedLimited = limitSkew(speed);
    if (configuration.horizontal) {
      elementRef.style.transform = `skewX(${speedLimited * sign}deg) translate3d(${-scrolling}px, 0, 0)`;
    } else {
      elementRef.style.transform = `skewY(${speedLimited * sign}deg) translate3d(0, ${-scrolling}px, 0)`;
    }
    const time = setTimeout(() => {
      setMovement(scrolling);
    }, 1000 / 60);
    return () => clearTimeout(time);
  };

  const start = () => {
    elementRef.style.transition = 'all 2s cubic-bezier(.19,1,.22,1)';
    if (configuration.initialX) setScrolling(configuration.initialX);
    if (configuration.scroll) wheelEvents();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setBodyDimensions({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
    setElementRef(ele.current);
    if (wrapperEle) {
      setContainerElementRef(wrapperEle.current);
    } else {
      setContainerElementRef(null);
    }
  }, []);

  useEffect(() => {
    if (elementRef) start();
  }, [elementRef]);

  useEffect(() => {
    if (elementRef) {
      requestRef.current = requestAnimationFrame(render);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [elementRef, scrolling, movement]);

  return scrolling;
};

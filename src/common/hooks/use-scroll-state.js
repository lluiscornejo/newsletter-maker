import {
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';

export const useScrollState = (wheel) => {
  const [state, setState] = useState('stop');
  const [counter, setCounter] = useState(0);
  const [animate, setAnimate] = useState(false);
  const animationRef = useRef(null);

  const animation = () => {
    if (counter !== 0) {
      setTimeout(() => {
        setCounter(counter - 1);
        animationRef.current = requestAnimationFrame(animation);
      }, 66);
    }
  };

  useEffect(() => {
    if (animate) {
      animationRef.current = requestAnimationFrame(animation);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate, counter]);

  useMemo(() => {
    if (state === 'stop') setState('start');
  }, [wheel]);

  useEffect(() => {
    setCounter(counter + 1);
    setAnimate(false);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, [wheel]);

  useMemo(() => {
    if (counter === 0) {
      setState('stop');
    } else {
      setState('scrolling');
    }
  }, [counter, state]);

  return { state, counter };
};

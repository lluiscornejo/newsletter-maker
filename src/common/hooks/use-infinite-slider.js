import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useResize } from '@Common/hooks/use-resize';

const checkLimits = (number, max) => {
  if (number > max) return 0;
  if (number < 0) return max;
  return number;
};

export const useInfiniteSlider = () => {
  const itemRef = useRef([]);
  const [itemsWidth, setItemsWidth] = useState([]);
  const [position, setPosition] = useState([]);
  const [nextLeftPosition, setNextLeftPosition] = useState({});
  const [nextRightPosition, setNextRightPosition] = useState({});
  const [resize, setResize] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const resetInitialPositions = () => {
    setItemsWidth([]);
    setPosition([]);
    setNextLeftPosition({});
    setNextRightPosition({});
  };

  const setNextPositions = debounce((scrolling) => {
    if (position.length) {
      const max = position.length - 1;
      if (scrolling < position[nextLeftPosition.pos]) {
        const { pos } = nextLeftPosition;
        position[checkLimits(pos - 1, max)] = position[pos] - itemsWidth[checkLimits(pos - 1, max)];
        setPosition(position);
        setNextRightPosition({ ...nextLeftPosition, pos: checkLimits(pos - 1, max) });
        setNextLeftPosition({ pos: checkLimits(pos - 1, max) });
      }
      if (scrolling + document.body.clientWidth > position[nextRightPosition.pos] + itemsWidth[nextRightPosition.pos]) {
        const { pos } = nextRightPosition;
        position[checkLimits(pos + 1, max)] = position[checkLimits(pos, max)] + itemsWidth[checkLimits(pos, max)];
        setPosition(position);
        setNextLeftPosition({ ...nextRightPosition, pos: checkLimits(pos + 1, max) });
        setNextRightPosition({ pos: checkLimits(pos + 1, max) });
      }
    }
  }, 0);

  const setInitialPositions = () => {
    const itemsWidthList = itemRef.current.map((item) => {
      setItemsWidth((itemsWidth) => [...itemsWidth, item.clientWidth]);
      return item.clientWidth;
    });
    setContainerWidth(itemsWidthList.reduce((acc, current) => acc + current, 0));
    const positions = itemRef.current.reduce((acc, current, idx) => [...acc, (acc[idx] + current.clientWidth)], [0]);
    setPosition(positions.slice(0, -1));
    const max = positions.length - 2;
    setNextLeftPosition({ pos: 0 });
    setNextRightPosition({ pos: max });
  };

  const start = () => {
    setInitialPositions();
    setResize(1);
    setLoaded(true);
  };

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        start();
      });
    } else {
      start();
    }
  }, []);

  useResize((e) => {
    resetInitialPositions();
    setInitialPositions();
    if (position.length) setNextPositions();
    setResize(e.timeStamp);
  }, [position]);

  return {
    setNextPositions,
    resize,
    loaded,
    position,
    itemRef,
    containerWidth,
  };
};

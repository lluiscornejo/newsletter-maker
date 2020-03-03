import React from 'react';
import Scrollable from '@Common/components/scrollable';
import { useInfiniteSlider } from '@Common/hooks/use-infinite-slider';
import { Root } from './infinite-slider.styled';

const InfiniteSlider = ({
  items,
  card: Card,
  config,
  ...props
}) => {
  const {
    setNextPositions,
    resize,
    loaded,
    position,
    itemRef,
    containerWidth,
  } = useInfiniteSlider();

  return (
    <Scrollable
      key={resize}
      setScrolling={setNextPositions}
      config={{
        velocity: 5,
        skewPower: 5,
        skewOrientation: 'reverse',
        horizontal: true,
        ...config,
      }}
      style={{ width: containerWidth }}
      {...props}
    >
      <Root loaded={loaded}>
        {items.map((item, idx) => (
          <Card
            ref={(el) => { itemRef.current[idx] = el; }}
            key={idx}
            data={item}
            idx={idx}
            style={{ position: 'absolute', left: `${position[idx]}px` }}
          />
        ))}
      </Root>
    </Scrollable>
  );
};

export default InfiniteSlider;

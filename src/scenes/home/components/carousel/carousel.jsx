import React, {
  useEffect,
  useState,
} from 'react';
import InfiniteSlider from '@Common/components/infinte-slider';
import { works } from '@Application/data/works';
import { projects } from '@Application/data/projects';
import { code } from '@Application/data/code';
import Card from '@Scenes/home/components/carousel/components/card';
import { Content } from './carousel.styled';

const Carousel = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Content loaded={loaded}>
      <InfiniteSlider
        items={works}
        card={Card}
        config={{ initialX: 300, infinite: true }}
      />
      <InfiniteSlider
        items={projects}
        card={Card}
        config={{ reverse: true, initialX: -300, infinite: true }}
      />
      <InfiniteSlider
        items={code}
        card={Card}
        config={{ initialX: 400, infinite: true }}
      />
    </Content>
  );
};

export default Carousel;

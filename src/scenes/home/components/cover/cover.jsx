import React, { useEffect, useState } from 'react';
import { Root, Image } from './cover.styled';

const Cover = ({ img, title, state = null }) => {
  const [visible, setVisible] = useState(false);
  const [visibleState, setVisibleState] = useState(null);

  useEffect(() => {
    let time;
    if (state === 'in') {
      setVisibleState('null');
      setVisible(true);
      time = setTimeout(() => {
        setVisibleState('in');
      }, 300);
    } else {
      setVisibleState('out');
      time = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
    return () => clearTimeout(time);
  }, [state, img]);

  return visible && (
    <Root state={visibleState}>
      <Image src={img} alt={title} />
    </Root>
  );
};

export default Cover;

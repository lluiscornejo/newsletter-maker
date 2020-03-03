import React, { forwardRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setHomeProjectSelected, setElevator } from '@Application/store/actions';
import { GlobalContext } from '@Application/components/global-context';
import {
  Item,
  Link,
  Number,
  Text,
} from './card.styled';

const counter = (number) => number > 9 ? number : `0${number}`;

const Card = forwardRef(({ data, idx, ...props }, ref) => {
  const [mouseState, setMouseState] = useState(null);
  const [idSelected, setIdSelected] = useState(null);
  const { dispatch } = useContext(GlobalContext);
  const history = useHistory();
  const {
    title,
    link,
    id,
  } = data;

  const handleMouseEnter = (e) => {
    if (e.currentTarget.tagName === 'LI') {
      setHomeProjectSelected(dispatch, { ...data, mouseState: 'in', id });
      setMouseState('in');
      setIdSelected(id);
    }
  };
  const handleMouseLeave = (e) => {
    if (e.currentTarget.tagName === 'LI') {
      setHomeProjectSelected(dispatch, { ...data, mouseState: 'out', color: 'transparent' });
      setMouseState('out');
      setIdSelected(null);
    }
  };

  const handleClick = (link) => {
    setHomeProjectSelected(dispatch, { ...data, mouseState: null, color: 'transparent' });
    setElevator(dispatch, { color: data.elevatorColor, state: 'in' });
    setTimeout(() => {
      history.push(link);
    }, 550);
  };

  return (
    <Item
      ref={ref}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link activeItem={id === idSelected} onClick={() => handleClick(link)}>
        <Number>{counter(idx + 1)}</Number>
        <Text>
          {title}
        </Text>
      </Link>
    </Item>
  );
});

export default React.memo(Card);

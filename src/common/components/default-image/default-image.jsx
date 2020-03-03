import React from 'react';
import defaultImage from '@Common/assets/img/default-image.png';
import { Root, StyledImage } from './default-image.styled';

const DefaultImage = () => (
  <Root>
    <StyledImage src={defaultImage} />
  </Root>
);

export default DefaultImage;

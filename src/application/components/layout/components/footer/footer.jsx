import React, { useContext } from 'react';
import { GlobalContext } from '@Application/components/global-context';
import { formatConditional } from '@Common/utils/conditional';
import { Root, ScrollInfo } from './footer.styled';

const Footer = ({ loaded }) => {
  const { state } = useContext(GlobalContext);
  const { isHomeScrolled } = state;

  return (
    <Root>
      <ScrollInfo loaded={formatConditional(loaded)} isHomeScrolled={isHomeScrolled}>Scroll to discover ↓</ScrollInfo>
    </Root>
  );
};

export default Footer;

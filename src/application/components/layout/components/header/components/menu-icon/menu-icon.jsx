import React from 'react';
import { Root, TopLine, BottomLine } from './menu-icon.styled';

const MenuIcon = ({ isOpen, ...props }) => (
  <Root {...props} isOpen={isOpen}>
    <TopLine isOpen={isOpen} />
    <BottomLine isOpen={isOpen} />
  </Root>
);

export default MenuIcon;

import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink, StyledParagraph } from './link.styled';

const Link = ({ children, to, ...props }) => to ? (
  <StyledLink to={to} {...props}>{children}</StyledLink>
) : (
  <StyledParagraph>{children}</StyledParagraph>
);

Link.propTypes = {};

export default Link;

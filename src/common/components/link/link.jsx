import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './link.styled';

const Link = ({ children, to }) => <StyledNavLink to={to}>{children}</StyledNavLink>;

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;

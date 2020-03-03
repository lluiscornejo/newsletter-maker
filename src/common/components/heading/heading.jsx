import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  DefaultHeading,
} from './heading.styled';

const headings = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
};

const Heading = ({
  type,
  center,
  maxWidth,
  children,
  ...props
}) => {
  const Component = headings[type] || DefaultHeading;

  return <Component type={type} center={center} maxWidth={maxWidth} {...props}>{children}</Component>;
};

Heading.propTypes = {
  type: PropTypes.string,
  center: PropTypes.bool,
  maxWidth: PropTypes.number,
};

export default Heading;

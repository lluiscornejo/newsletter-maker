import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './external-link.styled';

const ExternalLink = ({ children, href, ...props }) => <Link href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</Link>;

ExternalLink.propTypes = {
  href: PropTypes.string,
};

export default ExternalLink;

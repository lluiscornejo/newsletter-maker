import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaData = ({ title = 'Optica-App' }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

MetaData.propTypes = {
  title: PropTypes.string,
};

export default MetaData;

import 'babel-polyfill';
import React from 'react';
import AppInitializer from '@Application/components/app-initializer';
import GlobalStyles from '@Application/styles/global-styles/global-styles';
import Routes from '@Application/routes';

const Application = () => (
  <AppInitializer>
    <>
      <GlobalStyles />
      <Routes />
    </>
  </AppInitializer>
);

export default Application;

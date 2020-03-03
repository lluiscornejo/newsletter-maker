import React from 'react';
import GlobalContextProvider from '@Application/components/global-context';
import { ThemeProvider } from 'styled-components';
import { gridConfig } from '@Common/styles/grid';
import CookiesConsent from '@Common/components/cookies-consent';

const AppInitializer = ({ children }) => (
  <GlobalContextProvider>
    <ThemeProvider theme={gridConfig}>{children}</ThemeProvider>
    <CookiesConsent />
  </GlobalContextProvider>
);

export default AppInitializer;

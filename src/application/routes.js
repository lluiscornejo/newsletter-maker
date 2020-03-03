import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routesList } from '@Config/routes';
import Layout from './components/layout';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {renderRoutes(routesList)}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;

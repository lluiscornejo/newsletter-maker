import Home from '@Scenes/home';
import Error from '@Scenes/error';

export const routes = {
  home: {
    path: '/',
    component: Home,
    exact: true,
  },
  error: {
    path: '/error',
    component: Error,
    exact: true,
  },
  defaultError: {
    path: '*',
    component: Error,
    exact: true,
  },
};

export const routesList = Object.values(routes);

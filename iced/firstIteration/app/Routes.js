import React from 'react';
import { Route } from 'react-router-dom';
import App from '../pages/App/App';
import Landing from '../pages/Landing/Landing';

const routesArr = [
  {
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    path: ['/plans'],
    component: App,
    exact: false,
  },
]

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
);

const Routes = () => (
  <>
    {routesArr.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </>
)

export default Routes;


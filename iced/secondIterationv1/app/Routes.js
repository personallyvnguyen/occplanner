import React from 'react';
import {Route} from 'react-router-dom';
import AppPage from '../pages/App';
import LandingPage from '../pages/Landing';

const routesArr = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
  },
  // {
  //   path: ['/plans'],
  //   component: App,
  //   exact: false,
  // },
]

export default function Routes() {
  return (
    <>
      {routesArr.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </>
  );
};
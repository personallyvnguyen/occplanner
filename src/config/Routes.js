import React from 'react';
import {Route} from 'react-router-dom';
// import App from '../scenes/App/App'
import Landing from '../scenes/Landing/Landing'

const routesArr = [
  {
    path: '/',
    component: Landing,
    exact: true,
  },
  // {
  //   path: ['/plans'],
  //   component: App,
  //   exact: false,
  // },
];

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
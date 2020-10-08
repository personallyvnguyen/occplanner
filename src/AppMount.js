import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Landing from './Landing/Landing';

const AppMount = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>
);

export default AppMount;

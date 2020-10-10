import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from './Landing/Landing';

const AppMount = () => (
  <Router>
    <div style={{height: '100%'}}>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  </Router>
);

export default AppMount;

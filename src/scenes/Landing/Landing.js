import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home'

export default function Landing() {
  return (
    <Switch>
      <Route path={'/'} component={Home} exact/>
    </Switch>
  );
};
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useHydrateApp } from './app/Utilities';
import Routes from './app/Routes';

const AppMount = () => {
  const hydrateApp = useHydrateApp();

  useEffect(() => {
    hydrateApp();
  })
  
  return (
    <Router>
      <div style={{ height: '100%' }}>
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
}

export default AppMount;

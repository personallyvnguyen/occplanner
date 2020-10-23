import React, {useEffect} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Routes from './app/Routes';
import {useHydrateApp} from './app/Utilities';

export default function AppMount() {
  const hydrateApp = useHydrateApp();
  useEffect(() => hydrateApp());
  return (
    <BrowserRouter>
      <div style={{height:'100%'}}>
        <Switch>
          <Routes />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
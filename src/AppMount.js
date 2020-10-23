import React, {useEffect} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Routes from './config/Routes';
import useHydrateApp from './utils/useHydrateApp';

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
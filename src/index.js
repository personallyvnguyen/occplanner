import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './config/store';
import AppMount from './AppMount';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppMount />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-mount')
);
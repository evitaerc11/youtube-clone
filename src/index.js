import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './_base.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

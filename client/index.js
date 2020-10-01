import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';

import styles from './stylesheets/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

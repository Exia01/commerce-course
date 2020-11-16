import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'; //component from redux

import './index.css';
import App from './App';

import store from './redux/store';
ReactDOM.render(
  // Parent component in our application allows access to all props in the store
  <Provider store={store}>
    {/* gives the store context */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

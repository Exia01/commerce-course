import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'; //component from redux
import { PersistGate } from 'redux-persist/integration/react';
//^ helps with the integration

import './index.css';
import App from './App';

import { store, persistor } from './redux/store';

ReactDOM.render(
  // Parent component in our application allows access to all props in the store
  <Provider store={store}>
    {/* gives the store context */}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        {/* Gives the app the persisted flow itself. "Rehydrates the store"*/}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//setting up middleware to store catches actions before it hits the root reducer

const middlewares = [logger]; //setting up as arr

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //func that gets root reducer, and values of arr in middlewares var

export default store;

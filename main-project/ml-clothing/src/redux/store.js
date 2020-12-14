import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
// ^what this does. It allows the browser to cache the store, depending on configuration opts
import logger from 'redux-logger';


import rootReducer from './root-reducer';

//setting up middleware to store catches actions before it hits the root reducer

const middlewares = [logger]; //setting up as arr

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //func that gets root reducer, and values of arr in middlewares var

export const persistor = persistStore(store);
// ^ persistore. Calls persistore, passing in store. Essentially persisted version of our store
const storeTypes = {
    persistor: persistor,
    store: store
}

export default storeTypes;
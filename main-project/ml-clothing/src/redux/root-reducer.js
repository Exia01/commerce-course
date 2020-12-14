//Base reducer obj that represent all of the states of our application

import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
//^

import storage from 'redux-persist/lib/storage'
//^enables access to the local storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';


const persistConfig = {
  key: 'root',//what point inside the reducer obj to start storing
  storage,
  whitelist: ['cart']//contains the reducers we want to store
}
//^ the json obj that represent the possible configs that we want for reduxPersist to use

const rootReducer = combineReducers({
  user: userReducer, //key that represent the slice of the state
  cart: cartReducer,
  directory: directoryReducer
});


export default persistReducer(persistConfig, rootReducer)
//^ exporting modified version of root reducer with the persistent capabilities
/*
{user:{currentUser:null}}
*/

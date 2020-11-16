//Base reducer obj that represent all of the states of our application

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer, //key that represent the slice of the state
});

/*
{user:{currentUser:null}}
*/

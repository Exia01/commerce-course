
import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],//first arg can be an array of multiple args 
  user => user.currentUser
);
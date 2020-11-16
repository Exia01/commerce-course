//funcs that returns objs. Each obj is in the correct format that the action is expected to be
import { SET_CURRENT_USER } from './user.constants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

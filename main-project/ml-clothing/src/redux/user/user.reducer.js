import { SET_CURRENT_USER } from './user.constants';

const INITIAL_STATE = {
  //instanciating when when first fire the state
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state, //passing unchanged props in state
        currentUser: action.payload,
      };

    default:
      //if no actions type match, then return the state
      return state;
  }
};

export default userReducer; //=>{currentUSer:{}}

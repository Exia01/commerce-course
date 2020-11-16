import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //using verbiage instead of set
      return {
        ...state, //speading additional props
        hidden: !state.hidden, //toggling
      };
    default:
      return state;
  }
};

export default cartReducer;

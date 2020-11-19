import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';


const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //using verbiage instead of set
      return {
        ...state, //speading additional props
        hidden: !state.hidden, //toggling
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)//current state prop and item to add
      };
    default:
      return state;
  }
};

export default cartReducer;

import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //no payload since it is optional
});

export const addItem = (item) => ({//takes in item we want to add
  type: CartActionTypes.ADD_ITEM,
  payload: item
});


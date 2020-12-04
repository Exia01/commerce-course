import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //no payload since it is optional
});

export const addItem = (item) => ({//takes in item we want to add
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({ //subtract by one or remove entirely if at 1
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})


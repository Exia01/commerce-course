


import { createSelector } from 'reselect';

//gets state
const selectCart = state => state.cart; //slice one layer deep of just cart

//passes into func
export const selectCartItems = createSelector(
  [selectCart], //this is now a memoized selector
  cart => cart.cartItems //can pass multiple items
);

// which uses both funcs above
export const selectCartItemsCount = createSelector( 
  [selectCartItems], //can also pass another selector
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
import { createSelector } from 'reselect';

//gets state --> input selector
const selectCart = (state) => state.cart; //slice one layer deep of just cart

//passes into func --> output selectors 
export const selectCartItems = createSelector(
  [selectCart], //this is now a memoized selector
  (cart) => cart.cartItems //can pass multiple items
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// which uses both funcs above
export const selectCartItemsCount = createSelector(
  [selectCartItems], //can also pass another selector
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (
      accumulatedQuantity,
      cartItem //similar to the selectCartItemsCount
    ) => accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

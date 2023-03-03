import { createSelector } from "reselect";

const cartReducer = (state) => { 
  return state.cart;
}//base reducer, will be used as input selector for the following createSelector function calls

//run input reducer first, if the output of input reducer changes from memoization, then run the output selector
//here "change" means not pass equality check "==="
export const cartIsOpenSelector = createSelector(
  [cartReducer],
  (cart) => cart.isCartOpen
)

export const selectCartItems = createSelector(
    [cartReducer],
    (cart) => {
      return cart.cartItems;
    }
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }
);




import { createSelector } from "reselect";

export const cartItemSelector = (state) => state.cart.cartItems;

export const cartCountSelector = (state) => state.cart.cartCount;

export const cartTotalSelector = (state) => state.cart.cartTotal;

export const cartIsOpenSelector = (state) => state.cart.isCartOpen;

export const selectCartItems = () => {
  console.log('selectCartItems run');
  createSelector(
  [cartItemSelector],
  (cartItems) => cartItems);
}

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price);
  }
);




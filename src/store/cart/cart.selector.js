import { createSelector } from "reselect";

const cartReducer = (state) => { 
  return state.cart;
}//base reducer, will be used as input selector for the following createSelector function calls

/* 
every useSelector() function would run when a dispatch action fires

1) if using regular selector:
  if a selector function contains map() or reduce() function which generates new objects,
  then re-render will happen in the useSelector caller. This is going to be resource consuming.

2) if using createSelector to create selectors: 
  Only when state of input reducer changes, the output selector runs. This way the expensive
  functions can be put in output selectors to save resource.
  
for example:
  user hits add to cart button -> add item action dispatches -> cart reducer updates the cartItem state
  -> useSelector calls selectCartItems selector -> since cartItem state changes, the output selector runs
  -> the output selector gives the new cartItems object to the useSelector caller
  -> since it is a new object, it triggers the re-render of the caller component
  -> other state changes won't trigger this process because it is not the state governed by input reducer.
*/

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




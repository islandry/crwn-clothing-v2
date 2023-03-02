import CART_ACTION_TYPES from "./cart.types";
import { createAction } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  // console.log(cartItems);
  // console.log(productToAdd);
  const existingCartItem = cartItems.find((item) => 
      item.id === productToAdd.id
  );

  if(existingCartItem){
      return cartItems.map((each) => 
          each.id === productToAdd.id ?
          {...each, quantity : each.quantity + 1} :
          each
      );
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
     (item) => item.id === productToRemove.id
  );
 
  if(existingCartItem.quantity === 1){
      return cartItems.filter((item) => 
          item.id !== productToRemove.id
      );   
  }

  return cartItems.map((item) => 
    item.id === productToRemove.id 
      ? {...item, quantity: item.quantity - 1} 
      : item
  );
};
  

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => 
      item.id !== cartItemToClear.id
  );
};

// export const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

//item {
//   name, 
//   price,
//   imageUrl,
//   quantity
// }

const itemCountAndTotalUpdate = (items) => {
  const newCount = items.reduce((acc, item) => 
    acc + item.quantity,
    0
  );

  const newTotal = items.reduce((acc, item) => 
    acc + item.quantity * item.price,
    0
  );

  return {
    cartItems: items,
    cartCount: newCount,
    cartTotal: newTotal
  };
}

export const addItemToCart = (currentItems, itemToAdd) => {
  //console.log("addItemToCart action dispatched");
  const payload = addCartItem(currentItems, itemToAdd);
  //const payload = itemCountAndTotalUpdate(items);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
}

export const removeItemFromCart = (currentItems, itemToRemove) => {
  const payload = removeCartItem(currentItems, itemToRemove);
  //const payload = itemCountAndTotalUpdate(items);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
}

export const clearItemFromCart = (currentItems, itemToClear) => {
  const payload = clearCartItem(currentItems, itemToClear);
  //const payload = itemCountAndTotalUpdate(items);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
}

export const setIsCartOpen = (currentOpenStatus) => {
  //console.log("setIsCartOpen action dispatched");
  //console.log(currentOpenStatus);
  const payload = {
    isCartOpen: !currentOpenStatus
  };
  //console.log(payload);
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, payload);
}
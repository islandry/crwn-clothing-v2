import CART_ACTION_TYPES from "./cart.types";
import { createAction } from '../../utils/reducer/reducer.utils';

const currentItems = state.cartItems;
//helper functions for adding, removing, and cleaning cart
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => {
      item.id === productToAdd.id;
  });

  if(existingCartItem){
      return cartItems.map((each) => {
          each.id === productToAdd.id ?
          {...each, quantity : each.quantity + 1} :
          each;
      });
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((item) => {
      item.id === productToRemove.id;
  });

  if(existingCartItem){
      if(existingCartItem.quantity === 1){
          return cartItems.filter((item) => {
              item.id !== productToRemove.id;
          })
      }else{
          return cartItems.map((item) => {
              item.id === productToRemove.id ?
              {...item, quantity: item.quantity - 1} :
              item;
          });
      }
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => {
      item.id !== cartItemToClear.id;
  });
};

export const addItemToCart = (itemToAdd) => {
  const payload = addCartItem(currentItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload);
}

export const removeItemFromCart = (itemToRemove) => {
  const payload = removeCartItem(currentItems, itemToRemove);
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
}

export const setCartItem = (itemToClear) => {
  const payload = clearCartItem(currentItems, itemToClear);
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
}
import { createContext, useState, useEffect, useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const USER_ACTION_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  SET_CART_ITEM: 'SET_CART_ITEM',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL'
}

const INITIAL_STATE = {
  isCartOpne: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
};

const cartReducer = (state, action) => {
  const {type, payload} = action;
  
  //it is best not to include helper functions in the reducer switch
  //this is for better migrating reducer to redux store
  /*
  switch(type){
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload)
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, payload)
      }
    case 'CLEAR_ITEM':
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, payload)
      }
    case 'CART_COUNT':
      console.log(state.cartCount);
      return {
        ...state,
        cartCount: state.cartItems.reduce((acc, item) => acc + item.quantity, 0)
      }
    case 'CART_TOTAL':
      return {
        ...state,
        cartTotal: state.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
      }
    default:
      return state;
  };
  */
  switch(type){
    case USER_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        payload
      } 
  }

}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = () => dispatch({type: USER_ACTION_TYPES.TOGGLE_CART});
  const setCartItems = (product, addOrRemoveOrClear) => {
    if(addOrRemoveOrClear === 'add'){
      addCartItem
    } 


  }
  const addItemToCart = (productToAdd) => setCartItems(productToAdd, 'add');
  const removeItemToCart = (productToRemove) => dispatch({type: "REMOVE_ITEM", payload: productToRemove});
  const clearItemFromCart = (productToClear) => dispatch({type: "CLEAR_ITEM", payload: productToClear});
  
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  useEffect(() => {
    dispatch({type: "CART_COUNT"});
  }, [cartItems]);

  useEffect(() => {
    dispatch({type: "CART_TOTAL"});
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

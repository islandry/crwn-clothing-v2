import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addCartItem: () => {}
});

// item's structure
// {
//   id:
//   name:
//   imageUrl:
// }

const addCartItem = (currentItems, itemToAdd) => {
  const itemExist = currentItems.find((item) => {
    return item.id === itemToAdd.id;
  })

  if(itemExist){
    return currentItems.map((each) => {
      return each.id === itemToAdd.id ? {...each, quantity: each.quantity + 1} : each;
    });
  }

  return [...currentItems, {...itemToAdd, quantity: 1}];
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addCartItem};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

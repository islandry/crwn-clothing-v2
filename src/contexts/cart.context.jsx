import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => {return cartItem.id === productToAdd.id}
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

const itemQuantityChange = (cartItems, productToChange, addOrReduce) => {
  const itemEdit = cartItems.find((item) => item.id === productToChange.id);
  
  //always build a new cartItem array by map(), not mutating the current cartItem
  if(itemEdit){
    if(itemEdit.quantity !== 0 || addOrReduce !== -1){
      itemEdit.quantity = itemEdit.quantity + addOrReduce;
    }
    
    return cartItems.map((item) => item.id === productToChange.id ? itemEdit: item);
  }

  return cartItems;

};

const deleteItemFromCart = (productToDelete, cartItems) => {
  // const itmeToDelete = cartItems.find((item) => item.id === productToDelete.id);
  // console.log(itmeToDelete);
  const newCartItems = cartItems.filter(each => each.id !== productToDelete.id);
  // console.log(newCartItems);
  return newCartItems;
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  changeItemQuantity: () => {},
  removeItem: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  //the number in the cart icon
  //everytime cartItems changes. the call back runs
  //reduce function iterate cartItems and sum up the quantity
  useEffect(() => {
    const totalCount = cartItems.reduce((total, eachItem) => {return total + eachItem.quantity}, 0);
    setItemCount(totalCount);
  }, [cartItems])

  //function to add item to cart
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  //function to change the quantity of items in cart
  const changeItemQuantity = (productToChange, addOrReduce) => setCartItems(itemQuantityChange(cartItems, productToChange, addOrReduce));

  //function to remove item from cart
  const removeItem = (productToDelete) => setCartItems(deleteItemFromCart(productToDelete, cartItems));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, itemCount, changeItemQuantity, removeItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};
    return <CartProvider value = {value}>{children}</CartProvider>
}
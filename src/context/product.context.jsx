import { createContext, useState } from "react";
import PRODUCT_DATA from '../products.json';

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState(PRODUCT_DATA);
    const value = {products, setProducts};

    return (
        <ProductContext.Provider value = {value}>{children}</ProductContext.Provider>
    );

}
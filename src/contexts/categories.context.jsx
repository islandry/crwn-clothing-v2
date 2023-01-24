import { createContext, useState, useEffect } from 'react';

//import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'


//console.log(SHOP_DATA);

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  //call the function to query the database in firebase
  useEffect(()=> {
    const getCatAndDoc = async () => {
      const catAndDocMap = await getCategoriesAndDocuments();
      console.log(catAndDocMap);
      setCategories(catAndDocMap);
    }
    getCatAndDoc();
  }, []);

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

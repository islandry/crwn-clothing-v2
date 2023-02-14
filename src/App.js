import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';
import { setCategory} from './store/category/category.action';

import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();//use redux dispatch

  //whenever a user sign in happens, triggers dispatch of setCurrentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  //read categories from firebase db and trigger dispatch of setCategory
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      //setCategoriesMap(categoryMap);
      dispatch(setCategory(categoryMap));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

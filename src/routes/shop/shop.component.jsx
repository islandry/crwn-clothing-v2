import { useEffect } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
//import { CategoriesContext } from '../../contexts/categories.context';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory} from '../../store/category/category.action';
import {selectCategory} from '../../store/category/category.selector';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();//use redux dispatch

  //read categories from firebase db and trigger dispatch of setCategory
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      //setCategoriesMap(categoryMap);
      dispatch(setCategory(categoryMap));
    };

    getCategoriesMap();
  }, []);

  const categoriesMap = useSelector(selectCategory);
  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;

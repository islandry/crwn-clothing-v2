//import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

//import { CategoriesContext } from '../../contexts/categories.context';

import { useSelector } from 'react-redux';
import {selectCategory} from '../../store/category/category.selector';

import './shop.styles.scss';

const Shop = () => {
  //const { categoriesMap } = useContext(CategoriesContext);

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

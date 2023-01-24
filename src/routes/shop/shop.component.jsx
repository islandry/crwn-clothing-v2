import { useContext, Fragment} from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return(
          <Fragment key = {title}>
            <h1>{title}</h1>
            <div className='products-container'>
              {categories[title].map((product) => {
                return <ProductCard key = {product.id} product={product}></ProductCard>
              })}
            </div>
          </Fragment>
        )
      })}
    </Fragment>
  );
};

export default Shop;

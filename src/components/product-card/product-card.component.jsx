//import { useContext } from 'react';

//import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { cartItemSelector } from '../../store/cart/cart.selector'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  //const { addItemToCart } = useContext(CartContext);

  const dispatch = useDispatch();
  const currentItem = useSelector(cartItemSelector);
  //const addProductToCart = () => addItemToCart(product);
  const addProductToCart = () => dispatch(addItemToCart(currentItem, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;

//import { useContext } from 'react';

//import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemSelector } from '../../store/cart/cart.selector'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  // const { clearItemFromCart, addItemToCart, removeItemToCart } =
  //   useContext(CartContext);

  // const clearItemHandler = () => clearItemFromCart(cartItem);
  // const addItemHandler = () => addItemToCart(cartItem);
  // const removeItemHandler = () => removeItemToCart(cartItem);
  const dispatch = useDispatch();
  const currentItem = useSelector(cartItemSelector);

  const clearItemHandler = () => dispatch(clearItemFromCart(currentItem, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(currentItem, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(currentItem, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

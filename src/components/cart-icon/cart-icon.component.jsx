//import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//import { CartContext } from '../../contexts/cart.context';

import { useSelector, useDispatch } from 'react-redux';
import { cartCountSelector, cartIsOpenSelector } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  //const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartCount = useSelector(cartCountSelector);
  const currentOpenStatus = useSelector(cartIsOpenSelector);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(currentOpenStatus));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

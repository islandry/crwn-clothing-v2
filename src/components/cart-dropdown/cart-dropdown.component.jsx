import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Link to = '/checkout'><Button onClick = {closeCart}>GO TO CHECKOUT</Button></Link>
      
    </div>
  );
};

export default CartDropdown;

import React from 'react';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const test = [{
  "id": 2,
  "name": "Blue Beanie",
  "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
  "price": 18
}]

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  console.log(cartItems)
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      {cartItems.map((cartItem) => {
        <CartItem key = {cartItem.id} product = {cartItem}/>
      })}
      {/* <CartItem key = {1} product = {test[0]}/> */}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;

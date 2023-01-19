import './product-card.styles.scss';
import {useContext} from 'react'
import Button from '../button/button.component';
import { CartContext } from "../../contexts/cart.context";


const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;

  const {cartItems, setCartItems, addCartItem} = useContext(CartContext)

  const setCartItemsFromButtonClick = (product) => {
    // console.log(name, price, imageUrl)
    setCartItems(addCartItem(cartItems, product));
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick = {setCartItemsFromButtonClick}>Add to card</Button>
    </div>
  );
};

export default ProductCard;

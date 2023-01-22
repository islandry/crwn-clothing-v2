import './checkout-item.style.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from "../button/button.component";

const CheckoutItem = ({product}) => {

    const {imageUrl, name, quantity, price} = product;

    const {changeItemQuantity, removeItem} = useContext(CartContext);

    const addQuantity = () => {
        // console.log(quantity);
        changeItemQuantity(product, 1);
    }

    const reduceQuantity = () => {
        changeItemQuantity(product, -1);
    }

    const removeItemFromCart = () => {
        removeItem(product);
    }

    const totalPrice = quantity * price;

    return (
        <div className = "checkout-item-container">
            <div className = "image-container">
                <img src = {imageUrl} alt = {`${name}`} />
            </div>

            <div>
                {name}
            </div>

            <div>
                <Button onClick = {reduceQuantity}>-</Button> 
                {quantity}
                <Button onClick = {addQuantity}>+</Button>
            </div>

            <div>
                ${totalPrice}
            </div>

            <div>
                <Button onClick = {removeItemFromCart}>Delete</Button>
            </div>
        </div>
    );
}

export default CheckoutItem;
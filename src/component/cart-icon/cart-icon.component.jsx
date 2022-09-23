import {ReactComponent as CartImage} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const onClickHandler = () =>{
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-icon-container' onClick={onClickHandler}>
            <div className = "shopping-icon">
                <CartImage />
            </div>
            <div className = "item-count">
                <span>10</span>
            </div>
        </div>
    )
}

export default CartIcon;
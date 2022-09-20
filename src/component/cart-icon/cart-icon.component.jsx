import {ReactComponent as CartImage} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
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
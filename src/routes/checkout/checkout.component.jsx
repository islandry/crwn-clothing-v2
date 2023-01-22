
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useContext } from "react";

const Checkout = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div>
            {cartItems.map((item) => {
                return <CheckoutItem key = {item.id} product = {item} />
            })}
        </div>
    );
}

export default Checkout;
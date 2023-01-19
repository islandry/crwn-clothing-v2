import "./cart-item.style.scss"

const CartItem = ({product}) => {
    const {id, name, quantity, imageUrl} = product;
    return (
        <div>
            <h1>{name}</h1>
            <h3>{quantity}</h3>
        </div>
    );
}

export default CartItem;
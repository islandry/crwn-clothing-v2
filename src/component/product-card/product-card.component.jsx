import Button from "../button/button.component";
import './product-card.style.scss';

const ProductCard = ({product}) => {
    return (
        <div className="product-card-container">
            <img src = {product.imageUrl}/>
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button buttonType='inverted'>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;
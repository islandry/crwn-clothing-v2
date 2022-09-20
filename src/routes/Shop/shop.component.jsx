import { useContext } from "react";
import { ProductContext, ProductProvider } from "../../context/product.context";
import ProductCard from "../../component/product-card/product-card.component";
import './shop.style.scss';

const Shop = () => {
    const {products, setProducts} = useContext(ProductContext);

    return (
        <div className="shop-container">
            {products.map((each) => {
                return (
                    <ProductCard key = {each.id} product = {each} />
                );
            })}
        </div>
    )
}

export default Shop;
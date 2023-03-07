import { Link } from "react-router-dom";

const Product = (props) => {
    const {product} = props;
    return (
        <>
            <Link to={`/product/${product._id}`} className="product-container___link">
                <img
                    className="product-container___img"
                    src={product.image}
                    alt="product"
                />
                <div className="product-container___text">
                    <h3 className="product-text___name">{product.name}</h3>
                    <div className="product-text__money">
                        <div className="product-text__sale">
                            <span className="product-sale__money">{product.price}vnđ</span> sale {product.discount}%
                        </div>
                        {product.price - (product.price*product.discount/100)}vnđ
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Product;
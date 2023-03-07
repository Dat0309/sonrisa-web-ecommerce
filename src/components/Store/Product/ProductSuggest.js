
import products from "../../../data/Products";
import Product from "./Product";

const ProductSuggest = () => {
    return (
        <>
            <div className="product__suggest">
                <h3 className="product-suggest__title">CÓ THỂ BẠN CŨNG THÍCH</h3>
                <div className="product-product__box">
                    {
                        products.map((product)=>(
                            <Product product={product}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ProductSuggest;
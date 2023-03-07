import allProducts from "../../../data/AllProducts";
import Product from "./Product";

const ListProduct = () => {
    return (
        <>
        <div id="product-container">
            <div className="container__product">
            <div className="product__suggest">
                <div className="product-product__box">
                    {
                        allProducts.map((product)=>(
                            <Product product={product}/>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
            
        </>
    );
};

export default ListProduct;
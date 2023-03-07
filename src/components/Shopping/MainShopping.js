import { Link } from "react-router-dom";
import carts from "../../data/cardData";
import ShoppingCard from "./ShoppingCard";

const MainShopping = () => {
    return (
        <>
            <div className="shopping-cart">
                <div className="cart__box">
                    {carts.cartItems.map((items) => (
                        <ShoppingCard cartItems = {items}/>
                    ))}
                </div>
                <div className="cart__pay">
                    <h3 className="cart-pay__title">Chưa bao gồm phí vận chuyển</h3>
                    <div className="cart-pay__total">
                        <h3>Tổng tiền</h3>
                        <div className="cart__totalprice">
                            {carts.cartItems.reduce((a,b) => a+(b.price*b.qty),0)}vnđ
                        </div>
                    </div>
                    <Link className="cart__checkout" to={"#"}>
                        Tiến Hành Thanh Toán
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MainShopping;
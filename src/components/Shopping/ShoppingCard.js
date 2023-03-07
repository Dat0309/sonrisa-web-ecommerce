const ShoppingCard = (props) => {
    const { cartItems } = props;
    return (
        <>
            <div className="cart__product">
                <img src={cartItems.image} alt="" className="cart-product__img" />
                <div className="cart-product__content">
                    <div className="cart-product__name">
                        {cartItems.name}
                    </div>
                    <div className="cart-product__info">
                        <div className="cart-product__total">
                            <span className="sub">-</span>
                            <span className="total">{cartItems.qty}</span>
                            <span className="add">+</span>
                        </div>
                        <div className="cart-product__price">
                            {cartItems.price}vnđ
                        </div>
                        <div className="cart-product__delete">Xoá</div>
                        <div className="cart-product__totalprice">{cartItems.price * cartItems.qty}vnđ</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCard;
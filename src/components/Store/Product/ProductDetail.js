import { Link } from "react-router-dom";
import ProductSuggest from "./ProductSuggest";

const ProductDetail = (props) => {
    const {productId} = props;
    function Model_On(){
        document.querySelector(".model").classList.add("model__on");
    }
    function Model_Off(){
        document.querySelector(".model").classList.remove("model__on");
    }
    return (
        <>
            <div id="product-container">
                <div className="container__product">
                    <Link className="product__link" to="#">
                        <img
                            src="/images/VUONG/product1.jpg"
                            alt=""
                            className="product__img"
                        />
                    </Link>
                    <div className="product__content">
                        <ul className="product__list">
                            <h1 className="product__name">SONRISA® SPIRITUAL BOX</h1>
                            <h3 className="product__money">886,000vnđ</h3>
                            <h3 className="product__intro">
                                SONRISA SPIRITUAL BOX được chuẩn bị chu đáo với khay đốt cùng những mùi
                                hương thư giãn của nhang thơm hương Aqua, thanh Trầm Hương và thanh
                                Palo Santo. Khay đốt sử dụng chất liệu xi măng thô sẽ hằn vết cháy qua
                                thời gian sử dụng, như quyển nhật ký lưu lại những khoảnh khắc mà bạn
                                đã dành sự quan tâm. Tất cả những nguyên liệu đốt đều có nguồn gốc tự
                                nhiên, an toàn cho sức khỏa và được khai thác hợp pháp, đạo đức.
                            </h3>
                            <h3 className="product__intro">SPIRITUAL BOX bao gồm:</h3>
                            <ul >
                                <li className="product__intro">Gạt tàn</li>
                                <li className="product__intro">Palo Santo (Standard / Premium)</li>
                                <li className="product__intro">Nhang </li>
                                <li className="product__intro">Trầm hương</li>
                                <li className="product__intro">Diêm </li>
                            </ul>
                            <h3 className="product__intro">Giá bán lẻ chi tiết:</h3>
                            <ul>
                                <li className="product__intro">Spiritual box - Premium: 1.026.000</li>
                                <li className="product__intro">Spiritual box - Standard: 886.000</li>
                            </ul>
                            <h1 className="product__limit">SỐ LƯỢNG CÓ HẠN 90 BOX</h1>
                            <div className="product__options">
                                <label htmlFor="option" className="product-options__title">
                                    <h3 className="product__intro">Hình thức mua:</h3>
                                    <h3 className="product-options__size" onClick={() => Model_On()}>
                                        BIỂU ĐỒ KÍCH THƯỚC
                                    </h3>
                                </label>
                                <form action="" className="product-options__form">
                                    <select name="option" id="product-option">
                                        <option className="size-option" value={1}>Chọn kích thước</option>
                                        <option className="size-option" value={2}>PALO SANTO STANDARD - còn 7 sản phẩm</option>
                                        <option className="size-option" value={3}>PALO SANTO PREMIUM - còn 7 sản phẩm</option>
                                    </select>
                                    <button className="product-options__button">THÊM VÀO GIỎ HÀNG</button>
                                </form>
                            </div>
                            <h3>
                                <Link className="product__intro" to="#">Thông tin giao hàng</Link>
                            </h3>
                        </ul>
                    </div>
                </div>
                
                <div className="product-model">
                    <div className="product-model__container">
                        <div className="product-model__title">
                            <h1>Biểu đồ kích thước</h1>
                            <i onClick={() => Model_Off()} className="fas fa-solid fa-xmark" />
                        </div>
                        <div>
                            <img
                                className="product-model__img"
                                src="https://bucket.nhanh.vn/fcb45e-89373/ps/20230117_eTwMlbeTCYEYtwjW.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <ProductSuggest/>
            </div>

        </>
    );
}

export default ProductDetail;
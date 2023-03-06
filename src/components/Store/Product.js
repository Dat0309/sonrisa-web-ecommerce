import { Link } from "react-router-dom";

const Product = () => {
    return (
        <>
            <div id="container">
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
                            <h3>SPIRITUAL BOX bao gồm:</h3>
                            <ul>
                                <li>Gạt tàn</li>
                                <li>Palo Santo (Standard / Premium)</li>
                                <li>Nhang </li>
                                <li>Trầm hương</li>
                                <li>Diêm </li>
                            </ul>
                            <h3>Giá bán lẻ chi tiết:</h3>
                            <ul>
                                <li>Spiritual box - Premium: 1.026.000</li>
                                <li>Spiritual box - Standard: 886.000</li>
                            </ul>
                            <h1 className="product__limit">SỐ LƯỢNG CÓ HẠN 90 BOX</h1>
                            <div className="product__options">
                                <label htmlFor="option" className="options__title">
                                    <h3>Purchase options:</h3>
                                    <h3 className="options__size" onclick="Model_On()">
                                        SIZE CHART
                                    </h3>
                                </label>
                                <form action="" className="options__form">
                                    <select name="option" id="option">
                                        <option value={1}>Select a size</option>
                                        <option value={2}>PALO SANTO STANDARD - còn 7 sản phẩm</option>
                                        <option value={3}>PALO SANTO PREMIUM - còn 7 sản phẩm</option>
                                    </select>
                                    <button className="options__button">ADD TO BAG</button>
                                </form>
                            </div>
                            <h3>
                                <Link to="#">Shipping information</Link>
                            </h3>
                        </ul>
                    </div>
                </div>
                <div className="product__suggest">
                    <h3 className="suggest__title">YOU MAY ALSO LIKE</h3>
                    <div className="product__box">
                        <Link to="" className="container__link">
                            <img
                                className="container__img"
                                src="/images/VUONG/product2.jpg"
                                alt=""
                            />
                            <div className="container__text">
                                <h3 className="text__name">BEUTER x WEEKEND VOYAGE BASEBALL CAP</h3>
                                <div className="text__money">
                                    <div className="text__sale">
                                        <span className="sale__money">426,000vnđ</span> 40 %
                                    </div>
                                    899,000vnđ
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="container__link">
                            <img
                                className="container__img"
                                src="/images/VUONG/product3.jpg"
                                alt=""
                            />
                            <div className="container__text">
                                <h3 className="text__name">
                                    WMNS BEUTER® "PORT DE SOLEIL" WHITE T-SHIRT
                                </h3>
                                <div className="text__money">
                                    <div className="text__sale">
                                        <span className="sale__money">426,000vnđ</span> 40 %
                                    </div>
                                    450,000vnđ
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="container__link">
                            <img
                                className="container__img"
                                src="/images/VUONG/product3.jpg"
                                alt=""
                            />
                            <div className="container__text">
                                <h3 className="text__name">BEUTER x WEEKEND VOYAGE BASEBALL CAP</h3>
                                <div className="text__money">
                                    <div className="text__sale">
                                        <span className="sale__money">426,000vnđ</span> 40 %
                                    </div>
                                    899,000vnđ
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="container__link">
                            <img
                                className="container__img"
                                src="/images/VUONG/product4.jpg"
                                alt=""
                            />
                            <div className="container__text">
                                <h3 className="text__name">BEUTER x WEEKEND VOYAGE BASEBALL CAP</h3>
                                <div className="text__money">
                                    <div className="text__sale">
                                        <span className="sale__money">426,000vnđ</span> 40 %
                                    </div>
                                    899,000vnđ
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="container__link">
                            <img
                                className="container__img"
                                src="/images/VUONG/product5.jpg"
                                alt=""
                            />
                            <div className="container__text">
                                <h3 className="text__name">BEUTER x WEEKEND VOYAGE BASEBALL CAP</h3>
                                <div className="text__money">
                                    <div className="text__sale">
                                        <span className="sale__money">426,000vnđ</span> 40 %
                                    </div>
                                    899,000vnđ
                                </div>
                            </div>
                        </Link>
                        <Link to="" className="container__link">
                            <img
                                className="container__img"
                                src="/images/VUONG/product6.jpg"
                                alt=""
                            />
                            <div className="container__text">
                                <h3 className="text__name">BEUTER x WEEKEND VOYAGE BASEBALL CAP</h3>
                                <div className="text__money">
                                    <div className="text__sale">
                                        <span className="sale__money">426,000vnđ</span> 40 %
                                    </div>
                                    899,000vnđ
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="model">
                    <div className="model__container">
                        <div className="model__title">
                            <h1>SIZE CHART</h1>
                            <i onclick="Model_Off()" className="fa-solid fa-xmark" />
                        </div>
                        <div>
                            <img
                                className="model__img"
                                src="https://bucket.nhanh.vn/fcb45e-89373/ps/20230117_eTwMlbeTCYEYtwjW.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <ul className="footer__list">
                    <li className="footer__item">CÔNG TY TNHH SONRISA</li>
                    <li className="footer__item">ĐỊA CHỈ VĂN PHÒNG: BLOCK OP-05.06 ORCHARD PARKVIEW 130 HỒNG HÀ, PHƯỜNG 9, QUẬN PHÚ NHUẬN</li>
                    <li className="footer__item">CỦA HÀNG: CHUNG CƯ 42 TÔN THẤT THIỆP, PHƯỜNG BẾN NGHÉ, QUẬN 1 (CẦU THANG NGOÀI - LẦU 2 - PHÒNG 44)</li>
                    <li className="footer__item">HOTTLINE: <span class="footer__phone">077.915.0000</span></li>
                    <li className="footer__item">MAIL: info@thebeuter.com</li>
                </ul>

                <div className="footer__logo">
                    <h5 className="footer__logo_text">© 2022 THE SONRISA</h5>
                    <img src="/images/sonrisa.png" alt="logo" className="footer___logo"
                        style={{ height: "74px", width: "125px", }} />
                </div>
                <div className="footer__contact">
                    <ul className="contact__list">
                        <li className="contact__item"><Link to={"#"} className="contact__link">signup newsletter</Link></li>
                        <li className="contact__item"><Link to={"#"} className="contact__link">facebook</Link></li>
                        <li className="contact__item"><Link to={"#"} className="contact__link">instargram</Link></li>
                    </ul>
                </div>
                <div className="footer-shortcuts">
                    <div className="footer-shortcuts__box" style={{ opacity: "0.8" }}>
                        <Link to={'/'}>
                            <i className="footer-shortcuts__homepage fas fa-solid fa-caret-up" ></i>

                        </Link>
                    </div>

                    <div className="footer-shortcuts__box" style={{ borderRadius: "100px" }}>
                        <Link>
                            <i className="footer-shortcuts__msg fas fa-regular fa-messages"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
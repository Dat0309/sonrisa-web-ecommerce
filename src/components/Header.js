import React from "react";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <>

      <div id="head">
        <div className="header">
          <Link to={`/`} className="homepage">
            <img className="logo" src="/images/sonrisa.png" alt="logo" />
          </Link>
          <div className="header__nav">
            <ul class="nav__list">
              <li class="nav__item"><Link to={"/products"} className="nav__link">CỬA HÀNG</Link></li>
              <li class="nav__item"><Link to={"/news"} className="nav__link">TIN TỨC</Link></li>
              <li class="nav__item"><Link to={"#"} className="nav__link">GIỚI THIỆU</Link></li>
              <li class="nav__item"><Link to={"#"} className="nav__link">TUYỂN DỤNG</Link></li>
              <li class="nav__item"><Link to={"#"} className="nav__link">CHÍNH SÁCH</Link></li>
              <li class="nav__item"><Link to={"#"} className="nav__link">WORLDWIDE SHIPPING</Link></li>
              <li class="nav__item">
                <Link to="#" class="nav__link">SHOPPING BAG (</Link>
                <span>0</span>
                <span>)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar-nav">
        <div className="side-bar-top__menu">
          <Link to={"/"} className="homepage">
            <img className="logo" src="images/sonrisa.png" alt="logo" />
          </Link>
          <ul className="sidebar-nav__list">
            <li className="sidebar-nav__item">
              <Link to={'#'} className="sidebar-nav__link">
                <i className="sidebar-nav__icon fas fa-solid fa-user" />
                SEACH A PRODUCT
                <i className="sidebar-nav__icon fas fa-solid fa-magnifying-glass" />
              </Link>
            </li>
            <li className="sidebar-nav__item">
              {" "}
              <Link to={'#'} className="sidebar-nav__link">
                SHOPPING BAG (0)
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-slide__menu">
          <ul className="sidebar-slide__list">
            <li>
              <Link to={"#"}>NEW ARIVAL</Link>
            </li>
            <li>
              <Link to={"#"}>WORLDWIDDE SHIPPING</Link>
            </li>
            <li>
              <Link to="">MENSWEAR</Link>
            </li>
            <li>
              <Link to="">WOMENSWEaR</Link>
            </li>
            <li>
              <Link to="">COLLECTIONS</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link to="">SPRING'23 PROGRESS OF RENOVATION</Link>
              </li>
              <li>
                <Link to="">FRAME THE BLOOM</Link>
              </li>
              <li>
                <Link to="">RESORT"22</Link>
              </li>
              <li>
                <Link to="">SPRING SUMMER 2022</Link>
              </li>
              <li>
                <Link to="">BLANKS BY BEUTER</Link>
              </li>
            </ul>
            <li>
              <Link to="">TOPS</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link to="">Graphic t-shirt</Link>
              </li>
              <li>
                <Link to="">Long sleeve</Link>
              </li>
              <li>
                <Link to="">Blank t-shirt</Link>
              </li>
              <li>
                <Link to="">Blank long sleeve</Link>
              </li>
              <li>
                <Link to="">Hoodies</Link>
              </li>
              <li>
                <Link to="">Sweaters</Link>
              </li>
              <li>
                <Link to="">Jackets</Link>
              </li>
              <li>
                <Link to="">Shirts</Link>
              </li>
            </ul>
            <li>
              <Link to="">BOTTOMS</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link to="">Jeans</Link>
              </li>
              <li>
                <Link to="">Trousers</Link>
              </li>
              <li>
                <Link to="">Sweatpants</Link>
              </li>
              <li>
                <Link to="">Khaki pants</Link>
              </li>
              <li>
                <Link to="">Shorts</Link>
              </li>
            </ul>
            <li>
              <Link to="">ACCESSORIES</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link to="">Backpacks</Link>
              </li>
              <li>
                <Link to="">Bags</Link>
              </li>
              <li>
                <Link to="">Straps</Link>
              </li>
              <li>
                <Link to="">Caps</Link>
              </li>
              <li>
                <Link to="">SOCKS</Link>
              </li>
            </ul>
            <li>
              <Link to="">TIN TỨC</Link>
            </li>
            <li>
              <Link to="">GIỚI THIỆU</Link>
            </li>
            <li>
              <Link to="">TRA SOÁT ĐƠN HÀNG</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link to="">TIẾNG VIỆT</Link>
              </li>
              <li>
                <Link to="">ENGLISH</Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Sidebar;

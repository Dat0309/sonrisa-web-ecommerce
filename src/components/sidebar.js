import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";

const Sidebar = () => {
  return (
    <>

      <nav className="sidebar-nav">
        <MainHeader />
        <div className="sidebar-slide__menu">
          <ul className="sidebar-slide__list">
            <li>
              <Link className="sidebar-nav__link" to={"#"}>NEW ARIVAL</Link>
            </li>
            <li>
              <Link className="sidebar-nav__link" to={"#"}>WORLDWIDDE SHIPPING</Link>
            </li>
            <li>
              <Link className="sidebar-nav__link" to="">MENSWEAR</Link>
            </li>
            <li>
              <Link className="sidebar-nav__link" to="">WOMENSWEaR</Link>
            </li>
            <li>
              <Link className="sidebar-nav__link" to="">COLLECTIONS</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link className="sidebar-nav-sub__link" to="">SPRING'23 PROGRESS OF RENOVATION</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">FRAME THE BLOOM</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">RESORT"22</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">SPRING SUMMER 2022</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">BLANKS BY BEUTER</Link>
              </li>
            </ul>
            <li>
              <Link className="sidebar-nav__link" to="">TOPS</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link className="sidebar-nav-sub__link" to="">Graphic t-shirt</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Long sleeve</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Blank t-shirt</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Blank long sleeve</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Hoodies</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Sweaters</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Jackets</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Shirts</Link>
              </li>
            </ul>
            <li>
              <Link className="sidebar-nav__link" to="">BOTTOMS</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link className="sidebar-nav-sub__link" to="">Jeans</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Trousers</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Sweatpants</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Khaki pants</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Shorts</Link>
              </li>
            </ul>
            <li>
              <Link className="sidebar-nav__link" to="">ACCESSORIES</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link className="sidebar-nav-sub__link" to="">Backpacks</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Bags</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Straps</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">Caps</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">SOCKS</Link>
              </li>
            </ul>
            <li>
              <Link className="sidebar-nav__link" to="">TIN TỨC</Link>
            </li>
            <li>
              <Link className="sidebar-nav__link" to="">GIỚI THIỆU</Link>
            </li>
            <li>
              <Link className="sidebar-nav__link" to="">TRA SOÁT ĐƠN HÀNG</Link>
            </li>
            <ul className="sidebar-sub__menu">
              <li>
                <Link className="sidebar-nav-sub__link" to="">TIẾNG VIỆT</Link>
              </li>
              <li>
                <Link className="sidebar-nav-sub__link" to="">ENGLISH</Link>
              </li>
            </ul>
          </ul>
        </div>
        
      </nav>

    </>
  );
};

export default Sidebar;

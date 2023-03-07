import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <>

            <header className="side-bar-top__menu">
                <Link to={"/"} className="homepage">
                    <img className="header-logo" src="/images/sonrisa.png" alt="logo" />
                </Link>
                <ul className="sidebar-nav__list">
                    <li className="sidebar-nav__item">
                        <Link to={'#'} className="sidebar-nav__link">
                            <i className="sidebar-nav__icon fas fa-solid fa-user" />
                            TÌM KIẾM SẢN PHẨM
                            <i className="sidebar-nav__icon fas fa-shopping-bag" />
                        </Link>
                    </li>
                    <li className="sidebar-nav__item">
                        {" "}
                        <Link to={'/shopping-bag'} className="sidebar-nav__link">
                            GIỎ HÀNG (0)
                        </Link>
                    </li>
                </ul>
            </header>

        </>
    );
};

export default MainHeader;
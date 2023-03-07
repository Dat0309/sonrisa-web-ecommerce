import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MainShopping from "../components/Shopping/MainShopping";

const ShoppingBagScreen = () => {
    return (
        <>
             <div className="sidebar-nav">
                <MainHeader />
            </div>
            <MainShopping/>
            <Footer/>
        </>
    );
};

export default ShoppingBagScreen;
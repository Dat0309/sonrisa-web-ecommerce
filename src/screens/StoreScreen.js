import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import ListProduct from "../components/Store/Product/ListProduct";

const StoreScreen = () => {
    return (
        <>
            <Sidebar />
            <ListProduct />
            <Footer />
        </>
    );
};

export default StoreScreen;
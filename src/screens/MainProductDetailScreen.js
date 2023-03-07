import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import ProductDetail from "../components/Store/Product/ProductDetail";

const MainProductDetailScreen = ({match}) => {
    const productId = match.params.id;

    return (
        <>
            <Sidebar />
            <ProductDetail productId={productId}/>
            <Footer />
        </>
    );
};

export default MainProductDetailScreen;
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import ListNews from "./ListNews";

const MainNews = () => {
    return (
        <>
            <div className="sidebar-nav">
                <MainHeader />
            </div>
            <ListNews/>
            <Footer/>
        </>
    );
};

export default MainNews;
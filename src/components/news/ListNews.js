import listNews from "../../data/newsData";
import News from "./News";


const ListNews = () => {
    return (
        <>
            <div className="container__news">
                {listNews.map((news) => (
                    <News news={news}/>
                ))}
            </div>
        </>
    );
};

export default ListNews;
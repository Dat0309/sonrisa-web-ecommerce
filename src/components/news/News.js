import { Link } from "react-router-dom";

const News = (props) => {
    const { news } = props;

    return (
        <>

            <Link className="news__item">
                <img src={news.image} alt="" className="news__img" />
                <div className="news__content">
                    <h3 className="news__name">{news.name}</h3>
                    <Link className="news__readmore">Xem thêm</Link>
                </div>
            </Link>
        </>
    );
};

export default News;
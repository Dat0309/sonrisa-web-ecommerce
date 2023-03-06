import React from "react";
import { Link } from "react-router-dom";

const Main = () => {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(85, 83, 83, 0.3), rgba(67, 65, 65, 0.3)), url(/images/NGANG/1.png)`,

    backgroundSize: "cover",
}

const backgroundStyle2 = {
  backgroundImage: `url(/images/NGANG/preview1.png)`,

    backgroundSize: "cover",
}

const backgroundStyle3 = {
  backgroundImage: `url(/images/NGANG/preview2.png)`,

    backgroundSize: "cover",
}

const backgroundStyle4 = {
  backgroundImage: `url(/images/NGANG/preview3.png)`,

    backgroundSize: "cover",
}

  return (
    <>
      <div className="grid"
        style={backgroundStyle}></div>
      <div className="grid"
        style={backgroundStyle2}></div>
      <div className="grid"
        style={backgroundStyle3}></div>
        <div className="grid"
        style={backgroundStyle4}></div>

      <div className="product-container">
        <div className="product-container__box">
          <Link className="product-container__link">
            <img src="/images/VUONG/product1.jpg" alt="" className="product-container__img" />
          </Link>
          <Link className="product-container__link">
            <img src="/images/VUONG/product2.jpg" alt="" className="product-container__img" />
          </Link>
          <Link className="product-container__link">
            <img src="/images/VUONG/product3.jpg" alt="" className="product-container__img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;

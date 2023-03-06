import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Home/Main";

const HomeScreen = () => {

  return (
    <>
      <main className="main-wrap">
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
};

export default HomeScreen;

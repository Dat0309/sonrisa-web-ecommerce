import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import MainRestaurant from "../components/Home/MainRestaurant";
import Loading from "../components/LoadingError/Loading";
import { restaurantByOwners } from "../Redux/Actions/RestaurantActions";
import Sidebar from "./../components/sidebar";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantByOwners());
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
          <Main />
      </main>
    </>
  );
};

export default HomeScreen;

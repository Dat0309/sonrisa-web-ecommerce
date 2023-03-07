import React from "react";
import "./base.css";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import StoreScreen from "./screens/StoreScreen";
import MainProductDetailScreen from "./screens/MainProductDetailScreen";
import NewsScreen from "./screens/NewsScreen";
import ShoppingBagScreen from "./screens/ShoppingBagScreen";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/products" component={StoreScreen} exact />
          <PrivateRouter path="/product/:id" component={MainProductDetailScreen} exact/>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/news" component={NewsScreen} exact/>
          <PrivateRouter path="/shopping-bag" component={ShoppingBagScreen} exact/>
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

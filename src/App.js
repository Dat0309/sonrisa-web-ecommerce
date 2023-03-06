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

function App() {

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/product-store" component={StoreScreen} exact />
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

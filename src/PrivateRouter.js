import React from "react";
import { useSelector } from "react-redux";
import {Route } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Route
      {...rest}
      component={(props) => {
        if (
          (userInfo && userInfo.role === "admin") ||
          (userInfo && userInfo.role === "owners")
        ) {
          return <Component {...props} />;
        }
      }}
    />
  );
}

export default PrivateRouter;

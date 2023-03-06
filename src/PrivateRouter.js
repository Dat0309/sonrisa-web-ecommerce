import React from "react";

import { Route } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {


  return (
    <Route
      {...rest}
      component={(props) => {

        return <Component {...props} />;

      }}
    />
  );
}

export default PrivateRouter;

import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";

const PrivateRoute = ({ children, ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <Route {...rest}>{!isAuth ? <Redirect to="/login" /> : children}</Route>
  );
};

export default PrivateRoute;

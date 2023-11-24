import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PR = ({ ...rest }) => {
  const { isAuthenticated , loginWithRedirect } = useAuth0();
  return (
    <>{isAuthenticated ? <Route {...rest}></Route> : <Redirect to="/" />}</>
  );
};

export default PR;

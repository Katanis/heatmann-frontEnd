import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  console.log('authTokens: '+authTokens);
  return (
    <Route
      {...rest}
      render={props =>
        JSON.parse(localStorage.getItem('tokens')) === "OK"? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
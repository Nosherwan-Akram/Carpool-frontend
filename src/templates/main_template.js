import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import { GuestRoute } from "../services/authentication";

import { MainHeader } from "../sections/headers/main_header";

import Home from "../pages/home";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";

export const MainTemplate = (props) => {
  let match = useRouteMatch();
  return (
    <div>
      <MainHeader />
      <Switch>
        <GuestRoute path={`${match.url}login`}>
          <Login />
        </GuestRoute>
        <GuestRoute path={`${match.url}signup`}>
          <Signup />
        </GuestRoute>
        <GuestRoute path={`${match.url}`}>
          <Home />
        </GuestRoute>
      </Switch>
    </div>
  );
};

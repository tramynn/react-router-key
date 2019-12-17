import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Category from "./Components/Category";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Home} path="/home" />
    <Route component={Profile} path="/profile" />
    <Route component={Category} path="/category/:id" />
    <Route
      render={() => {
        return <h1>404 Page Not Found.</h1>;
      }}
    />
  </Switch>
);

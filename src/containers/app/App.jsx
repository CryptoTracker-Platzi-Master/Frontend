import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";

import "../../assets/css/App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

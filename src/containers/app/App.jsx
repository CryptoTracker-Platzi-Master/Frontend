import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";

import "../../assets/css/App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

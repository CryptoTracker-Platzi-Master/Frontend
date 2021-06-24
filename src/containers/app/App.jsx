import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  LoginProvider  from "../../Context/LoginContext";
import SignUpContext from "../../Context/SignUpContext";

import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { Authentication } from "../../pages/Authentication";
import { Dashboard } from "../../pages/Dashboard";
import { Porfolio } from "../../pages/Porfolio";
// import { Modal } from "../../components/Modal";

import "../../assets/css/App.css";



export const App = () => {
  return (
    <LoginProvider>
      <SignUpContext>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/2fa" component={Authentication} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/porfolio" component={Porfolio} />
            {/* <Route exact path="/modal" component={Modal} /> */}
          </Switch>
        </BrowserRouter>
      </SignUpContext>
    </LoginProvider>
  );
};

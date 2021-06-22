import React, { Fragment } from "react";
import logoLogin from "../../assets/img/img-logo.png";
import "./Login.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Login = () => {
  return (
    <>
      <Header />
      <main className="login">
        <figure className="login__container-img">
          <img
            className="login__container-img--img"
            src={logoLogin}
            alt="Logo de login"
          />
        </figure>
        <h2 className="login--title">Login</h2>
        <div className="login__container-form">
          <form className="login__container-form--form" action="form-login">
            <label htmlFor="username-login">Username</label>
            <input type="email" id="username-login" placeholder="example@example.com" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

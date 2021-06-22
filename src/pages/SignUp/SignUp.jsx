import React, { Fragment } from "react";
import logoSignUp from "../../assets/img/img-logo.png";

import "./SignUp.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const SignUp = () => {
  return (
    <>
      <Header />
      <main className="sign-up">
        <figure className="sign-up__container-img">
          <img
            className="sign-up__container-img--img"
            src={logoSignUp}
            alt="Logo de sign-up"
          />
        </figure>
        <h2 className="sign-up--title">Sign Up</h2>
        <div className="sign-up__container-form">
          <form className="sign-up__container-form--form" action="form-sign-up">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="JuanitoRT" />

            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" placeholder="Charly Smith" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@example.com" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="password"
            />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

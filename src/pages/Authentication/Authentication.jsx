import React, { Fragment } from "react";
import "./Authentication.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import icon2fa from "../../assets/img/icon-2fa.png";
export const Authentication = () => {
  return (
    <>
      <Header />
      <main className="code-2fa">
        <figure className="code-2fa__container-img">
          <img
            className="code-2fa__container-img--img"
            src={icon2fa}
            alt="Icon de 2FA"
          />
        </figure>
        <h2 className="code-2fa--title">Authentication code</h2>
        <div className="code-2fa__container-form">
          <form action="form-2fa" className="code-2fa__container-form--form">
            <input
              type="password"
              id="code_2fa"
              placeholder="Enter your 6-digit code"
            />
            <button className="code-2fa__container-form--btn" type="button">
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

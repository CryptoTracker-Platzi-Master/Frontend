import React from "react";

import logoTipo from "../../assets/img/logoTipo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <figure className="header__container-img">
        <img className="header__container-img--img" src={logoTipo} alt="logo" />
      </figure>
      <nav className="header__nav">
        <button className="header__nav--login" type="button">
          Login
        </button>
        <button className="header__nav--sign-up" type="button">
          Sign Up
        </button>
      </nav>
    </header>
  );
};

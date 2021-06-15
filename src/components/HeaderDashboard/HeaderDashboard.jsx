import React from "react";
import { Link } from "react-router-dom";
import imgPerfile from "../../assets/img/img-perfile.png";
import "./HeaderDashboard.scss";

export const HeaderDashboard = () => {
  return (
    <header className="header-dashboard">
      <figure className="header-dashboard__container-img">
        <img
          className="header-dashboard__container-img--img"
          src={imgPerfile}
          alt="logo"
        />
      </figure>
      <p className="header-dashboard--name-user">
        Hi, <span>Leonardo</span>
      </p>
      <nav className="header-dashboard__nav">
        <Link to="#">
          <button className="header-dashboard__nav--logout" type="button">
            <i className="fas fa-sign-out-alt header-dashboard__nav--logout-icon"></i>
          </button>
        </Link>
      </nav>
    </header>
  );
};

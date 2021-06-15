import React from "react";
import "./FooterDashboard.scss";

import LogoTipo2 from "../../assets/img/logoTipo.png";

export const FooterDashboard = () => {
  return (
    <footer className="footer-dashboard">
      <figure className="footer-dashboard__container-img">
        <img
          className="footer-dashboard__container-img--img"
          src={LogoTipo2}
          alt="Imagen de logotipo"
        />
      </figure>
    </footer>
  );
};

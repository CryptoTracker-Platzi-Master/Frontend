import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCryptos } from "../../utils/getCryptos";
import { CardCryptosDashboard } from "../../components/CardCryptosDashboard";

import "./Dashboard.scss";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { FooterDashboard } from "../../components/FooterDashboard";

export const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", getCryptos({ setCryptos }));
  }, []);

  return (
    <>
      <HeaderDashboard />
      <main className="dashboard">
        <Link to="/porfolio" className="dashboard__link-porfolio">
          My Porfolio
        </Link>
        <h2 className="dashboard--title">All Cryptocurrencies</h2>
        <CardCryptosDashboard cryptos={cryptos} />
      </main>
      <FooterDashboard />
    </>
  );
};

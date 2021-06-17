import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCryptos } from "./getCryptos";
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
          <button className="dashboard__link-porfolio--btn-porfolio">
            My Porfolio
          </button>
        </Link>
        <h2 className="dashboard--title">All Cryptocurrencies</h2>
        <CardCryptosDashboard cryptos={cryptos} />
      </main>
      <FooterDashboard />
    </>
  );
};

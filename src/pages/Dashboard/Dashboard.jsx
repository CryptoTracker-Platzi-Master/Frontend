import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCryptos } from "./getCryptos";

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
        <div className="dashboard__wrap-card">
          {cryptos.map((crypto) => (
            <div key={crypto.id} className="dashboard__wrap-card--card">
              <button
                className="dashboard__wrap-card--card--btn-plus"
                type="button"
              >
                <i className="fas fa-plus-circle"></i>
              </button>
              <div className="dashboard__wrap-card--card__title">
                <figure className="dashboard__wrap-card--card__title--container-img">
                  <img
                    className="dashboard__wrap-card--card__title--container-img--img"
                    src={crypto.image}
                    alt=""
                  />
                </figure>
                <h3>
                  {crypto.name} - <span>{crypto.symbol}</span>
                </h3>
              </div>
              <div className="dashboard__wrap-card--card__description">
                <h4>
                  Market Cap Rank: <span>{crypto.market_cap_rank}</span>
                </h4>
                <h4>
                  Price: <span className="currency">$</span>
                  <span>{crypto.current_price}</span>
                </h4>
                <h4>
                  Volume 24h:<span className="currency">$</span>
                  <span>{crypto.market_cap_change_24h}</span>
                </h4>
                <h4>
                  Market Cap:<span className="currency">$</span>
                  <span>{crypto.market_cap}</span>
                </h4>
                <h4>
                  24h %:{" "}
                  <span className="percentage-24h">
                    {crypto.price_change_percentage_24h}
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterDashboard />
    </>
  );
};

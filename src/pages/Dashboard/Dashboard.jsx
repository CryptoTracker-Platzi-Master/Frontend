import React, { Fragment } from "react";
import "./Dashboard.scss";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { FooterDashboard } from "../../components/FooterDashboard";

export const Dashboard = () => {
  const cards = () => {
    return (
      <div className="dashboard__wrap-card--card">
        <button className="dashboard__wrap-card--card--btn-plus" type="button">
          <i class="fas fa-plus-circle"></i>
        </button>
        <div className="dashboard__wrap-card--card--title">
          <figure>
            <img src="" alt="" />
          </figure>
          <h3>
            Bitcoin - <span>BTC</span>
          </h3>
        </div>
        <div className="dashboard__wrap-card--card--description">
          <h4>
            Price: <span>$</span>
            <span>36000</span>
          </h4>
          <h4>
            Volume 24h:<span>$</span>
            <span>6000</span>
          </h4>
          <h4>
            Market Cap:<span>$</span>
            <span>6000</span>
          </h4>
          <h4>24h %: 5</h4>
        </div>
      </div>
    );
  };
  return (
    <>
      <HeaderDashboard />
      <main className="dashboard">
        <button className="dashboard--btn-porfolio">My Porfolio</button>
        <h2 className="dashboard--title">All Cryptocurrencies</h2>
        <div className="dashboard__wrap-card">{cards()}</div>
      </main>
      <FooterDashboard />
    </>
  );
};

import React, { Fragment } from "react";
import "./Porfolio.scss";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { FooterDashboard } from "../../components/FooterDashboard";

export const Porfolio = () => {
  const cardsPorfolio = () => {
    return (
      <div className="porfolio__wrap-cards--card">
        <button type="button">
          <i className="far fa-edit"></i>
        </button>
        <button type="button">
          <i className="far fa-trash-alt"></i>
        </button>
        <div>
          <figure>
            <img
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              alt=""
            />
          </figure>
          <h3>
            Bitcoin - <span>BTC</span>
            <span>
              Price: $<span>36000</span>
            </span>
          </h3>
        </div>
        <div>
          <h4>
            Purchase price: <span>$</span>
            <span>36000</span>
          </h4>
          <h4>
            Quantity:<span>2</span>
            <span>BTC</span>
          </h4>
          <h4>
            Amount invested:<span>$</span>
            <span>500</span>
          </h4>
          <h4>
            Expected gain: <span>$</span>
            <span>200</span>
          </h4>
          <h4>
            Accepted losses: <span>$</span>
            <span>100</span>
          </h4>
        </div>
        <div>
          <h4>
            <span>
              <i className="fas fa-long-arrow-alt-up"></i>
            </span>
            Sell at a profit in
          </h4>
          <p>
            <span>$</span>200
          </p>
        </div>
        <div>
          <h4>
            <span>
              <i className="fas fa-long-arrow-alt-down"></i>
            </span>
            sell at a loss in
          </h4>
          <p>
            <span>$</span>200
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <HeaderDashboard />
      <main className="porfolio">
        <button className="porfolio--btn-dashboard">Dashboard</button>
        <div className="porfolio__card-balance">
          <h2 className="porfolio__card-balance--title">Balance</h2>
          <h4>
            Total investment: <span className="currency">$</span>
            <span>300</span>{" "}
          </h4>
          <h4>
            Total porfits: <span className="currency">$</span>
            <span>300</span>
          </h4>
          <h4>
            Total Profits %:
            <span className="percentage">300</span>
          </h4>
        </div>
        <div className="porfolio__wrap-cards">{cardsPorfolio()}</div>
      </main>
      <FooterDashboard />
    </>
  );
};

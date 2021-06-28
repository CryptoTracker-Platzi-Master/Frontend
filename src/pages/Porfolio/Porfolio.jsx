import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import "./Porfolio.scss";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { FooterDashboard } from "../../components/FooterDashboard";
import { CardsCryptosPorfolio } from "../../components/CardsCryptosPorfolio";

export const Porfolio = ({crearCrypto}) => {

  console.log("info desde porfolio", crearCrypto)

  return (
    <>
      <HeaderDashboard />
      <main className="porfolio">
        <Link to="dashboard" className="porfolio__link-dasboard">
          Dashboard
        </Link>
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
        <div className="porfolio__wrap-cards">
          <CardsCryptosPorfolio
            
          />
        </div>
      </main>
      <FooterDashboard />
    </>
  );
};

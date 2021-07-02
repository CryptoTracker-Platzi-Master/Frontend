import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Porfolio.scss";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { FooterDashboard } from "../../components/FooterDashboard";
import { CardsCryptosPorfolio } from "../../components/CardsCryptosPorfolio";

import axios from "axios";

export const Porfolio = () => {

  const [datacryptos, setdataCrypto] = useState([])

  let tokenUsuario = localStorage.getItem("Token_usuario")

  let options = {
    headers: {
      'Authorization' : "Token " + tokenUsuario
    }
  }
  
useEffect (() => {
  const obtenercryptos = async () => {
    const url = 'https://cryptotrackerapi.herokuapp.com/portfolio/';

    const datacryptos = await axios.get(url, options)
    setdataCrypto(datacryptos.data)
    console.log("respuesta del await", datacryptos)
  }
  obtenercryptos()
}, [])

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
        {datacryptos.map((datacrypto, index) =>(
          <CardsCryptosPorfolio
            key={index}
            datacrypto={datacrypto}
          />
         ))}
        </div>
      </main>
      <FooterDashboard />
    </>
  );
};

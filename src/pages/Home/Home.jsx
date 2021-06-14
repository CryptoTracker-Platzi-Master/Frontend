import React, { Fragment } from "react";

import "./Home.scss";
import currencyChange from "../../assets/img/currency-exchange-mobile.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home--title">CryptoTracker</h1>
        <p className="home--description">
          CryptoTracker is a web application where you can track the top 10
          cryptocurrencies. Being able to keep your portfolio and know how
          healthy it is, also know if it is a good time to buy or sell!
        </p>
        <figure className="home__container-img">
          <img
            className="home__container-img--img"
            src={currencyChange}
            alt="imagen de Currency Change"
          />
        </figure>
      </main>
      <Footer />
    </>
  );
};

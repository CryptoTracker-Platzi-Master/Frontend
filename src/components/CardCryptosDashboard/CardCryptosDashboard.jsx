import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./CardCryptosDashboard.scss";

import { Modal } from "../../containers/Modal";

export const CardCryptosDashboard = ({ cryptos }) => {
  const [modal, setModal] = useState(false);
  const [currentCrypto, setCurrentCrypto] = useState(null);

  const openModal = (crypto) => () => {
    setCurrentCrypto(crypto);
    setModal(true);
  };

  return (
    <div className="dashboard__wrap-card">
      {cryptos.map((crypto) => (
        <div key={crypto.id} className="dashboard__wrap-card--card">
          <button
            onClick={openModal(crypto)}
            className="dashboard__wrap-card--card--btn-plus"
            type="button"
            aria-label="Button addd crypto"
          >
            <i className="fas fa-plus-circle"></i>
          </button>
          <div className="dashboard__wrap-card--card__title">
            <figure className="dashboard__wrap-card--card__title--container-img">
              <img
                className="dashboard__wrap-card--card__title--container-img--img"
                src={crypto.image}
                alt={crypto.name}
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
      {ReactDOM.createPortal(
        modal && (
          <Modal
            title={"Add Cryptocurrencies"}
            setModal={setModal}
            currentCrypto={currentCrypto}
          />
        ),
        document.getElementById("modal")
      )}
    </div>
  );
};

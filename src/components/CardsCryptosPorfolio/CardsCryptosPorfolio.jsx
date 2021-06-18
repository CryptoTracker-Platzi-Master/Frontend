import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./CardsCryptosPorfolio.scss";

import { Modal } from "../Modal";

export const CardsCryptosPorfolio = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  return (
    <div className="porfolio__wrap-cards__card">
      <button
        onClick={openModal}
        type="button"
        className="porfolio__wrap-cards__card--btn-edit"
      >
        <i className="far fa-edit"></i>
      </button>
      <button type="button" className="porfolio__wrap-cards__card--btn-delete">
        <i className="far fa-trash-alt"></i>
      </button>
      <div className="porfolio__wrap-cards__card__head">
        <figure className="porfolio__wrap-cards__card__head--contariner-img">
          <img
            className="porfolio__wrap-cards__card__head--contariner-img--img"
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt=""
          />
        </figure>
        <h3 className="porfolio__wrap-cards__card__head--title">
          Bitcoin - <span>BTC</span>
        </h3>
        <p>
          $ <span>36000</span>
        </p>
      </div>
      <div className="porfolio__wrap-cards__card__description">
        <h4>
          Purchase price: <span>$</span>
          <span>36000</span>
        </h4>
        <h4>
          Quantity: <span>2</span>
          <span>BTC</span>
        </h4>
        <h4>
          Amount invested: <span>$</span>
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
      <div className="porfolio__wrap-cards__card__revenues">
        <div className="porfolio__wrap-cards__card__revenues--buy">
          <h4>
            <i className="fas fa-long-arrow-alt-up icon-buy"></i>
            Sell at a profit
          </h4>
          <p>
            <span>$</span> 200
          </p>
        </div>
        <div className="porfolio__wrap-cards__card__revenues--sell">
          <h4>
            <i className="fas fa-long-arrow-alt-down icon-sell"></i>
            sell at a loss
          </h4>
          <p>
            <span>$</span> 200
          </p>
        </div>
      </div>
      {ReactDOM.createPortal(
        modal && <Modal title={"Edit Cryptocurrencies"} setModal={setModal} />,
        document.getElementById("modal")
      )}
    </div>
  );
};

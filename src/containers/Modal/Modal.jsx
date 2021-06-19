import React, { Fragment } from "react";
import "./Modal.scss";

export const Modal = ({ setModal, title, currentCrypto }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="container-modal">
        <div className="container-modal__modal">
          <button
            onClick={closeModal}
            type="button"
            className="container-modal__modal--btn-close"
          >
            <i className="fas fa-window-close"></i>
          </button>
          <h2 className="container-modal__modal--title">{title}</h2>
          <div className="container-modal__modal--head-crypto">
            <figure className="container-modal__modal--head-crypto--container-img">
              <img src={currentCrypto.image} alt={currentCrypto.name} />
            </figure>
            <h3>
              {currentCrypto.name}{" "}
              <span>
                Price $: <span>{currentCrypto.current_price}</span>
              </span>
            </h3>
          </div>
          <div className="container-modal__modal--container-form">
            <form
              action="form-add-crypto"
              className="container-modal__modal--container-form--form"
            >
              <label htmlFor="purchase-price">Purchase price</label>
              <input type="number" id="purchase-price" placeholder="$ 1000" />

              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" placeholder="1" />

              <label htmlFor="amount-invested">Amount invested</label>
              <input type="number" id="amount-invested" placeholder="$ 400" />

              <label htmlFor="expected-gain">Expected gain</label>
              <input type="number" id="expected-gain" placeholder="$ 200" />

              <label htmlFor="lost-allowed">Lost allowed</label>
              <input type="number" id="lost-allowed" placeholder="$ 200" />

              <div className="container-modal__modal--container-form--form--btns">
                <button type="button" className="btn-add">
                  Add
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="btn-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { Fragment, useState, useContext} from "react";
import "./Modal.scss";
import {ModalContext} from '../../Context/ModalContext';

import { numberWithCommas } from "../../utils/numberWithCommas";
import axios from "axios";

export const Modal = ({ setModal, title, currentCrypto}) => {
  const closeModal = () => {
    setModal(false);
  };


  //Crear el state de las cripto
  const [crypto, guardarCrypto] = useState({
    price: '',
    quantity:'',
    amount:'',
    expected:'',
    lost:''
  });

  //Crear el state del error
  const[error, guardarError] = useState(false)

  const {setGuardarMoneda} = useContext(ModalContext)

  //cuando el usuario escribe en el input
  const actualizarState = (e) => {
    guardarCrypto({
      ...crypto,
      [e.target.name]:e.target.value
    })
  }

  //Extraer los valores
  const {price, quantity, amount, expected, lost} = crypto

  const agregarCrypto = (e) => {
    e.preventDefault();

    //Validar campos llenos
    if(price.trim() === '' || quantity.trim() === '' || amount.trim() === '' || expected.trim() === '' || lost.trim() === ''){
      guardarError(true)
      return;
    }

    //Eliminar mensaje de error
    guardarError(false)


    //Reiniciar el form
    guardarCrypto({
      price: '',
      quantity:'',
      amount:'',
      expected:'',
      lost:''
    })

    //Pasar datos al context
    //setGuardarMoneda(crypto)

    let tokenUsuario = localStorage.getItem("Token_usuario")

    let options = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Authorization' : "Token " + tokenUsuario
      }
    };

    let usuario= localStorage.getItem("ID_usuario")
    let Data = {
      name:currentCrypto.name,
      symbol: currentCrypto.symbol,
      purchase_price: crypto.price,
      take_profit: crypto.expected,
      stop_loss: crypto.lost,
      cantity: crypto.quantity,
      user_fk: usuario
    }

    console.log("token usuario", options)

    axios.post('https://cryptotrackerapi.herokuapp.com/criptos/', Data, options)
    .then(response => {
      console.log("respuesta", response)
    }).catch(error=> {
      console.log("error del post", error)
    })


    console.log("Agregando crypto", Data)
  }



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
            <h3
              value={currentCrypto.name}
              name="namecrypto"
            >
              {currentCrypto.name}{" "}
              <span>
                Price:{" "}
                <span>{numberWithCommas(currentCrypto.current_price)} USD</span>
              </span>
            </h3>
          </div>
          <div className="container-modal__modal--container-form">
            <form
              action="form-add-crypto"
              className="container-modal__modal--container-form--form"
              onSubmit={agregarCrypto}
            >
              <label htmlFor="purchase-price">Purchase price</label>
              <input
                type="number"
                id="purchase-price"
                placeholder="$ 1000"
                name="price"
                onChange={actualizarState}
                value={price}
              />

              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                placeholder="1"
                name="quantity"
                onChange={actualizarState}
                value={quantity}
              />

              <label htmlFor="amount-invested">Amount invested</label>
              <input
                type="number"
                id="amount-invested"
                placeholder="$ 400"
                name="amount"
                onChange={actualizarState}
                value={amount}
              />

              <label htmlFor="expected-gain">Expected gain</label>
              <input
                type="number"
                id="expected-gain"
                placeholder="$ 200"
                name="expected"
                onChange={actualizarState}
                value={expected}
              />

              <label htmlFor="lost-allowed">Lost allowed</label>
              <input
                type="number"
                id="lost-allowed"
                placeholder="$ 200"
                name="lost"
                onChange={actualizarState}
                value={lost}
              />

              <div className="container-modal__modal--container-form--form--btns">
                <button 
                  type="submit"
                  className="btn-add">
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

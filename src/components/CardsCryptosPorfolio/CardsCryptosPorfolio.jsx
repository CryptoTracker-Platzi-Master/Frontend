import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './CardsCryptosPorfolio.scss';

import { Modal } from '../../containers/Modal';

export const CardsCryptosPorfolio = ({
  datacrypto,
  cryptos,
  datacryptos,
  setdataCrypto,
}) => {
  const [modal, setModal] = useState(false);
  const [currentCrypto, setCurrentCrypto] = useState(null);
  let coins = cryptos;

  const filterCrypotoPerName = (cryptoCurrency) => {
    return coins.filter((coin) => coin.symbol === cryptoCurrency && coin);
  };

  const getImgCoin = () => {
    const coinData = filterCrypotoPerName(datacrypto.symbol);
    return coinData[0].image;
  };

  const getPriceCoin = () => {
    const coinData = filterCrypotoPerName(datacrypto.symbol);
    return coinData[0].current_price;
  };

  const openModal = (crypto) => () => {
    crypto.current_price = getPriceCoin();
    crypto.image = getImgCoin();
    setCurrentCrypto(crypto);

    setModal(true);
  };

  const removeCoin = (arr, coin) => {
    let i = arr.indexOf(coin);
    if (i !== -1) {
      arr.splice(i, 1);
    }
    setdataCrypto(arr);
  };

  const eliminarCrypto = async (e) => {
    e.preventDefault();

    const BASE_URL = `https://cryptotrackerapi.herokuapp.com/my-cripto/${datacrypto.id_c}/`;

    let tokenUsuario = localStorage.getItem('Token_usuario');

    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Token ' + tokenUsuario,
      },
    };

    let usuario = parseInt(localStorage.getItem('ID_usuario'));

    let dataDelete = {
      id_c: datacrypto.id_c,
      name: datacrypto.name,
      symbol: datacrypto.symbol,
      purchase_price: datacrypto.purchase_price,
      take_profit: datacrypto.take_profit,
      stop_loss: datacrypto.stop_loss,
      cantity: datacrypto.cantity,
      amount_invested: datacrypto.amount_invested,
      able: 0,
      user_fk: usuario,
    };

    console.log('respueta data delete', dataDelete);

    await axios.delete(BASE_URL, options, dataDelete).then((response) => {});

    removeCoin(datacryptos, datacrypto.id_c);
  };

  return (
    <Fragment>
      <div className='porfolio__wrap-cards__card'>
        <button
          onClick={openModal(datacrypto)}
          type='button'
          className='porfolio__wrap-cards__card--btn-edit'
          aria-label='Button edit'
        >
          <i className='far fa-edit'></i>
        </button>
        <button
          type='button'
          className='porfolio__wrap-cards__card--btn-delete'
          aria-label='Button delete'
          onClick={eliminarCrypto}
        >
          <i className='far fa-trash-alt'></i>
        </button>
        <div className='porfolio__wrap-cards__card__head'>
          <figure className='porfolio__wrap-cards__card__head--contariner-img'>
            <img
              className='porfolio__wrap-cards__card__head--contariner-img--img'
              src={getImgCoin()}
              alt=''
            />
          </figure>
          <h3 className='porfolio__wrap-cards__card__head--title'>
            {datacrypto.name} - <span>{datacrypto.symbol}</span>
          </h3>
          <p>
            $ <span>{getPriceCoin()}</span>
          </p>
        </div>
        <div className='porfolio__wrap-cards__card__description'>
          <h4>
            Purchased price: <span>$</span>
            <span>{datacrypto.purchase_price} USD</span>
          </h4>
          <h4>
            Quantity: <span>{datacrypto.cantity}</span>
            <span>{datacrypto.symbol}</span>
          </h4>
          <h4>
            Amount invested: <span>$</span>
            <span>{datacrypto.amount_invested} USD</span>
          </h4>
          <h4>
            Expected profit: <span>$</span>
            <span>{datacrypto.take_profit} USD</span>
          </h4>
          <h4>
            Losses accepted: <span>$</span>
            <span>{datacrypto.stop_loss} USD</span>
          </h4>
          <h4>
            Total Profit / loss: <span>$</span>
            <span>
              {(
                (getPriceCoin() - datacrypto.purchase_price) *
                datacrypto.cantity
              ).toFixed(2)}{' '}
              USD
            </span>
          </h4>
        </div>
        <div className='porfolio__wrap-cards__card__revenues'>
          <div className='porfolio__wrap-cards__card__revenues--buy'>
            <h4>
              <i className='fas fa-long-arrow-alt-up icon-buy'></i>
              Sell price to profit
            </h4>
            <p>
              <span>$</span>{' '}
              {(
                (datacrypto.amount_invested + datacrypto.take_profit) /
                datacrypto.cantity
              ).toFixed(2)}{' '}
              USD
            </p>
          </div>
          <div className='porfolio__wrap-cards__card__revenues--sell'>
            <h4>
              <i className='fas fa-long-arrow-alt-down icon-sell'></i>
              Sell price to loss
            </h4>
            <p>
              <span>$</span>{' '}
              {(
                (datacrypto.amount_invested - datacrypto.stop_loss) /
                datacrypto.cantity
              ).toFixed(2)}{' '}
              USD
            </p>
          </div>
        </div>
        {ReactDOM.createPortal(
          modal && (
            <Modal
              title={'Edit Cryptocurrencies'}
              setModal={setModal}
              currentCrypto={currentCrypto}
              isEdit={true}
            />
          ),
          document.getElementById('modal')
        )}
      </div>
    </Fragment>
  );
};

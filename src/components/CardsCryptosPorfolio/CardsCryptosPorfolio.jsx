import React, { Fragment } from 'react';
// import ReactDOM from "react-dom";

import './CardsCryptosPorfolio.scss';

// import { Modal } from "../../containers/Modal";

export const CardsCryptosPorfolio = ({ datacrypto }) => {
  // const [modal, setModal] = useState(false);

  // const openModal = () => {
  //   setModal(true);
  // };
  return (
    <Fragment>
      <div className='porfolio__wrap-cards__card'>
        <button
          // onClick={openModal}
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
        >
          <i className='far fa-trash-alt'></i>
        </button>
        <div className='porfolio__wrap-cards__card__head'>
          <figure className='porfolio__wrap-cards__card__head--contariner-img'>
            <img
              className='porfolio__wrap-cards__card__head--contariner-img--img'
              src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
              alt=''
            />
          </figure>
          <h3 className='porfolio__wrap-cards__card__head--title'>
            {datacrypto.name} - <span>{datacrypto.symbol}</span>
          </h3>
          <p>
            $ <span>36000</span>
          </p>
        </div>
        <div className='porfolio__wrap-cards__card__description'>
          <h4>
            Purchase price: <span>$</span>
            <span>{datacrypto.purchase_price}</span>
          </h4>
          <h4>
            Quantity: <span>{datacrypto.cantity}</span>
            <span>{datacrypto.symbol}</span>
          </h4>
          <h4>
            Amount invested: <span>$</span>
            <span>0</span>
          </h4>
          <h4>
            Expected gain: <span>$</span>
            <span>{datacrypto.take_profit}</span>
          </h4>
          <h4>
            Accepted losses: <span>$</span>
            <span>{datacrypto.stop_loss}</span>
          </h4>
        </div>
        <div className='porfolio__wrap-cards__card__revenues'>
          <div className='porfolio__wrap-cards__card__revenues--buy'>
            <h4>
              <i className='fas fa-long-arrow-alt-up icon-buy'></i>
              Sell at a profit
            </h4>
            <p>
              <span>$</span> 200
            </p>
          </div>
          <div className='porfolio__wrap-cards__card__revenues--sell'>
            <h4>
              <i className='fas fa-long-arrow-alt-down icon-sell'></i>
              sell at a loss
            </h4>
            <p>
              <span>$</span> 200
            </p>
          </div>
        </div>
        {/* {ReactDOM.createPortal(
        modal && <Modal title={"Edit Cryptocurrencies"} setModal={setModal} />,
        document.getElementById("modal")
      )} */}
      </div>
    </Fragment>
  );
};

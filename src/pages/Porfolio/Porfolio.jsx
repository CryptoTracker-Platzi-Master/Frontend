import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCryptos } from '../../utils/getCryptos';

import './Porfolio.scss';

import { HeaderDashboard } from '../../components/HeaderDashboard';
import { FooterDashboard } from '../../components/FooterDashboard';
import { CardsCryptosPorfolio } from '../../components/CardsCryptosPorfolio';

import axios from 'axios';

export const Porfolio = ({ setIsLoading }) => {
  const [datacryptos, setdataCrypto] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [balance, setBalance] = useState(0);

  let tokenUsuario = localStorage.getItem('Token_usuario');

  let options = {
    headers: {
      Authorization: 'Token ' + tokenUsuario,
    },
  };

  const callIntervalToCryptos = 600000;

  useEffect(() => {
    const obtenercryptos = async () => {
      setIsLoading(true);
      const url = 'https://cryptotrackerapi.herokuapp.com/portfolio/';

      const datacryptos = await axios.get(url, options);
      setdataCrypto(datacryptos.data);
      setIsLoading(false);
    };
    obtenercryptos();
    getCryptos({ setCryptos, setIsLoading });
    sumInvested(datacryptos);

    const interval = setInterval(() => {
      getCryptos({ setCryptos, setIsLoading });
    }, callIntervalToCryptos);
    return () => {
      clearInterval(interval);
    };
  }, [datacryptos]);

  const sumInvested = (arr) => {
    let totalInvested = 0;
    arr
      .map((invested) => invested.total_invested)
      .map((inversion) => {
        const numberInvested = parseInt(inversion);
        totalInvested = numberInvested + totalInvested;
      });
    setBalance(totalInvested);
  };
  return (
    <>
      <HeaderDashboard />
      <main className='porfolio'>
        <Link to='dashboard' className='porfolio__link-dasboard'>
          Dashboard
        </Link>
        <div className='porfolio__card-balance'>
          <h2 className='porfolio__card-balance--title'>Balance</h2>
          <h4>
            Total investment: <span className='currency'>$ </span>
            <span>{balance} USD</span>{' '}
          </h4>
        </div>
        <div className='porfolio__wrap-cards'>
          {datacryptos.map((datacrypto) => (
            <CardsCryptosPorfolio
              key={datacrypto.id_c}
              datacrypto={datacrypto}
              cryptos={cryptos}
              datacryptos={datacryptos}
              setdataCrypto={setdataCrypto}
            />
          ))}
        </div>
      </main>
      <FooterDashboard />
    </>
  );
};

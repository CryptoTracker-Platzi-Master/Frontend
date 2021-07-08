import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCryptos } from '../../utils/getCryptos';

import './Porfolio.scss';

import { HeaderDashboard } from '../../components/HeaderDashboard';
import { FooterDashboard } from '../../components/FooterDashboard';
import { CardsCryptosPorfolio } from '../../components/CardsCryptosPorfolio';

import axios from 'axios';

export const Porfolio = ({ isLoading, setIsLoading }) => {
  const [datacryptos, setdataCrypto] = useState([]);
  const [deleteCrypto, setDeleteCrypto] = useState([]);
  const [cryptos, setCryptos] = useState([]);

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
      console.log('datos de las criptos', datacryptos);
      setdataCrypto(datacryptos.data);
      setDeleteCrypto(datacryptos.data);
      setIsLoading(false);
    };
    obtenercryptos();
    getCryptos({ setCryptos, setIsLoading });
    const interval = setInterval(() => {
      getCryptos({ setCryptos, setIsLoading });
    }, callIntervalToCryptos);
    return () => {
      clearInterval(interval);
    };
  }, [deleteCrypto]);

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
            Total investment: <span className='currency'>$</span>
            <span>300</span>{' '}
          </h4>
        </div>
        <div className='porfolio__wrap-cards'>
          {datacryptos.map((datacrypto) => (
            <CardsCryptosPorfolio
              key={datacrypto.id_c}
              datacrypto={datacrypto}
              cryptos={cryptos}
              setDeleteCrypto={setDeleteCrypto}
              deleteCrypto={deleteCrypto}
            />
          ))}
        </div>
      </main>
      <FooterDashboard />
    </>
  );
};

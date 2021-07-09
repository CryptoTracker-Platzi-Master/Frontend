import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_BALANCE } from '../../utils/variables';

export const CardBalance = () => {
  const [balance, setBalance] = useState([]);

  let tokenUsuario = localStorage.getItem('Token_usuario');

  let options = {
    headers: {
      Authorization: 'Token ' + tokenUsuario,
    },
  };
  const getBalance = async () => {
    const { data } = await axios.get(URL_BALANCE, options);
    setBalance(data);
  };

  useEffect(() => {
    getBalance();
  }, []);
  return (
    <div className='porfolio__card-balance'>
      <h2 className='porfolio__card-balance--title'>Balance</h2>
      <h4>
        Total investment: <span className='currency'>$ </span>
        <span>{300}</span>{' '}
      </h4>
    </div>
  );
};

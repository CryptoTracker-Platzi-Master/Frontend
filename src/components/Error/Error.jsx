import React from 'react';
import './Error.scss';

export const Error = ({ mensaje }) => {
  return <p className='error-login'>{mensaje}</p>;
};

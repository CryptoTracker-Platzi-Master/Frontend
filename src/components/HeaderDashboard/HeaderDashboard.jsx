import React from 'react';
import { Link } from 'react-router-dom';
import imgPerfile from '../../assets/img/img-perfile.png';
import './HeaderDashboard.scss';

export const HeaderDashboard = () => {
  let userName = localStorage.getItem('first_name');

  const CerrarSesion = () => {
    localStorage.clear();
  };

  return (
    <header className='header-dashboard'>
      <figure className='header-dashboard__container-img'>
        <img
          className='header-dashboard__container-img--img'
          src={imgPerfile}
          alt='logo'
        />
      </figure>
      <p className='header-dashboard--name-user'>
        Hi, <span>{userName}</span>
      </p>
      <nav className='header-dashboard__nav'>
        <Link to='/'>
          <i
            onClick={CerrarSesion}
            className='fas fa-sign-out-alt header-dashboard__nav--logout'
          ></i>
        </Link>
      </nav>
    </header>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import logoTipo from '../../assets/img/logoTipo.png';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <figure className='header__container-img'>
          <Link to='/'>
            <img
              className='header__container-img--img'
              src={logoTipo}
              alt='logo'
            />
          </Link>
        </figure>
        <nav className='header__nav'>
          <Link to='/login'>
            <button className='header__nav--login' type='button'>
              Login
            </button>
          </Link>
          <Link to='/sign-up'>
            <button className='header__nav--sign-up' type='button'>
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

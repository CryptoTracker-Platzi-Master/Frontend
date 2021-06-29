import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgPerfile from '../../assets/img/img-perfile.png';
import './HeaderDashboard.scss';
import { LoginContext } from '../../Context/LoginContext';

export const HeaderDashboard = () => {
  const { login } = useContext(LoginContext);

  console.log('lo que deberia traer', login);

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
        Hi, <span>{login.email}</span>
      </p>
      <nav className='header-dashboard__nav'>
        <Link to='/'>
          <i className='fas fa-sign-out-alt header-dashboard__nav--logout'></i>
        </Link>
      </nav>
    </header>
  );
};

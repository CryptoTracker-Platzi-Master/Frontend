import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import logoLogin from '../../assets/img/img-logo.png';
import './Login.scss';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Error } from '../../components/Error';

export const Login = ({ isLoading, setIsLoading }) => {
  let history = useHistory();
  //Crear el state del login
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(false);
  const [ErrorLogin, setErrorLogin] = useState(false);

  //funcion que captura lo que el usuario escribe en los inputs
  const actualizarLoginState = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { username, password } = login;

  //cuando presiona login
  const submitLogin = (e) => {
    e.preventDefault();

    //Validar
    if (username.trim() === '' || password.trim() === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setIsLoading(true);
    }
    //enviar al context
    axios
      .post('https://cryptotrackerapi.herokuapp.com/api/auth/login/', login)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('ID_usuario', response.data.user_id);
          localStorage.setItem('Token_usuario', response.data.token);
          localStorage.setItem('first_name', response.data.first_name);
          response.data.verified
            ? history.push('/dashboard')
            : history.push('/2fa');
          setIsLoading(false);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <Header />
      <main className='login'>
        <figure className='login__container-img'>
          <img
            className='login__container-img--img'
            src={logoLogin}
            alt='Logo de login'
          />
        </figure>
        <h2 className='login--title'>Login</h2>
        {isLoading ? (
          <div className='loader'>Loading...</div>
        ) : (
          <div className='login__container-form'>
            <form
              className='login__container-form--form'
              action='form-login'
              onSubmit={submitLogin}
            >
              <label htmlFor='username-login'>Username</label>
              <input
                type='text'
                id='username-login'
                placeholder='Your User'
                name='username'
                value={username}
                onChange={actualizarLoginState}
              />

              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Your Password'
                onChange={actualizarLoginState}
                value={password}
              />

              <button type='submit' className='button-login'>
                Login
              </button>
            </form>
            {ErrorLogin && <Error mensaje='Usuario o Contrase??a invalidos' />}
            {error && <Error mensaje='All fields are required' />}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

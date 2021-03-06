import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import logoSignUp from '../../assets/img/img-logo.png';

import './SignUp.scss';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const SignUp = ({ setIsLogin }) => {
  let history = useHistory();
  //Creando el state del formulario
  const [registro, setRegistro] = useState({
    username: '',
    first_name: '',
    email: '',
    password: '',
    confirm: '',
  });

  //State del error
  const [error, setError] = useState(false);

  //Mensaje usuario Creado
  const [repeatUser, setrepeatUser] = useState(false);

  //Captura lo ingresado en el input
  const actualizarState = (e) => {
    setRegistro({
      ...registro,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { username, first_name, email, password, confirm } = registro;

  //Capturando datos del formulario
  const submitRegistro = (e) => {
    e.preventDefault();

    //Validar campos completos
    if (
      username.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      setError(true);
      return;
    }

    //Eliminando el mensaje de error
    setError(false);

    //Reiniciar el form
    setRegistro({
      username: '',
      first_name: '',
      email: '',
      password: '',
      confirm: '',
    });

    //Enviar al API
    axios
      .post('https://cryptotrackerapi.herokuapp.com/api/auth/signup/', registro)
      .then((response) => {
        localStorage.setItem('ID_usuario', response.data.user_id);
        localStorage.setItem('Token_usuario', response.data.token);
        if (response.status === 200) {
          setTimeout(history.push('login'), 5000);
        }
      })
      .catch((error) => {
        setrepeatUser(true);
      });
  };

  //Eliminar mensaje de error
  const hideMessageError = () => {
    setTimeout(() => {
      setError(false);
      setrepeatUser(false);
    }, 3000);
  };
  return (
    <>
      <Header />
      <main className='sign-up'>
        <figure className='sign-up__container-img'>
          <img
            className='sign-up__container-img--img'
            src={logoSignUp}
            alt='Logo de sign-up'
          />
        </figure>
        <h2 className='sign-up--title'>Sign Up</h2>
        <div className='sign-up__container-form'>
          <form
            className='sign-up__container-form--form'
            action='form-sign-up'
            onSubmit={submitRegistro}
          >
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              placeholder='JuanitoRT'
              name='username'
              value={username}
              onChange={actualizarState}
            />

            <label htmlFor='full-name'>Full Name</label>
            <input
              type='text'
              id='full-name'
              name='first_name'
              value={first_name}
              placeholder='Charly Smith'
              onChange={actualizarState}
            />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              onChange={actualizarState}
              value={email}
            />

            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='password'
              onChange={actualizarState}
              value={password}
            />

            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              type='password'
              id='confirm'
              placeholder='Confirm Password'
              name='confirm'
              onChange={actualizarState}
              value={confirm}
            />

            <button
              type='submit'
              className='button-signup'
              onClick={hideMessageError}
            >
              Sign Up
            </button>
          </form>
          {error && <p className='error'>all fields are required</p>}

          {repeatUser && <p className='error'>existing mail, try another</p>}
        </div>
      </main>
      <Footer />
    </>
  );
};

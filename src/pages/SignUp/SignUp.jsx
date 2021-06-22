import React, { Fragment, useState } from "react";
import logoSignUp from "../../assets/img/img-logo.png";

import "./SignUp.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const SignUp = () => {

  //Creando el state del formulario
  const [registro, setRegistro] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:''
  });

  //State del error
  const [error, setError] = useState(false)

  //Captura lo ingresado en el input
  const actualizarState = (e) => {
    setRegistro({
      ...registro,
      [e.target.name]:e.target.value
    })
  }

  //Extraer los valores
  const{firstName, lastName, email, password, confirmPassword} = registro;

  //Capturando datos del formulario
  const submitRegistro = (e) => {
    e.preventDefault();

    //Validar campos completos
    if(firstName.trim() === '' || lastName.trim() === '' ||  email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' ) {
      setError(true)
      return;
    }

    //Eliminando el mensaje de error
    setError(false)

    //Reiniciar el form
    setRegistro({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword:''
    })
  }

  return (
    <>
      <Header />
      <main className="sign-up">
        <figure className="sign-up__container-img">
          <img
            className="sign-up__container-img--img"
            src={logoSignUp}
            alt="Logo de sign-up"
          />
        </figure>
        <h2 className="sign-up--title">Sign Up</h2>
        <div className="sign-up__container-form">
          <form
           className="sign-up__container-form--form"
           onSubmit={submitRegistro}
          >
            <label htmlFor="first-name">First Name</label>
            <input
             type="text"
             id="first-name" 
             name="firstName"
             placeholder="Juanito" 
             value={firstName}
             onChange={actualizarState}
            />

            <label htmlFor="last-name">Last Name</label>
            <input
             type="text"
             id="last-name"
             name="lastName"
             placeholder="Smith"
             onChange={actualizarState}
             value={lastName}
            />

            <label htmlFor="email">Email</label>
            <input
             type="email"
             id="email" 
             name="email"
             placeholder="example@example.com"
             onChange={actualizarState}
             value={email}
            />

            <label htmlFor="password">Password</label>
            <input
             type="password"
             id="password"
             name="password"
             placeholder="password"
             onChange={actualizarState}
             value={password}
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={actualizarState}
              value={confirmPassword}
            />

            <button
              type="submit"
              className="buttonSignUp"
            >Sign Up</button>
          </form>
          {error ?<p>Todos los campos son obligatorios</p>: null}
        </div>
      </main>
      <Footer />
    </>
  );
};

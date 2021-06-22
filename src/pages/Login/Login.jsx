import React, { Fragment, useState } from "react";
import logoLogin from "../../assets/img/img-logo.png";
import "./Login.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Login = () => {

  //Crear el state del login
  const[login, setLogin] = useState({
    email:'',
    password:''
  })

  const [error, setError] = useState(false)

  //funcion que captura lo que el usuario escribe en los inputs
  const actualizarLoginState = (e) => {
    setLogin({
      ...login,
      [e.target.name]:e.target.value
    })
  }

  //Extraer los valores
  const {email, password} = login;

  //cuando presiona login
  const submitLogin = (e) => {
    e.preventDefault()


    //Validar
    if(email.trim() === '' || password.trim() === '') {
      setError(true)
      return
    }

  }
 
  return (
    <>
      <Header />
      <main className="login">
        <figure className="login__container-img">
          <img
            className="login__container-img--img"
            src={logoLogin}
            alt="Logo de login"
          />
        </figure>
        <h2 className="login--title">Login</h2>
        <div className="login__container-form">
          <form
           className="login__container-form--form"
           action="form-login"
           onSubmit={submitLogin}
          >
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email" 
              name="email"
              placeholder="example@example.com"
              onChange={actualizarLoginState}
              value={email}
             />

            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={actualizarLoginState}
              value={password}
            />

            <button
              type="submit"
              className="buttonLogin"
            >Login</button>
          </form>
          {error ?<p>El correo o la contraseña estan errados</p>: null}
        </div>
      </main>
      <Footer />
    </>
  );
};

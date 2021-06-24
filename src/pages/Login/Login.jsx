import React, { Fragment, useState, useContext } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import logoLogin from "../../assets/img/img-logo.png";
import "./Login.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {LoginContext} from '../../Context/LoginContext';

export const Login = () => {


  //Crear el state del login
  const[login, setLogin] = useState({
    username:'',
    password:''
  })

  const [error, setError] = useState(false)

  const {setGuardarLogin} = useContext(LoginContext)

  //funcion que captura lo que el usuario escribe en los inputs
  const actualizarLoginState = (e) => {
    setLogin({
      ...login,
      [e.target.name]:e.target.value
    })
  }

  //Extraer los valores
  const {username, password} = login;

  //cuando presiona login
  const submitLogin = (e) => {
    e.preventDefault()

    //Validar
    if(username.trim() === '' || password.trim() === '') {
      setError(true)
      return
    }
    //enviar al context
    console.log("login de login",login)
   // setGuardarLogin(login)
   axios.post('https://cryptotrackerapi.herokuapp.com/api/auth/login/', login)
   .then(response => {
     console.log("status", response.status);
     if(response.data.status === 200){
       <Link to="/dashboard"></Link>
     }
     console.log("data", response.data);
   }).catch(error => {
     console.log("algo salio mal", error)
   })

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
            <label htmlFor="username-login">Username</label>
            <input 
              type="text" 
              id="username-login" 
              placeholder="example@example.com"
              name="username"
              value={username}
              onChange={actualizarLoginState}
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

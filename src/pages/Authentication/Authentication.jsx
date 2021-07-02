import React, { Fragment, useState } from "react";
import "./Authentication.scss";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import icon2fa from "../../assets/img/icon-2fa.png";
import axios from "axios";

export const Authentication = ({setIsauthenticated}) => {


  const[twofa, setTwofa] = useState({
    code:''
  })

  const[error, setError] = useState(false)

  const actualizarTwoState = (e) => {
    setTwofa({
      ...twofa,
      [e.target.name]: e.target.value
    })
  }

  const{code} = twofa;

  const twoFactorSubmit = (e) => {
    e.preventDefault()

    if(code.trim() === ''){
      setError(true)
      return
    }

    setError(false)

    let usuarioID = localStorage.getItem("ID_usuario");
    let Token_usuario = localStorage.getItem("Token_usuario")

    let Data = {
      user_id : usuarioID,
      code : twofa.code
    }


    console.log("data", Data)
    let options = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Authorization' : "Token " + Token_usuario
      }
    };

    axios.post('https://cryptotrackerapi.herokuapp.com/api/auth/validate/', Data, options)
    .then(response => {
      
        if(response.status === 200 && response.data.verified){
          setIsauthenticated(true)
          console.log("respuesta del response", response.data.verified)
        }else {
          
        }
    })
  }

  return (

    <>
      <Header />
      <main className="code-2fa">
        <figure className="code-2fa__container-img">
          <img
            className="code-2fa__container-img--img"
            src={icon2fa}
            alt="Icon de 2FA"
          />
        </figure>
        <h2 className="code-2fa--title">Authentication code</h2>
        <div className="code-2fa__container-form">
          <form
            action="form-2fa"
            className="code-2fa__container-form--form"
            onSubmit={twoFactorSubmit}
          >
            <input
              type="password"
              id="code_2fa"
              name="code"
              value={code}
              placeholder="Enter your 6-digit code"
              onChange={actualizarTwoState}
            />
            <button className="code-2fa__container-form--btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

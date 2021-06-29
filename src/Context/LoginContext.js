import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear el Context
export const LoginContext = createContext();

//Provider es donde se encuentran las funciones y el state
const LoginProvider = (props) => {

    const[ login, setGuardarLogin] = useState({
        email: '',
        password: ''
    })

    const {email, password} = login;
    console.log("desde el context", login)

    return (
        <LoginContext.Provider
            value={{
                setGuardarLogin
            }}
        >
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;






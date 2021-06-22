import React, {createContext, useState, useEffect} from 'react';

//Crear el Context
export const LoginContext = createContext();

//Provider es donde se encuentran las funciones y el state
const LoginProvider = (props) => {



    return (
        <LoginContext.Provider>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;






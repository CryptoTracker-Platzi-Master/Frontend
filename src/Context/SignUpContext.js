import React, {createContext, useState, useEffect} from 'react';

//Crear el Context
export const SignUpContext = createContext();

//Provider es donde se encuentran las funciones y el state
const SignUpProvider = (props) => {



    return (
        <SignUpContext.Provider>
            {props.children}
        </SignUpContext.Provider>
    )
}

export default SignUpProvider;




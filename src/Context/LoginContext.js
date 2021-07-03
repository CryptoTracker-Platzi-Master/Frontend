import React, { createContext, useState } from 'react';

//Crear el Context
export const LoginContext = createContext();

//Provider es donde se encuentran las funciones y el state
const LoginProvider = (props) => {
  const [login, setGuardarLogin] = useState({
    email: '',
    password: '',
  });
  return (
    <LoginContext.Provider
      value={{
        login,
        setGuardarLogin,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

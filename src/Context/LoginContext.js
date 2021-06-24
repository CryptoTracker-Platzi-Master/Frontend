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
    console.log(login)

    useEffect(() => {
            const loginUsuario = async () => {
                const url = `https://cryptotrackerapi.herokuapp.com/api/auth/login/`;

                const resultado = await axios({
                    method: 'POST',
                    url: url,
                    data: {
                        username: email,
                        password:password
                    }
                }).then(res => {
                    console.log(res);
                    resultado(res.data)
                })
                loginUsuario();
            }
    }, [login])

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






import React, {createContext} from 'react';

//Crear el context
export const ModalContext = createContext();

//Provider 

const ModalProvider = (props) => {

    /* const [moneda, setGuardarMoneda] = useState({ */
    /*     price: '', */
    /*     quantity:'', */
    /*     amount:'', */
    /*     expected:'', */
    /*     lost:'' */
    /* }) */

  /*   const {price, quantity, amount, expected, lost} = moneda; */
  /*   console.log("desde el context Modal", moneda) */

    return (
        <ModalContext.Provider value="">
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
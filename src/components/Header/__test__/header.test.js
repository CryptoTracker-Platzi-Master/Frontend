import React from "react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Header } from "../";

describe("[ component / Header ]", () => {
  describe("when  `Header` is mounted", () => {
    it("[`Header`]", () => {
      const { asFragment } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

// unit testing
// entradas y salidas
// es una fn, valido lo que entra y que slaga lo esperado

//estructura a component que UI
// que se mantenga la structura, si falla es por que hay un bug, o se actualizo la estructura.

//interaction
// si la interacion del component reaciona bien

//integracion -- visual testing
// como trabajan los component entre si o pages, front and back

//end to end --- se prueba flujos

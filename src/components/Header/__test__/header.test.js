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

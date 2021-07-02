import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Footer } from "../";

describe("[ component / Footer ]", () => {
  describe("when  `Footer` is mounted", () => {
    it("[`Footer`]", () => {
      const { asFragment } = render(<Footer />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

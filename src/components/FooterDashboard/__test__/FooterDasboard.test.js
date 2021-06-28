import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FooterDashboard } from "../";

describe("[ component / FooterDashboard ]", () => {
  describe("when  `FooterDashboard` is mounted", () => {
    it("[`FooterDashboard`]", () => {
      const { asFragment } = render(<FooterDashboard />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

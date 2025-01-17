import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render TaxCalculator component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("tax-calculator")).toBeInTheDocument();
  });
});

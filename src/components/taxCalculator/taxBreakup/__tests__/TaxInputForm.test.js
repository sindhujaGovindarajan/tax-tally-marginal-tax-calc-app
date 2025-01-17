import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaxInputForm from "../TaxInputForm";

describe("TaxInputForm", () => {
  it("should render the select component", () => {
    const { getByTestId } = render(<TaxInputForm />);
    const select = getByTestId("select");
    expect(select).toBeInTheDocument();
  });

  it("should render the input component with the correct label and type", () => {
    const { getByPlaceholderText } = render(<TaxInputForm />);
    const input = getByPlaceholderText("$0");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  it("should call the onChangeAssesmentYear and handleSalaryChange functions when their respective elements are changed", () => {
    const onChangeAssesmentYear = jest.fn();
    const handleSalaryChange = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <TaxInputForm
        onChangeAssesmentYear={onChangeAssesmentYear}
        handleSalaryChange={handleSalaryChange}
      />
    );
    const select = getByTestId("select");
    fireEvent.change(select, { target: { value: "2022" } });
    expect(onChangeAssesmentYear).toHaveBeenCalled();

    const input = getByPlaceholderText("$0");
    fireEvent.change(input, { target: { value: "50000" } });
    expect(handleSalaryChange).toHaveBeenCalled();
  });
});

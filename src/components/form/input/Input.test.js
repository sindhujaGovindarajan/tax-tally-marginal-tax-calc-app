import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  it("should renders input with label", () => {
    const labelText = "Address:";
    const { getByText } = render(<Input label={labelText} />);
    const labelElement = getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  it("should handle onChange event", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your name" onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText("Enter your name");
    fireEvent.change(inputElement, { target: { value: "Sindhu" } });
    expect(onChangeMock).toHaveBeenCalledWith("Sindhu");
  });

  it("should render disabled input", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your name" disabled />
    );
    const inputElement = getByPlaceholderText("Enter your name");
    expect(inputElement).toBeDisabled();
  });

  it("should render input with default value", () => {
    const { getByDisplayValue } = render(<Input defaultValue="Sindhu" />);
    const inputElement = getByDisplayValue("Sindhu");
    expect(inputElement).toBeInTheDocument();
  });
});

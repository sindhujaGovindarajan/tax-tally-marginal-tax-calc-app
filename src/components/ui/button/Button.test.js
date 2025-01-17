import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("should render button with children", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should handle onClick event", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClickHandle={onClickMock} disabled={false}>
        Click me
      </Button>
    );
    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should render disabled button", () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});

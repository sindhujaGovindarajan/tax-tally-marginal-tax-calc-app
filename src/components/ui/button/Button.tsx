import { FunctionComponent, ReactElement } from "react";
import { ButtonProps } from "../types";
import "./Button.css";

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = "button",
  onClickHandle,
  disabled = true,
}): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClickHandle}
      className={`button button-primary ${disabled && "button-disabled"}`}
      disabled={disabled}
      role="button"
    >
      {children}
    </button>
  );
};

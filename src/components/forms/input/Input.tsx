import React from "react";
import { InputProps } from "../types";
import { Label } from "../../ui/label/Label";

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  refs,
  onChange,
  placeholder,
  autoFocus = false,
  defaultValue = "",
  disabled = false,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <input
        autoFocus={autoFocus}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        ref={refs}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </>
  );
};

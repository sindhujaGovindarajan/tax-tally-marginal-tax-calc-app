import React from "react";
import { CustomSelectProps } from "../types";
import { Label } from "../../ui/label/Label";

export const CustomSelect: React.FC<CustomSelectProps> = ({
  refs,
  label,
  options,
  onChangeYear,
  defaultValue = "",
  disabled = false,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <select
        ref={refs}
        onChange={(e) => onChangeYear(e)}
        defaultValue={defaultValue}
        className="select"
        data-testid="select"
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

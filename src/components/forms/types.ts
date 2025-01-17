import React, { RefObject } from "react";

export type InputProps = {
  label: string;
  type?: string;
  refs: RefObject<HTMLInputElement>;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  disabled?: boolean;
};

export type CustomSelectProps = {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChangeYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  refs: RefObject<HTMLSelectElement>;
  disabled?: boolean;
};

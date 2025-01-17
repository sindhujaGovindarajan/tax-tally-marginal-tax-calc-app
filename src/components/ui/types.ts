import React from "react";
import { ChildrenNode } from "../../types/types";

export type LabelProps = ChildrenNode & {
  className?: string;
};

export type ErrorProps = {
  errorMessage: string;
  show: boolean;
};

export type ButtonProps = ChildrenNode & {
  type?: "submit" | "reset" | "button";
  onClickHandle?: () => React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

import { ErrorProps } from "../types";
import "./Error.css";

export const Error = ({ errorMessage, show }: ErrorProps) => {
  return <>{show ? <p className="error">{errorMessage}</p> : null}</>;
};

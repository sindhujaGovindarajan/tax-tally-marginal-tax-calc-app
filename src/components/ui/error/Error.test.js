import React from "react";
import { render } from "@testing-library/react";
import { Error } from "./Error";

it("renders error message", () => {
  const errorMessage = "This is an error";
  const { getByText } = render(
    <Error errorMessage={errorMessage} show={true} />
  );
  const errorElement = getByText(errorMessage);
  expect(errorElement).toBeInTheDocument();
});

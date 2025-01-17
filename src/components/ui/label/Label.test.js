import { render } from "@testing-library/react";
import { Label } from "./Label";

describe("Label component", () => {
  it("should render hello world", () => {
    const { getByText } = render(<Label>Hello World</Label>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});

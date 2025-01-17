import { render, fireEvent } from "@testing-library/react";
import TaxCalculator from "./TaxCalculator";
import { Button } from "../ui/button/Button";

jest.mock("react", () => {
  const original = jest.requireActual("react");
  return {
    ...original,
    useReducer: () => [mockState, jest.fn()],
  };
});

const mockState = {
  error: false,
  showTaxBreakup: false,
  taxBracketData: [],
  taxCalculationData: [{ totalTax: 0, taxBreakup: [], effectiveRate: 0 }],
};

describe("TaxCalculator", () => {
  it("should render the component correctly", () => {
    const { getByTestId } = render(<TaxCalculator />);
    expect(getByTestId("tax-calculator")).toBeInTheDocument();
  });

  test("should update value for salary and button to be enabled", () => {
    const { getByPlaceholderText } = render(<TaxCalculator />);
    const salaryInput = getByPlaceholderText("$0");
    fireEvent.change(salaryInput, { target: { value: "90000" } });
    expect(salaryInput).toHaveValue(90000);
  });

  test("should update value for salary for negative values", () => {
    const { getByPlaceholderText } = render(<TaxCalculator />);
    const salaryInput = getByPlaceholderText("$0");
    fireEvent.change(salaryInput, { target: { value: "-5000" } });
    expect(salaryInput).toHaveValue(-5000);
  });

  test("should render button with calculate text and not be not disabled", () => {
    const { getByText } = render(<Button disabled={false} />);
    const button = getByText("Calculate");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test("should show taxBreakp component", () => {
    mockState.showTaxBreakup = true;
    const { getByText } = render(<TaxCalculator />);
    const taxBreakUpText = getByText("Tax Breakup");
    expect(taxBreakUpText).toBeInTheDocument();
  });

  test("should show error when error state is true", () => {
    mockState.error = true;
    const { getByText } = render(<TaxCalculator />);
    const errorText = getByText("Something went wrong. Please try later.");
    expect(errorText).toBeInTheDocument();
  });
});

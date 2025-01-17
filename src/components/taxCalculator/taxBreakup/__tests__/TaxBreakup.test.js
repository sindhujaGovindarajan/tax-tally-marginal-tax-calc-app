import React from "react";
import { render } from "@testing-library/react";
import { TaxBreakup } from "../TaxBreakup";
import { formatter } from "../../../../utils/formatter";

const totalTax = 15800;
const effectiveRate = 0.22;
const taxBreakup = [
  { taxRate: 5000, max: 1000000, rate: 0.44 },
  { taxRate: 400, max: 8555, rate: 0.22 },
  { taxRate: 800, rate: 0.8 },
];

describe("TaxBreakup Component", () => {
  it("should render TaxBreakup component", () => {
    const { getByText } = render(
      <TaxBreakup
        showTaxBreakup={true}
        totalTax={totalTax}
        effectiveRate={effectiveRate}
        taxBreakup={taxBreakup}
      />
    );
    const taxStr = formatter.format(totalTax);
    const formattedEffectiveRate =
      effectiveRate !== 0
        ? Number(effectiveRate * 100).toFixed(2)
        : effectiveRate;

    expect(getByText(`Total tax:`)).toBeInTheDocument();
    expect(getByText(`${taxStr}`)).toBeInTheDocument();
    expect(getByText(`Effective rate:`)).toBeInTheDocument();
    expect(getByText(`${formattedEffectiveRate} %`)).toBeInTheDocument();
  });
});

import { useReducer } from "react";
import { TaxData } from "../types";

// Initial State defined outside the component
const initialTaxData: TaxData = {
  error: false,
  showTaxBreakup: false,
  taxBracketData: [],
  taxCalculationData: {
    totalTax: 0,
    taxBreakup: [{ max: 0, min: 0, rate: 0, taxRate: 0 }],
    effectiveRate: 0,
  },
};

const useTaxData = () => {
  const reducer = (prev: TaxData, next: Partial<TaxData>) => ({
    ...prev,
    ...next,
  });

  const [taxData, setTaxData] = useReducer(reducer, initialTaxData);

  return { taxData, setTaxData };
};

export default useTaxData;

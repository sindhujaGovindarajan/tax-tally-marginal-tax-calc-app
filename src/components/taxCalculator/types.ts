import React, { RefObject } from "react";

export type TaxBracket = {
  max: number;
  min: number;
  rate: number;
};

export type TaxBreakupProps = {
  totalTax: number;
  taxBreakup: TaxDetails[];
  effectiveRate: number;
  showTaxBreakup: boolean;
};

export type TaxDetails = TaxBracket & {
  taxRate: number;
};

export type TaxInputProps = {
  assesmentYearRef: RefObject<HTMLSelectElement>;
  onChangeAssesmentYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  salaryRef: RefObject<HTMLInputElement>;
  handleSalaryChange: (value: string) => void;
  disabledYear?: boolean;
};

export type TaxData = {
  error: boolean;
  showTaxBreakup: boolean;
  taxBracketData: TaxBracket[];
  taxCalculationData: {
    totalTax: number;
    taxBreakup: TaxDetails[];
    effectiveRate: number;
  };
};

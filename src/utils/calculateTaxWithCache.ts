import { TaxBracket, TaxDetails } from "../components/taxCalculator/types";

// Cache for better performance
const cachedResults: Map<
  string,
  Map<
    number,
    { totalTax: number; taxBreakup: TaxDetails[]; effectiveRate: number }
  >
> = new Map();

export const calculateTax = (
  income: number,
  taxBrackets: TaxBracket[],
  year: string
) => {
  // Check if the year is already cached
  let yearCache = cachedResults.get(year);
  if (!yearCache) {
    yearCache = new Map();
    cachedResults.set(year, yearCache);
  }

  // Check if the income for the given year is already cached
  if (yearCache.has(income)) {
    return yearCache.get(income)!;
  }

  // Perform the tax calculation
  let totalTax = 0;
  const taxBreakup: TaxDetails[] = [];
  for (const bracket of taxBrackets) {
    if (income > bracket.min) {
      const max = bracket.max ?? income;
      const bracketIncome = Math.min(income, max) - bracket.min;
      const taxCharged = bracketIncome * bracket.rate;
      totalTax += taxCharged;
      taxBreakup.push({ ...bracket, taxRate: taxCharged });
      if (income <= max) break;
    }
  }

  const effectiveRate = totalTax / income;

  // Cache the computed result
  const result = { totalTax, taxBreakup, effectiveRate };
  yearCache.set(income, result);

  return result;
};

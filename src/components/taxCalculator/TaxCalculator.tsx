import React, {
  useRef,
  useEffect,
  useState,
  createRef,
  lazy,
  RefObject,
  Suspense,
} from "react";
import "./TaxCalculator.css";
import TaxInputForm from "./taxBreakup/TaxInputForm";
import { Button } from "../ui/button/Button";
import { Error } from "../../components/ui/error/Error";
import { API_ENDPOINT, DEFAULT_ASSESMENT_YEAR } from "../../constants";
import { fetchTaxBrackets } from "../../services/api";
import useTaxData from "./context/useTaxData";

// Lazily load TaxBreakup for code splitting
const TaxBreakup = lazy(() => import("./taxBreakup/TaxBreakup"));

const TaxCalculator = () => {
  const salaryRef = createRef() as RefObject<HTMLInputElement>;
  const assesmentYearRef = useRef<HTMLSelectElement>(null);
  const [disabledButton, setDisabledButton] = useState(true);
  const { taxData, setTaxData } = useTaxData();

  const fetchTaxes = async (url: string) => {
    setDisabledButton(true);
    try {
      const response = await fetchTaxBrackets(url);
      setTaxData({
        taxBracketData: response.data.tax_brackets,
        error: false,
      });
      validateSalary();
    } catch (err) {
      setTaxData({ error: true });
    }
  };

  const validateSalary = () => {
    let salary = salaryRef.current?.value;
    setDisabledButton(
      taxData.error || Number(salary) <= 0 || salary?.trim() === ""
    );
  };

  const onChangeAssesmentYear = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let year = event.target.value;
    fetchTaxes(`${API_ENDPOINT}tax-year/${year}`);
  };

  const handleTaxCalculation = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    let salary = salaryRef.current?.valueAsNumber || 0;
    let year = assesmentYearRef.current?.value || DEFAULT_ASSESMENT_YEAR;

    try {
      const { calculateTax } = await import(
        "../../utils/calculateTaxWithCache"
      );
      const { totalTax, taxBreakup, effectiveRate } = calculateTax(
        salary,
        taxData.taxBracketData,
        year
      );
      setTaxData({
        showTaxBreakup: true,
        taxCalculationData: { totalTax, taxBreakup, effectiveRate },
      });
    } catch (error) {
      setTaxData({ error: true });
    }
  };

  useEffect(() => {
    if (taxData.error) {
      setDisabledButton(true);
    }
  }, [taxData.error]);

  useEffect(() => {
    fetchTaxes(API_ENDPOINT);
  }, []);

  return (
    <div className="tax-calculator-container" data-testid="tax-calculator">
      <form onSubmit={handleTaxCalculation}>
        <h1 className="heading">TaxTally - MTR Calculator</h1>
        <Error
          show={taxData?.error}
          errorMessage="Something went wrong. Please try later."
        />
        <TaxInputForm
          assesmentYearRef={
            assesmentYearRef as React.RefObject<HTMLSelectElement>
          }
          onChangeAssesmentYear={onChangeAssesmentYear}
          salaryRef={salaryRef}
          handleSalaryChange={validateSalary}
        />
        <Button disabled={disabledButton} type="submit">
          Calculate
        </Button>

        <Suspense fallback={<div>Loading tax breakup details...</div>}>
          <TaxBreakup
            totalTax={taxData.taxCalculationData.totalTax}
            taxBreakup={taxData.taxCalculationData.taxBreakup}
            effectiveRate={taxData.taxCalculationData.effectiveRate}
            showTaxBreakup={taxData.showTaxBreakup}
          />
        </Suspense>
      </form>
    </div>
  );
};
export default React.memo(TaxCalculator);

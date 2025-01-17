import React, {
  useRef,
  useEffect,
  RefObject,
  useState,
  createRef,
} from "react";
import TaxInputForm from "./TaxInputForm";
import { API_ENDPOINT, DEFAULT_ASSESMENT_YEAR } from "../../constants";
import { fetchTaxBrackets } from "../../services/api";
import { TaxBreakup } from "../taxCalculator/TaxBreakup";
import { Error } from "../../components/ui/error/Error";
import useTaxData from "./context/useTaxData";
import "./TaxCalculator.css";
import { Button } from "../ui/button/Button";

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
    const invalidCondition = Number(salary) < 0 || salary === "";
    console.log({ invalidCondition });
    // setDisabledButton(invalidCondition);
    if (Number(salary) < 0 || salary === "") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  const onChangeAssesmentYear = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let year = event.target.value;
    fetchTaxes(`${API_ENDPOINT}tax-year/${year}`);
  };

  const handleTaxCalculation = () => {
    let salary = salaryRef.current.valueAsNumber;
    let year = assesmentYearRef.current
      ? assesmentYearRef.current.value
      : DEFAULT_ASSESMENT_YEAR;

    {
      import("../../utils/calculateTaxWithCache").then((module) => {
        let { totalTax, taxBreakup, effectiveRate } = module.calculateTax(
          salary,
          taxData.taxBracketData,
          year
        );
        setTaxData({
          showTaxBreakup: true,
          taxCalculationData: { totalTax, taxBreakup, effectiveRate },
        });
      });
    }
  };

  useEffect(() => {
    if (taxData.error) {
      setDisabledButton(true);
    }
  }, [taxData]);

  useEffect(() => {
    fetchTaxes(API_ENDPOINT);
  }, []);

  return (
    <>
      <div className="container" data-testid="tax-calculator">
        <form onSubmit={handleTaxCalculation}>
          <h1 className="heading">Tax Calculator</h1>
          <Error
            show={taxData.error}
            errorMessage="We are down right now please comeback later"
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

          <TaxBreakup
            totalTax={taxData.taxCalculationData.totalTax}
            taxBreakup={taxData.taxCalculationData.taxBreakup}
            effectiveRate={taxData.taxCalculationData.effectiveRate}
            showTaxBreakup={taxData.showTaxBreakup}
          />
        </form>
      </div>
    </>
  );
};
export default TaxCalculator;

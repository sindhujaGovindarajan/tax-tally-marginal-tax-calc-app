import { TAX_ASSESMENT_YEAR, DEFAULT_ASSESMENT_YEAR } from "../../../constants";
import { Input } from "../../form/input/Input";
import { CustomSelect } from "../../form/customSelect/CustomSelect";
import { TaxInputProps } from "../types";

const TaxInputForm = ({
  assesmentYearRef,
  onChangeAssesmentYear,
  salaryRef,
  handleSalaryChange,
}: TaxInputProps) => {
  return (
    <fieldset>
      <legend className="legend bold">Find Your Marginal Tax Rate</legend>

      <CustomSelect
        refs={assesmentYearRef}
        label="Tax year"
        options={TAX_ASSESMENT_YEAR}
        defaultValue={DEFAULT_ASSESMENT_YEAR}
        onChangeYear={onChangeAssesmentYear}
      />
      <Input
        label="Employment income ($)"
        type="number"
        refs={salaryRef}
        onChange={handleSalaryChange}
        autoFocus={true}
        placeholder="$0"
      />
    </fieldset>
  );
};

export default TaxInputForm;

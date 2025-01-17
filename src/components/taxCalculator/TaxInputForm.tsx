import { TAX_ASSESMENT_YEAR, DEFAULT_ASSESMENT_YEAR } from "../../constants";
import { Input } from "../../components/forms/input/Input";
import { CustomSelect } from "../forms/customSelect/CustomSelect";
import { TaxInputProps } from "./types";

const TaxInputForm = ({
  assesmentYearRef,
  onChangeAssesmentYear,
  salaryRef,
  handleSalaryChange,
}: TaxInputProps) => {
  return (
    <fieldset>
      <legend className="legend">Enter Your Details</legend>

      <CustomSelect
        refs={assesmentYearRef}
        label="Select assesment year"
        options={TAX_ASSESMENT_YEAR}
        defaultValue={DEFAULT_ASSESMENT_YEAR}
        onChangeYear={onChangeAssesmentYear}
      />
      <Input
        label="Please enter your salary ($)"
        type="number"
        refs={salaryRef}
        onChange={handleSalaryChange}
        autoFocus={true}
        placeholder="Enter salary"
      />
    </fieldset>
  );
};

export default TaxInputForm;

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CustomSelect } from "./CustomSelect";

const options = [
  { value: "2021", label: "2021" },
  { value: "2000", label: "2000" },
];

describe("Select component", () => {
  it("should render select with options", () => {
    const { getByText } = render(
      <CustomSelect
        label="Select Year"
        options={options}
        onChangeYear={() => {}}
      />
    );

    expect(getByText("Select Year")).toBeInTheDocument();
    options.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });

  it("calls onChangeYear with correct value when an option is selected", () => {
    const onChangeYear = jest.fn();
    const { getByTestId } = render(
      <CustomSelect
        label="Select Year"
        options={options}
        onChangeYear={onChangeYear}
      />
    );
    const select = getByTestId("select");
    fireEvent.change(select, { target: { value: "2000" } });
    expect(onChangeYear).toHaveBeenCalled();
  });
});

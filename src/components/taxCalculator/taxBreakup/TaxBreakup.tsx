import { Label } from "../../ui/label/Label";
import { TaxBreakupProps, TaxDetails } from "../types";
import React, { memo } from "react";
import "./TaxBreakup.css";
import { formatter } from "../../../utils/formatter";

export const TaxBreakup = memo(
  ({
    totalTax,
    effectiveRate,
    taxBreakup,
    showTaxBreakup,
  }: TaxBreakupProps) => {
    const BreakupItemDetail: React.FC<{
      label: string;
      content: React.ReactNode;
    }> = ({ label, content }) => (
      <span>
        {label}:&nbsp;&nbsp;
        {content}
      </span>
    );
    return (
      <>
        {showTaxBreakup ? (
          <fieldset>
            <legend className="legend bold">Tax Breakup</legend>

            {/* Total Tax */}
            <div className="border-bottom">
              <Label>Total tax: </Label>
              <Label className="bold float-right">
                {formatter.format(totalTax)}
              </Label>
            </div>

            {/* Effective Rate */}
            <div className="border-bottom">
              <Label>Effective rate: </Label>
              <Label className="bold float-right">
                {effectiveRate !== 0
                  ? Number(effectiveRate * 100).toFixed(2)
                  : effectiveRate}{" "}
                %
              </Label>
            </div>

            {/* Tax Breakup as per Bracket */}
            <div className="border-bottom breakup-items-container">
              {taxBreakup?.map((item: TaxDetails, index: number) => {
                return (
                  <div key={index}>
                    <BreakupItemDetail
                      label="Charged"
                      content={
                        <span className="bold">
                          {formatter.format(item?.taxRate)}&nbsp;
                        </span>
                      }
                    />
                    <BreakupItemDetail
                      label="Max"
                      content={
                        <span className="bold">
                          {item.max
                            ? formatter.format(item.max)
                            : `> ${formatter.format(
                                taxBreakup[index - 1].max
                              )}`}
                        </span>
                      }
                    />
                    <BreakupItemDetail
                      label="Rate"
                      content={<span className="bold">{item.rate}</span>}
                    />
                  </div>
                );
              })}
            </div>
          </fieldset>
        ) : null}
      </>
    );
  }
);

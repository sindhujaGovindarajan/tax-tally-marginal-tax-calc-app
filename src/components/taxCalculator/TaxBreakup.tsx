import { Label } from "../../components/ui/label/Label";
import { TaxBreakupProps, TaxDetails } from "./types";
import React, { memo } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",
});

export const TaxBreakup = memo(
  ({
    totalTax,
    effectiveRate,
    taxBreakup,
    showTaxBreakup,
  }: TaxBreakupProps) => {
    return (
      <>
        {showTaxBreakup ? (
          <fieldset>
            <legend className="legend">Tax Breakup</legend>
            <div className="border-bottom">
              <Label>Total tax</Label>
              <Label className="label-bold">{formatter.format(totalTax)}</Label>
            </div>
            <div className="border-bottom">
              <Label>Effective rate</Label>
              <Label className="label-bold">
                {Number(effectiveRate * 100).toFixed(2)} %
              </Label>
            </div>
            <div className="border-bottom">
              {taxBreakup?.map(
                (item: TaxDetails, index: React.Key | null | undefined) => {
                  return (
                    <p key={index}>
                      Charged:&nbsp;
                      <span className="label-bold">
                        {formatter.format(item?.taxRate)}&nbsp;
                      </span>
                      Max:&nbsp;&nbsp;
                      <span className="label-bold">
                        {item.max ? formatter.format(item.max) : "Infinity"}
                        &nbsp;
                      </span>
                      Rate:&nbsp;&nbsp;
                      <span className="label-bold">{item.rate}</span>
                    </p>
                  );
                }
              )}
            </div>
          </fieldset>
        ) : null}
      </>
    );
  }
);

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BonusCalculationData } from "@/components/sections/bonus/Dynamics";
import { formatCurrency } from "@/utils/bonusUtils";
import { Download, X } from "lucide-react";

interface BonusCalculationPopupProps {
  data: BonusCalculationData;
  results: {
    taxRate: number;
    totalEGAR: number;
    grossAlreadyPaid: number;
    grossToBePaid: number;
    aggregateAlreadyPaidTax: number;
    aggregateToBePaidTax: number;
    totalMonthlyTax: number;
    bonusTax: number;
    effectiveTaxRate: number;
  };
  onClose: () => void;
  onDownload: () => void;
}

const BonusCalculationPopup = ({
  data,
  results,
  onClose,
  onDownload,
}: BonusCalculationPopupProps) => {
  // Calculate tax relief based on tax rate
  const getTaxRelief = (taxRate: number) => {
    switch (taxRate) {
      case 6:
        return 108000;
      case 18:
        return 444000;
      case 24:
        return 642000;
      case 30:
        return 870000;
      case 36:
        return 1128000;
      default:
        return 0;
    }
  };

  const taxRelief = getTaxRelief(results.taxRate);
  const grossTax = results.totalEGAR * (results.taxRate / 100);
  const totalDeductions =
    taxRelief + results.totalMonthlyTax + data.previouslyPaidBonusTax;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 m-0">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-gradient-to-r from-[#080A3C] to-[#1e3a8a] text-white">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">
              How Your Tax Was Calculated
            </CardTitle>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Step 1: Adding up total yearly income */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Step 1: Adding up your total yearly income
            </h3>

            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="grid grid-cols-3 gap-4 items-center text-gray-800">
                {/* Row 1 */}
                <p>Your past monthly salary:</p>
                <p>
                  {formatCurrency(data.alreadyPaidSalary)} ×{" "}
                  {data.monthsAlreadyPaid} months
                </p>
                <p>= {formatCurrency(results.grossAlreadyPaid)}</p>
                {/* Row 2 */}
                <p>Your future monthly salary:</p>
                <p>
                  {formatCurrency(data.toBePaidSalary)} × {data.monthsToBePaid}{" "}
                  months
                </p>
                <p>= {formatCurrency(results.grossToBePaid)}</p>
                {/* Row 3 */}
                <p>Your lump-sum payment:</p>
                <p></p> {/* Empty middle column since no calculation */}
                <p>= {formatCurrency(data.bonusAmount)}</p>
              </div>

              <div className="border-t pt-3 text-lg font-semibold text-gray-800">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <p>Your total yearly income:</p>
                  <p>
                    {formatCurrency(results.grossAlreadyPaid)} +{" "}
                    {formatCurrency(results.grossToBePaid)} +{" "}
                    {formatCurrency(data.bonusAmount)}
                  </p>
                  <p>= {formatCurrency(results.totalEGAR)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Finding tax rate */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Step 2: Finding your tax rate
            </h3>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-3">
                Based on your total income of{" "}
                {formatCurrency(results.totalEGAR)}, your tax rate is{" "}
                <span className="font-semibold">{results.taxRate}%</span>
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• EGAR ≤ LKR 1,800,000 → Tax Rate: 0%</p>
                <p>• LKR 1,800,001 ≤ EGAR ≤ LKR 2,800,000 → Tax Rate: 6%</p>
                <p>• LKR 2,800,001 ≤ EGAR &lt; LKR 3,300,000 → Tax Rate: 18%</p>
                <p>• LKR 3,300,001 ≤ EGAR &lt; LKR 3,800,000 → Tax Rate: 24%</p>
                <p>• LKR 3,800,001 ≤ EGAR &lt; LKR 4,300,000 → Tax Rate: 30%</p>
                <p>• EGAR ≥ LKR 4,300,000 → Tax Rate: 36%</p>
              </div>
            </div>
          </div>

          {/* Step 3: Calculating bonus tax */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Step 3: Calculating your bonus tax
            </h3>

            <div
              className="p-4 rounded-lg space-y-4 text-gray-800"
              style={{ backgroundColor: "#FFF3E8" }} // light orange bg (approx of green-50)
            >
              {/* 1. Calculate gross tax */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <p className="font-medium mb-2 col-span-1">
                  1. Calculate gross tax:
                </p>
                <p className="col-span-1 ml-4">
                  {formatCurrency(results.totalEGAR)} × {results.taxRate}%
                </p>
                <p className="col-span-1">= {formatCurrency(grossTax)}</p>
              </div>

              {/* 2. Calculate deductions */}
              <div>
                <p className="font-medium mb-2">2. Calculate deductions:</p>
                <div className="ml-4 space-y-1">
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <p>• Tax relief:</p>
                    <p></p>
                    <p>= {formatCurrency(taxRelief)}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center">
                    <p>• Monthly tax already paid:</p>
                    <p>
                      {formatCurrency(data.apitAlreadyPaid)} ×{" "}
                      {data.monthsAlreadyPaid}
                    </p>
                    <p>= {formatCurrency(results.aggregateAlreadyPaidTax)}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center">
                    <p>• Monthly tax to be paid:</p>
                    <p>
                      {formatCurrency(data.apitToBePaid)} ×{" "}
                      {data.monthsToBePaid}
                    </p>
                    <p>= {formatCurrency(results.aggregateToBePaidTax)}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center">
                    <p>• Previous bonus tax paid:</p>
                    <p></p>
                    <p>= {formatCurrency(data.previouslyPaidBonusTax)}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center font-medium">
                    <p>• Total deductions:</p>
                    <p></p>
                    <p>= {formatCurrency(totalDeductions)}</p>
                  </div>
                </div>
              </div>

              {/* 3. Final bonus tax */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <p className="font-medium mb-2 col-span-1">
                  3. Final bonus tax:
                </p>
                <p className="col-span-1 ml-4">
                  {formatCurrency(grossTax)} - {formatCurrency(totalDeductions)}
                </p>
                <p className="col-span-1">
                  = {formatCurrency(results.bonusTax)}
                </p>
              </div>

              {/* Result summary */}
              <div
                className="border-t pt-3 text-lg font-bold"
                style={{ color: "#FF612F" }}
              >
                <p>
                  Your bonus tax amount is {formatCurrency(results.bonusTax)}
                </p>
                <p className="text-sm font-normal text-gray-600 mt-1">
                  Effective tax rate on bonus: {results.effectiveTaxRate}%
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-4 border-t">
            <Button onClick={onClose} variant="outline" className="px-6 py-2">
              Close
            </Button>
            <Button
              onClick={onDownload}
              className="bg-[#080A3C] hover:bg-[#080A3C/90] text-white px-6 py-2"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusCalculationPopup;

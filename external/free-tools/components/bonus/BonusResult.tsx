"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BonusCalculationData } from "@/components/sections/bonus/Dynamics";
import {
  calculateBonusTax,
  formatCurrency,
  getMonthRange,
} from "@/utils/bonusUtils";
import { Calculator, Download, RotateCcw } from "lucide-react";
import { useState } from "react";
import BonusCalculationPopup from "./BonusCalculationPopup";
import BonusInfoSection from "./BonusInfoSection";

interface BonusResultProps {
  data: BonusCalculationData;
  onBack: () => void;
  onReset: () => void;
}

const BonusResult = ({ data, onBack, onReset }: BonusResultProps) => {
  const [showCalculationPopup, setShowCalculationPopup] = useState(false);

  const results = calculateBonusTax(
    data.alreadyPaidSalary,
    data.monthsAlreadyPaid,
    data.apitAlreadyPaid,
    data.toBePaidSalary,
    data.monthsToBePaid,
    data.apitToBePaid,
    data.bonusAmount,
    data.previouslyPaidBonusTax
  );

  const isSameSalary = data.alreadyPaidSalary === data.toBePaidSalary;

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onBack();
  };

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onReset();
  };

  const downloadCalculation = () => {
    // Calculate values for the detailed breakdown
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

    const content = `HOW YOUR TAX WAS CALCULATED
Generated on: ${new Date().toLocaleDateString()}
Current Tax Year: April 2025 - March 2026

====================================================================
Step 1: Adding up your total yearly income
====================================================================

Your past monthly salary:
${formatCurrency(data.alreadyPaidSalary)} × ${
      data.monthsAlreadyPaid
    } months = ${formatCurrency(results.grossAlreadyPaid)}

Your future monthly salary:
${formatCurrency(data.toBePaidSalary)} × ${
      data.monthsToBePaid
    } months = ${formatCurrency(results.grossToBePaid)}

Your lump-sum payment:
= ${formatCurrency(data.bonusAmount)}

Your total yearly income:
${formatCurrency(results.grossAlreadyPaid)} + ${formatCurrency(
      results.grossToBePaid
    )} + ${formatCurrency(data.bonusAmount)} = ${formatCurrency(
      results.totalEGAR
    )}

====================================================================
Step 2: Finding your tax rate
====================================================================

Based on your total income of ${formatCurrency(
      results.totalEGAR
    )}, your tax rate is ${results.taxRate}%

Tax Rate Brackets:
• EGAR ≤ LKR 1,800,000 → Tax Rate: 0%
• LKR 1,800,001 ≤ EGAR ≤ LKR 2,800,000 → Tax Rate: 6%
• LKR 2,800,001 ≤ EGAR < LKR 3,300,000 → Tax Rate: 18%
• LKR 3,300,001 ≤ EGAR < LKR 3,800,000 → Tax Rate: 24%
• LKR 3,800,001 ≤ EGAR < LKR 4,300,000 → Tax Rate: 30%
• EGAR ≥ LKR 4,300,000 → Tax Rate: 36%

====================================================================
Step 3: Calculating your bonus tax
====================================================================

1. Calculate gross tax:
${formatCurrency(results.totalEGAR)} × ${results.taxRate}% = ${formatCurrency(
      grossTax
    )}

2. Calculate deductions:
• Tax relief: = ${formatCurrency(taxRelief)}
• Monthly tax already paid: ${formatCurrency(data.apitAlreadyPaid)} × ${
      data.monthsAlreadyPaid
    } = ${formatCurrency(results.aggregateAlreadyPaidTax)}
• Monthly tax to be paid: ${formatCurrency(data.apitToBePaid)} × ${
      data.monthsToBePaid
    } = ${formatCurrency(results.aggregateToBePaidTax)}
• Previous bonus tax paid: = ${formatCurrency(data.previouslyPaidBonusTax)}
• Total deductions: = ${formatCurrency(totalDeductions)}

3. Final bonus tax:
${formatCurrency(grossTax)} - ${formatCurrency(
      totalDeductions
    )} = ${formatCurrency(results.bonusTax)}

====================================================================
RESULT
====================================================================

Your bonus tax amount is ${formatCurrency(results.bonusTax)}
Effective tax rate on bonus: ${results.effectiveTaxRate}%

This calculation is based on Sri Lanka Inland Revenue Department regulations for 2025-2026.
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bonus-tax-calculation-${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-[#080A3C] to-[#1e3a8a] text-white rounded-t-lg">
          <CardTitle className="text-2xl font-semibold">
            Bonus Tax Calculation Results
          </CardTitle>
          <p className="text-blue-100 mt-2">
            Your bonus APIT tax calculation for the current tax year
          </p>
        </CardHeader>

        <CardContent className="p-8 space-y-6">
          {/* Monthly Income Section */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 text-center md:text-left">
              Monthly Income & Tax
            </h3>
            {isSameSalary ? (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                      Monthly Salary
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                      {formatCurrency(data.alreadyPaidSalary)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                      Monthly APIT
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                      {formatCurrency(data.apitAlreadyPaid)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-600 mb-1 text-center md:text-left">
                    {getMonthRange(1, data.monthsAlreadyPaid)}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                        Monthly Salary
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                        {formatCurrency(data.alreadyPaidSalary)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                        Monthly APIT
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                        {formatCurrency(data.apitAlreadyPaid)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-600 mb-1 text-center md:text-left">
                    {getMonthRange(
                      data.monthsAlreadyPaid + 1,
                      data.monthsToBePaid
                    )}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                        Monthly Salary
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                        {formatCurrency(data.toBePaidSalary)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                        Monthly APIT
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                        {formatCurrency(data.apitToBePaid)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Annual Summary */}
          <div className="bg-[#080A3C]/5 p-4 md:p-6 rounded-lg border border-[#080A3C]/20 mt-6">
            <h3 className="text-base md:text-lg font-semibold text-[#080A3C]/90 mb-4 text-center md:text-left">
              Annual Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs md:text-sm text-[#080A3C]/70 text-center md:text-left">
                  Annual Income (EGAR)
                </p>
                <p className="text-xl md:text-2xl font-bold text-[#080A3C] text-center md:text-left">
                  {formatCurrency(results.totalEGAR)}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#080A3C]/70 text-center md:text-left">
                  Annual Tax Rate
                </p>
                <p className="text-xl md:text-2xl font-bold text-[#080A3C] text-center md:text-left">
                  {results.taxRate}%
                </p>
              </div>
            </div>
          </div>

          {/* Main Result - Bonus Tax */}
          <div className="bg-[#FF612F]/5 p-4 md:p-6 rounded-lg border-2 border-[#FF612F]/20 mt-6">
            <h3 className="text-lg md:text-xl font-semibold text-[#FF612F]/90 mb-4 text-center md:text-left">
              Tax on Bonus/Lump-Sum Payment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
                <p className="text-xs md:text-sm text-[#FF612F]/70 mb-1">
                  Tax Amount
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#FF612F]">
                  {formatCurrency(results.bonusTax)}
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs md:text-sm text-[#FF612F]/70 mb-1">
                  Effective Tax Rate
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#FF612F]">
                  {results.effectiveTaxRate}%
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between flex-wrap gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                onClick={handleBack}
                variant="outline"
                className="px-6 py-2 w-full sm:w-auto"
              >
                Previous Step
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="px-6 py-2 w-full sm:w-auto"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Start Over
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                onClick={() => setShowCalculationPopup(true)}
                variant="outline"
                className="px-6 py-2 w-full sm:w-auto"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Show Calculation
              </Button>
              <Button
                onClick={downloadCalculation}
                className="bg-[#080A3C] hover:bg-[#080A3C]/90 text-white px-6 py-2 w-full sm:w-auto"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {showCalculationPopup && (
        <BonusCalculationPopup
          data={data}
          results={results}
          onClose={() => setShowCalculationPopup(false)}
          onDownload={downloadCalculation}
        />
      )}

      <BonusInfoSection />
    </div>
  );
};

export default BonusResult;

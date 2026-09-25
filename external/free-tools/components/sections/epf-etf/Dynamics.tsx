"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { HelpCircle, RotateCcw } from "lucide-react";

const Calculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");

  const handleIncomeChange = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";
    setMonthlyIncome(formattedValue);
  };

  const handleReset = () => {
    setMonthlyIncome("");
  };

  // Calculate values
  const income = parseFloat(monthlyIncome.replace(/,/g, "")) || 0;
  const employeeEpf = income * 0.08; // 8%
  const employerEpf = income * 0.12; // 12%
  const employerEtf = income * 0.03; // 3%
  const totalEmployerContribution = employerEpf + employerEtf; // 15%
  const totalEpf = employeeEpf + employerEpf; // 20%
  const totalEpfEtf = totalEpf + employerEtf; // 23%
  const netSalary = income - employeeEpf; // 92%

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const hasValue = monthlyIncome.trim() !== "";

  return (
    <div>
      {/* Input Section */}
      <Card className="max-w-4xl mx-auto mb-6 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center text-[#080A3C]">
            EPF/ETF Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="monthlyIncome"
                className="text-sm font-medium text-gray-700"
              >
                Monthly Income (LKR)
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Enter your monthly gross salary to calculate <br />
                      EPF, ETF contributions and net salary
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="monthlyIncome"
              type="text"
              value={monthlyIncome}
              onChange={(e) => handleIncomeChange(e.target.value)}
              className="h-12 text-lg"
              placeholder="Enter Your Monthly Income"
            />
          </div>

          {hasValue && (
            <div className="flex justify-center">
              <Button
                onClick={handleReset}
                variant="outline"
                className="px-8 py-3 rounded-lg font-medium"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Calculator
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      {/* Results Section - Only show when there's a value */}
      {hasValue && (
        <div className="space-y-6 mb-6">
          {/* Calculation Results */}
          <Card className="shadow-sm rounded-xl border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-[#080A3C] text-center font-semibold tracking-wide">
                Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Monthly Income */}
                <div className="flex items-center bg-gradient-to-tr from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                  <div className="p-2.5 bg-[#FF612F] rounded-full text-white mr-5">
                    <CreditCard size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-700 uppercase tracking-wide">
                      Monthly Income
                    </p>
                    <p className="text-2xl font-extrabold text-[#080A3C]">
                      Rs. {formatCurrency(income)}
                    </p>
                  </div>
                </div>

                {/* Net Salary */}
                <div className="flex items-center bg-gradient-to-tr from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                  <div className="p-2.5 bg-[#FF612F] rounded-full text-white mr-5">
                    <CreditCard size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-700 uppercase tracking-wide">
                      Net Salary
                    </p>
                    <p className="text-2xl font-extrabold text-[#080A3C]">
                      Rs. {formatCurrency(netSalary)}
                    </p>
                  </div>
                </div>

                {/* Employee EPF (8%) */}
                <div className="flex items-center bg-gradient-to-tr from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                  <div className="p-2.5 bg-[#FF612F] rounded-full text-white mr-5">
                    <CreditCard size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-700 uppercase tracking-wide">
                      Employee EPF (8%)
                    </p>
                    <p className="text-2xl font-extrabold text-[#080A3C]">
                      Rs. {formatCurrency(employeeEpf)}
                    </p>
                  </div>
                </div>

                {/* Employer Contribution (15%) */}
                <div className="flex items-center bg-gradient-to-tr from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                  <div className="p-2.5 bg-[#FF612F] rounded-full text-white mr-5">
                    <CreditCard size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-700 uppercase tracking-wide">
                      Employer Contribution (15%)
                    </p>
                    <p className="text-2xl font-extrabold text-[#080A3C]">
                      Rs. {formatCurrency(totalEmployerContribution)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Detailed Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#080A3C] text-center font-semibold tracking-wide">
                Detailed Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#080A3C] mb-3 leading-tight">
                    Employee Contribution:
                  </h3>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-gray-700 text-base leading-tight">
                      EPF (8%):
                    </span>
                    <span className="font-semibold text-[#080A3C] text-base leading-tight">
                      Rs. {formatCurrency(employeeEpf)}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#080A3C] mb-3 leading-tight">
                    Employer Contribution:
                  </h3>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-gray-700 text-base leading-tight">
                        EPF (12%):
                      </span>
                      <span className="font-semibold text-[#080A3C] text-base leading-tight">
                        Rs. {formatCurrency(employerEpf)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-gray-700 text-base leading-tight">
                        ETF (3%):
                      </span>
                      <span className="font-semibold text-[#080A3C] text-base leading-tight">
                        Rs. {formatCurrency(employerEtf)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-t border-gray-200 pt-2">
                      <span className="font-medium text-[#080A3C] text-base leading-tight">
                        Total Employer Contribution (15%):
                      </span>
                      <span className="font-bold text-[#080A3C] text-base leading-tight">
                        Rs. {formatCurrency(totalEmployerContribution)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#080A3C] mb-3 leading-tight">
                    Summary:
                  </h3>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center py-1.5">
                      <span className="font-medium text-[#080A3C] text-base leading-tight">
                        Total EPFs (8% + 12% = 20%):
                      </span>
                      <span className="font-bold text-[#080A3C] text-base leading-tight">
                        Rs. {formatCurrency(totalEpf)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="font-medium text-[#080A3C] text-base leading-tight">
                        Total EPF+ETF (23%):
                      </span>
                      <span className="font-bold text-[#080A3C] text-base leading-tight">
                        Rs. {formatCurrency(totalEpfEtf)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="font-medium text-[#080A3C] text-base leading-tight">
                        Net Salary (92%):
                      </span>
                      <span className="font-bold text-[#080A3C] text-base leading-tight">
                        Rs. {formatCurrency(netSalary)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Calculator;

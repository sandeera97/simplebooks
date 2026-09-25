"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { HelpCircle, RotateCcw } from "lucide-react";
import { trackEvent } from "@/utils/trackEvent";

const Calculator = () => {
  const [completedYears, setCompletedYears] = useState<string>("");
  const [monthlySalary, setMonthlySalary] = useState<string>("");
  const [yearsError, setYearsError] = useState<string>("");
  const [calculating, setCalculating] = useState<boolean>(false);

  const HAS_TRACKED_KEY = "gratuity_tracked";

  const getTracked = () => {
    try {
      return (
        typeof window !== "undefined" &&
        sessionStorage.getItem(HAS_TRACKED_KEY) === "1"
      );
    } catch {
      return false;
    }
  };

  const setTracked = () => {
    try {
      if (typeof window !== "undefined")
        sessionStorage.setItem(HAS_TRACKED_KEY, "1");
    } catch {}
  };

  // useEffect(() => {
  //   if (!getTracked() && !calculating) {
  //     setTracked();
  //     trackEvent("gratuity-calculations", {
  //       tool: "free-tools",
  //       calculator: "gratuity-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  const handleYearsChange = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setCompletedYears(sanitizedValue);

    // Validate years
    const years = parseInt(sanitizedValue) || 0;
    if (sanitizedValue && years < 5) {
      setYearsError("Your completed years must be at least 5");
    } else {
      setYearsError("");
    }
  };

  const handleSalaryChange = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";
    setMonthlySalary(formattedValue);
  };

  const handleReset = () => {
    setCompletedYears("");
    setMonthlySalary("");
    setYearsError("");
  };

  // Calculate gratuity
  const years = parseInt(completedYears) || 0;
  const salary = parseFloat(monthlySalary.replace(/,/g, "")) || 0;
  const gratuityAmount = years >= 5 && salary > 0 ? (salary / 2) * years : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const hasValidValues =
    completedYears.trim() !== "" && monthlySalary.trim() !== "" && years >= 5;
  const shouldShowResult = hasValidValues && gratuityAmount > 0;

  return (
    <div>
      {/* Input Section */}
      <Card className="max-w-4xl mx-auto mb-6 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center text-[#080A3C]">
            Gratuity Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Completed Years */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="completedYears"
                  className="text-sm font-medium text-gray-700"
                >
                  Completed Years of Service
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Only completed years are considered for <br />
                        gratuity calculation in Sri Lanka.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="completedYears"
                type="text"
                value={completedYears}
                onChange={(e) => {
                  if (!getTracked() && !calculating) {
                    setTracked();
                    trackEvent("gratuity-calculations", {
                      tool: "free-tools",
                      calculator: "gratuity-calculator",
                    });
                  }
                  setCalculating(true);
                  handleYearsChange(e.target.value);
                }}
                className={`h-12 text-lg ${yearsError ? "border-red-500" : ""}`}
                placeholder="Enter completed years"
              />
              {yearsError && (
                <p className="text-sm text-red-600">{yearsError}</p>
              )}
            </div>

            {/* Monthly Salary */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="monthlySalary"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Drawn Monthly Salary (LKR)
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Enter the last drawn monthly salary <br />
                        before termination of service
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="monthlySalary"
                type="text"
                value={monthlySalary}
                onChange={(e) => {
                  if (!getTracked() && !calculating) {
                    setTracked();
                    trackEvent("gratuity-calculations", {
                      tool: "free-tools",
                      calculator: "gratuity-calculator",
                    });
                  }
                  setCalculating(true);
                  handleSalaryChange(e.target.value);
                }}
                className="h-12 text-lg"
                placeholder="Enter monthly salary"
              />
            </div>
          </div>

          {hasValidValues && (
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

      {/* Results Section */}
      {shouldShowResult && (
        <Card className="shadow-sm rounded-xl border border-gray-200 mb-6">
          <CardContent>
            {/* <div className="flex items-center justify-center bg-gradient-to-tr from-white to-gray-50 p-8 rounded-lg shadow-sm border border-gray-100"> */}
            <div className="text-center">
              <p className="text-lg font-bold text-gray-700 uppercase tracking-wide mt-4 mb-2">
                Gratuity Amount
              </p>
              <p className="text-3xl font-extrabold text-[#080A3C] mb-2">
                Rs. {formatCurrency(gratuityAmount)}
              </p>
              <p className="text-sm text-gray-600">
                Based on {years} completed years of service
              </p>
              {/* </div> */}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Calculator;

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { BonusCalculationData } from "@/components/sections/bonus/Dynamics";
import { getMonthRange } from "@/utils/bonusUtils";
import BonusInfoSection from "./BonusInfoSection";

interface BonusStep2Props {
  data: BonusCalculationData;
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: Partial<BonusCalculationData>) => void;
}

const BonusStep2 = ({ data, onNext, onBack, onUpdate }: BonusStep2Props) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Determine if validation needed (if monthsAlreadyPaid < 12)
  const needsValidation = (data.monthsAlreadyPaid ?? 0) < 12;

  // Format values for display
  const formattedSalary = data.toBePaidSalary
    ? data.toBePaidSalary.toLocaleString()
    : "";

  const monthsToPay = data.monthsToBePaid ? data.monthsToBePaid.toString() : "";

  // Validation function
  const validateField = (field: string, value: string | number) => {
    if (!needsValidation) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
      return;
    }

    let error = "";

    if (field === "monthlySalary") {
      const strVal = typeof value === "string" ? value : value.toString();
      const salaryValue = parseFloat(strVal.replace(/,/g, ""));
      if (!strVal || isNaN(salaryValue) || salaryValue <= 0) {
        error = "Please enter a valid monthly salary";
      }
    }

    if (field === "monthsToPay") {
      const monthsValue =
        typeof value === "number" ? value : parseInt(value as string);
      const totalMonths = (data.monthsAlreadyPaid ?? 0) + monthsValue;
      if (
        monthsValue < 0 ||
        monthsValue === undefined ||
        isNaN(monthsValue) ||
        totalMonths !== 12
      ) {
        error = "Months paid + months to pay must exactly equal 12";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Handlers: update parent on input change
  const handleSalaryChange = (value: string) => {
    setTouched((prev) => ({ ...prev, monthlySalary: true }));
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";
    validateField("monthlySalary", formattedValue);
    onUpdate({
      toBePaidSalary: sanitizedValue ? parseInt(sanitizedValue) : 0,
    });
  };

  const handleMonthsChange = (value: string) => {
    setTouched((prev) => ({ ...prev, monthsToPay: true }));
    const intValue = parseInt(value);
    const monthsVal = isNaN(intValue) ? 0 : intValue;
    validateField("monthsToPay", monthsVal);
    onUpdate({
      monthsToBePaid: monthsVal,
    });
  };

  // Form validation on Next
  const validateForm = () => {
    if (!needsValidation) {
      setErrors({});
      return true;
    }

    const newErrors: { [key: string]: string } = {};

    if (!data.toBePaidSalary || data.toBePaidSalary <= 0) {
      newErrors.monthlySalary = "Please enter a valid monthly salary";
    }

    const totalMonths =
      (data.monthsAlreadyPaid ?? 0) + (data.monthsToBePaid ?? 0);
    if (
      data.monthsToBePaid === undefined ||
      isNaN(data.monthsToBePaid) ||
      data.monthsToBePaid < 0 ||
      totalMonths !== 12
    ) {
      newErrors.monthsToPay =
        "Sum of months already paid and months to pay must equal 12";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setTouched({ monthlySalary: true, monthsToPay: true });

    if (!needsValidation) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onNext();
      return;
    }

    if (validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onNext();
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onBack();
  };

  const getToBeMonthRange = () => {
    const startMonth = (data.monthsAlreadyPaid ?? 0) + 1;
    const months = data.monthsToBePaid ?? 0;
    if (months === 0) return "No months remaining";
    return getMonthRange(startMonth, months);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-center text-[#080A3C]">
          Step 2: Monthly Salary To Be Paid
        </h3>
        <p className="text-center text-muted-foreground">
          Enter details about your monthly salary to be paid for the remaining
          months in the current tax year
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="monthlySalary"
                className="text-sm font-medium text-gray-700"
              >
                Monthly Salary To Be Received (LKR)
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Your regular monthly salary that you expect <br /> to
                      receive for the rest of this tax year
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="monthlySalary"
              type="text"
              placeholder="Enter Your Monthly Salary"
              value={formattedSalary}
              onChange={(e) => handleSalaryChange(e.target.value)}
              className={`h-12 text-lg ${
                touched.monthlySalary && errors.monthlySalary
                  ? "border-red-500"
                  : ""
              }`}
              disabled={!needsValidation}
            />
            {touched.monthlySalary && errors.monthlySalary && (
              <p className="text-red-500 text-sm">{errors.monthlySalary}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="monthsToPay"
                className="text-sm font-medium text-gray-700"
              >
                Number of Months To Be Paid
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      How many more months you expect to receive <br />
                      this salary in the current tax year
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <Input
                id="monthsToPay"
                type="number"
                min={0}
                max={12 - (data.monthsAlreadyPaid ?? 0)}
                value={monthsToPay}
                onChange={(e) => handleMonthsChange(e.target.value)}
                className={`h-12 text-lg ${
                  touched.monthsToPay && errors.monthsToPay
                    ? "border-red-500"
                    : ""
                }`}
                disabled={!needsValidation}
              />
              {monthsToPay !== undefined && Number(monthsToPay) >= 0 && (
                <div className="mt-1 text-sm text-gray-500">
                  ({getToBeMonthRange()})
                </div>
              )}
            </div>
            {touched.monthsToPay && errors.monthsToPay && (
              <p className="text-red-500 text-sm">{errors.monthsToPay}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={handleBack}
            variant="outline"
            className="px-6 py-3 rounded-lg font-medium w-full sm:w-auto"
          >
            Previous Step
          </Button>

          <Button
            onClick={handleNext}
            className="bg-[#080A3C] hover:bg-[#080A3C]/90 text-white px-8 py-3 rounded-lg font-medium w-full sm:w-auto"
          >
            Next Step
          </Button>
        </div>
      </div>

      <BonusInfoSection />
    </div>
  );
};

export default BonusStep2;

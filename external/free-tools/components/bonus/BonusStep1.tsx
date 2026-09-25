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
import { trackEvent } from "@/utils/trackEvent";

interface BonusStep1Props {
  data: BonusCalculationData;
  onNext: () => void;
  onUpdate: (data: Partial<BonusCalculationData>) => void;
}

const BonusStep1 = ({ data, onNext, onUpdate }: BonusStep1Props) => {
  // Keep errors and touched states locally only
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [calculating, setCalculating] = useState(false);

  const HAS_TRACKED_KEY = "btc_tracked";

  function getTracked() {
    try {
      return (
        typeof window !== "undefined" &&
        sessionStorage.getItem(HAS_TRACKED_KEY) === "1"
      );
    } catch {
      return false;
    }
  }
  function setTracked() {
    try {
      if (typeof window !== "undefined")
        sessionStorage.setItem(HAS_TRACKED_KEY, "1");
    } catch {}
  }

  // useEffect(() => {
  //   if (!getTracked() && !calculating) {
  //     setTracked();
  //     trackEvent("bonuse-tax-calculations", {
  //       tool: "free-tools",
  //       calculator: "bonuse-tax-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  // Format values for display
  const formattedSalary = data.alreadyPaidSalary
    ? data.alreadyPaidSalary.toLocaleString()
    : "";

  const monthsPaid = data.monthsAlreadyPaid
    ? data.monthsAlreadyPaid.toString()
    : "";

  // Validation helper
  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "monthlySalary") {
      const salaryValue = parseFloat(value.replace(/,/g, ""));
      if (!value || isNaN(salaryValue) || salaryValue <= 0) {
        error = "Please enter a valid monthly salary";
      }
    }

    if (field === "monthsPaid") {
      const monthsValue = parseInt(value);
      if (!value || isNaN(monthsValue) || monthsValue < 1 || monthsValue > 12) {
        error = "Please enter months between 1 and 12";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // On input change handlers update parent directly
  const handleSalaryChange = (value: string) => {
    setTouched((prev) => ({ ...prev, monthlySalary: true }));
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";
    // Validate the raw sanitized value (before formatting)
    validateField("monthlySalary", formattedValue);
    // Update parent with numeric value or zero
    onUpdate({
      alreadyPaidSalary: sanitizedValue ? parseInt(sanitizedValue) : 0,
    });
  };

  const handleMonthsChange = (value: string) => {
    setTouched((prev) => ({ ...prev, monthsPaid: true }));
    validateField("monthsPaid", value);
    onUpdate({
      monthsAlreadyPaid: value ? parseInt(value) : 0,
    });
  };

  // Validate whole form before proceeding
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!data.alreadyPaidSalary || data.alreadyPaidSalary <= 0) {
      newErrors.monthlySalary = "Please enter a valid monthly salary";
    }

    if (
      !data.monthsAlreadyPaid ||
      data.monthsAlreadyPaid < 1 ||
      data.monthsAlreadyPaid > 12
    ) {
      newErrors.monthsPaid = "Please enter months between 1 and 12";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setTouched({ monthlySalary: true, monthsPaid: true });

    if (validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-center text-[#080A3C]">
          Step 1: Monthly Salary Already Received
        </h3>
        <p className="text-center text-muted-foreground">
          Enter details about your monthly salary already received in the
          current tax year
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
                Monthly Salary Already Received (LKR)
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Your regular monthly salary that you&#39;ve <br />
                      already been paid this tax year
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
              onChange={(e) => {
                if (!getTracked() && !calculating) {
                  setTracked();
                  trackEvent("bonus-income-tax-calculations", {
                    tool: "free-tools",
                    calculator: "bonus-income-tax-calculator",
                  });
                }
                setCalculating(true);
                handleSalaryChange(e.target.value);
              }}
              className={`h-12 text-lg ${
                touched.monthlySalary && errors.monthlySalary
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched.monthlySalary && errors.monthlySalary && (
              <p className="text-red-500 text-sm">{errors.monthlySalary}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="monthsPaid"
                className="text-sm font-medium text-gray-700"
              >
                Number of months already paid
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      How many months you&#39;ve already received <br /> this
                      salary in the current tax year
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <Input
                id="monthsPaid"
                type="number"
                min="1"
                max="12"
                placeholder="Enter Months Paid (1-12)"
                value={monthsPaid}
                onChange={(e) => {
                  if (!getTracked() && !calculating) {
                    setTracked();
                    trackEvent("bonus-income-tax-calculations", {
                      tool: "free-tools",
                      calculator: "bonus-income-tax-calculator",
                    });
                  }
                  setCalculating(true);
                  handleMonthsChange(e.target.value);
                }}
                className={`h-12 text-lg ${
                  touched.monthsPaid && errors.monthsPaid
                    ? "border-red-500"
                    : ""
                }`}
              />
              {monthsPaid &&
                parseInt(monthsPaid.toString()) >= 1 &&
                parseInt(monthsPaid.toString()) <= 12 && (
                  <div className="mt-1 text-sm text-gray-500">
                    ({getMonthRange(1, parseInt(monthsPaid.toString()))})
                  </div>
                )}
            </div>
            {touched.monthsPaid && errors.monthsPaid && (
              <p className="text-red-500 text-sm">{errors.monthsPaid}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleNext}
            className="bg-[#080A3C] hover:bg-[#080A3C/90] text-white px-8 py-3 rounded-lg font-medium"
          >
            Next Step
          </Button>
        </div>
      </div>

      <BonusInfoSection />
    </div>
  );
};

export default BonusStep1;

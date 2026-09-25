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
import BonusInfoSection from "./BonusInfoSection";

interface BonusStep3Props {
  data: BonusCalculationData;
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: Partial<BonusCalculationData>) => void;
}

const BonusStep3 = ({ data, onNext, onBack, onUpdate }: BonusStep3Props) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Format values for display from props
  const formattedBonusAmount = data.bonusAmount
    ? data.bonusAmount.toLocaleString()
    : "";
  const formattedPreviousBonusTax = data.previouslyPaidBonusTax
    ? data.previouslyPaidBonusTax.toLocaleString()
    : "";

  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "bonusAmount") {
      const bonusValue = parseFloat(value.replace(/,/g, ""));
      if (!value || isNaN(bonusValue) || bonusValue <= 0) {
        error = "Please enter a valid bonus amount";
      }
    }

    if (field === "previousBonusTax") {
      if (value) {
        const prevTaxValue = parseFloat(value.replace(/,/g, ""));
        if (isNaN(prevTaxValue) || prevTaxValue < 0) {
          error = "Previous bonus tax cannot be negative";
        }
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleBonusAmountChange = (value: string) => {
    setTouched((prev) => ({ ...prev, bonusAmount: true }));
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";
    validateField("bonusAmount", formattedValue);
    onUpdate({
      bonusAmount: sanitizedValue ? parseInt(sanitizedValue) : 0,
    });
  };

  const handlePreviousBonusTaxChange = (value: string) => {
    setTouched((prev) => ({ ...prev, previousBonusTax: true }));
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";
    validateField("previousBonusTax", formattedValue);
    onUpdate({
      previouslyPaidBonusTax: sanitizedValue ? parseInt(sanitizedValue) : 0,
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!data.bonusAmount || data.bonusAmount <= 0) {
      newErrors.bonusAmount = "Please enter a valid bonus amount";
    }

    if (
      data.previouslyPaidBonusTax !== undefined &&
      (isNaN(data.previouslyPaidBonusTax) || data.previouslyPaidBonusTax < 0)
    ) {
      newErrors.previousBonusTax = "Previous bonus tax cannot be negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setTouched({ bonusAmount: true, previousBonusTax: true });
    if (validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onNext();
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onBack();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-center text-[#080A3C]">
          Step 3: Bonus/Lump-Sum Payment Details
        </h3>
        <p className="text-center text-muted-foreground">
          Enter details about your bonus or lump-sum payment and any previously
          paid bonus tax
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bonus Amount Input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="bonusAmount"
                className="text-sm font-medium text-gray-700"
              >
                Bonus/lump-sum payment amount (LKR)
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      The bonus, incentive, or other one-time <br />
                      payment you&#39;re receiving
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="bonusAmount"
              type="text"
              placeholder="Enter Your Lump-Sum/Bonus Amount"
              value={formattedBonusAmount}
              onChange={(e) => handleBonusAmountChange(e.target.value)}
              className={`h-12 text-lg ${
                touched.bonusAmount && errors.bonusAmount
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched.bonusAmount && errors.bonusAmount && (
              <p className="text-red-500 text-sm">{errors.bonusAmount}</p>
            )}
          </div>

          {/* Previous Bonus Tax Input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="previousBonusTax"
                className="text-sm font-medium text-gray-700"
              >
                Previous bonus tax paid (LKR)
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-[#FF612F] cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Any tax you&#39;ve already paid on
                      <br /> other bonuses in this tax year
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="previousBonusTax"
              type="text"
              placeholder="Enter Previously Paid Bonus Tax"
              value={formattedPreviousBonusTax}
              onChange={(e) => handlePreviousBonusTaxChange(e.target.value)}
              className={`h-12 text-lg ${
                touched.previousBonusTax && errors.previousBonusTax
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched.previousBonusTax && errors.previousBonusTax && (
              <p className="text-red-500 text-sm">{errors.previousBonusTax}</p>
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

export default BonusStep3;

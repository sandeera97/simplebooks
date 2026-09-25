"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import BonusStep1 from "@/components/bonus/BonusStep1";
import BonusStep2 from "@/components/bonus/BonusStep2";
import BonusStep3 from "@/components/bonus/BonusStep3";
import BonusResult from "@/components/bonus/BonusResult";
import BonusExamplePopup from "@/components/bonus/BonusExamplePopup";
import { calculateAPIT } from "@/utils/bonusUtils";

export interface BonusCalculationData {
  // Step 1
  alreadyPaidSalary: number;
  monthsAlreadyPaid: number;
  apitAlreadyPaid: number;

  // Step 2
  toBePaidSalary: number;
  monthsToBePaid: number;
  apitToBePaid: number;

  // Step 3
  bonusAmount: number;
  previouslyPaidBonusTax: number;
}

const Calculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [calculationData, setCalculationData] = useState<BonusCalculationData>({
    alreadyPaidSalary: 0,
    monthsAlreadyPaid: 0,
    apitAlreadyPaid: 0,
    toBePaidSalary: 0,
    monthsToBePaid: 0,
    apitToBePaid: 0,
    bonusAmount: 0,
    previouslyPaidBonusTax: 0,
  });

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep(1);
    setCalculationData({
      alreadyPaidSalary: 0,
      monthsAlreadyPaid: 0,
      apitAlreadyPaid: 0,
      toBePaidSalary: 0,
      monthsToBePaid: 0,
      apitToBePaid: 0,
      bonusAmount: 0,
      previouslyPaidBonusTax: 0,
    });
  };

  const updateCalculationData = (newData: Partial<BonusCalculationData>) => {
    setCalculationData((prev) => {
      const updated = { ...prev, ...newData };

      if (newData.alreadyPaidSalary !== undefined) {
        updated.apitAlreadyPaid = calculateAPIT(newData.alreadyPaidSalary);
      }

      if (newData.toBePaidSalary !== undefined) {
        updated.apitToBePaid = calculateAPIT(newData.toBePaidSalary);
      }

      if (newData.monthsAlreadyPaid !== undefined) {
        updated.monthsToBePaid =
          12 - (newData.monthsAlreadyPaid ?? prev.monthsAlreadyPaid);
      }

      return updated;
    });
  };

  const handleLoadExample = (exampleData: BonusCalculationData) => {
    setCalculationData(exampleData);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BonusStep1
            data={calculationData}
            onNext={handleNext}
            onUpdate={updateCalculationData}
          />
        );
      case 2:
        return (
          <BonusStep2
            data={calculationData}
            onNext={handleNext}
            onBack={handleBack}
            onUpdate={updateCalculationData}
          />
        );
      case 3:
        return (
          <BonusStep3
            data={calculationData}
            onNext={handleNext}
            onBack={handleBack}
            onUpdate={updateCalculationData}
          />
        );
      case 4:
        return (
          <BonusResult
            data={calculationData}
            onBack={handleBack}
            onReset={handleReset}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Info Box */}
      <div className="my-4 p-4 border-l-4 border-blue-500 bg-blue-50 text-sm rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        <p className="text-blue-800 md:max-w-[80%]">
          <span className="font-semibold">Important:</span> This calculator
          helps you determine the tax liability on bonus and lump-sum payments
          based on your annual income estimation. Enter accurate monthly salary
          information for precise calculations.
        </p>
        <div className="flex-shrink-0">
          <BonusExamplePopup onLoadExample={handleLoadExample} />
        </div>
      </div>

      {/* Step Rendering */}
      <Card className="p-4 md:p-6 border overflow-hidden max-w-full mb-6">
        <div className="w-full">{renderStep()}</div>
      </Card>
    </div>
  );
};

export default Calculator;

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BonusCalculationData } from "@/components/sections/bonus/Dynamics";
import { calculateAPIT } from "@/utils/bonusUtils";

interface BonusExamplePopupProps {
  onLoadExample: (data: BonusCalculationData) => void;
}

const BonusExamplePopup = ({ onLoadExample }: BonusExamplePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate random example data
  const generateRandomExample = (): BonusCalculationData => {
    const salaryOptions = [120000, 150000, 180000, 200000, 250000, 300000];
    const bonusOptions = [400000, 500000, 600000, 750000, 1000000];
    const monthsAlreadyOptions = [6, 7, 8, 9, 10];
    const previousTaxOptions = [15000, 20000, 25000, 30000, 35000];

    const alreadyPaidSalary =
      salaryOptions[Math.floor(Math.random() * salaryOptions.length)];
    const monthsAlreadyPaid =
      monthsAlreadyOptions[
        Math.floor(Math.random() * monthsAlreadyOptions.length)
      ];
    const toBePaidSalary =
      Math.random() > 0.7
        ? alreadyPaidSalary + (Math.random() > 0.5 ? 20000 : -20000)
        : alreadyPaidSalary;
    const monthsToBePaid = 12 - monthsAlreadyPaid;
    const bonusAmount =
      bonusOptions[Math.floor(Math.random() * bonusOptions.length)];
    const previouslyPaidBonusTax =
      previousTaxOptions[Math.floor(Math.random() * previousTaxOptions.length)];

    return {
      alreadyPaidSalary,
      monthsAlreadyPaid,
      apitAlreadyPaid: calculateAPIT(alreadyPaidSalary),
      toBePaidSalary,
      monthsToBePaid,
      apitToBePaid: calculateAPIT(toBePaidSalary),
      bonusAmount,
      previouslyPaidBonusTax,
    };
  };

  const [exampleData, setExampleData] = useState<BonusCalculationData>(() =>
    generateRandomExample()
  );

  const handleDialogOpen = (open: boolean) => {
    if (open) {
      // Generate new random example when opening
      setExampleData(generateRandomExample());
    }
    setIsOpen(open);
  };

  const handleLoadExample = () => {
    onLoadExample(exampleData);
    setIsOpen(false);
  };

  // Calculate totals for display
  const totalSalaryReceived =
    exampleData.alreadyPaidSalary * exampleData.monthsAlreadyPaid;
  const totalSalaryToBePaid =
    exampleData.toBePaidSalary * exampleData.monthsToBePaid;
  const totalApitPaid =
    exampleData.apitAlreadyPaid * exampleData.monthsAlreadyPaid;
  const totalApitToBePaid =
    exampleData.apitToBePaid * exampleData.monthsToBePaid;
  const annualSalary = totalSalaryReceived + totalSalaryToBePaid;
  const totalApitOnSalary = totalApitPaid + totalApitToBePaid;

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          See Example
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#080A3C]">
            Bonus APIT Calculator Example
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step 1 Example */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#080A3C] mb-3">
              Step 1: Monthly Salary Already Received
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Monthly Salary:</p>
                <p className="font-semibold">
                  LKR {exampleData.alreadyPaidSalary.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Months Already Paid:</p>
                <p className="font-semibold">
                  {exampleData.monthsAlreadyPaid} months
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total Salary Received:</p>
                <p className="font-semibold text-[#080A3C]">
                  LKR {totalSalaryReceived.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total APIT Paid:</p>
                <p className="font-semibold text-[#FF612F]">
                  LKR {totalApitPaid.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 Example */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#080A3C] mb-3">
              Step 2: Monthly Salary To Be Paid
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Monthly Salary:</p>
                <p className="font-semibold">
                  LKR {exampleData.toBePaidSalary.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Months To Be Paid:</p>
                <p className="font-semibold">
                  {exampleData.monthsToBePaid} months
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total Salary To Be Paid:</p>
                <p className="font-semibold text-[#080A3C]">
                  LKR {totalSalaryToBePaid.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total APIT To Be Paid:</p>
                <p className="font-semibold text-[#FF612F]">
                  LKR {totalApitToBePaid.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 Example */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#080A3C] mb-3">
              Step 3: Bonus/Lump-Sum Payment Details
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Bonus Amount:</p>
                <p className="font-semibold text-[#080A3C]">
                  LKR {exampleData.bonusAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Previously Paid Bonus Tax:</p>
                <p className="font-semibold text-[#FF612F]">
                  LKR {exampleData.previouslyPaidBonusTax.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#080A3C] mb-3">
              Calculation Summary
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Annual Salary:</p>
                <p className="font-semibold text-[#080A3C]">
                  LKR {annualSalary.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total APIT on Salary:</p>
                <p className="font-semibold text-[#FF612F]">
                  LKR {totalApitOnSalary.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Bonus Amount:</p>
                <p className="font-semibold text-[#080A3C]">
                  LKR {exampleData.bonusAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Previously Paid Bonus Tax:</p>
                <p className="font-semibold text-[#FF612F]">
                  LKR {exampleData.previouslyPaidBonusTax.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Load Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleLoadExample}
              className="bg-[#080A3C] hover:bg-[#080A3C]/90 text-white px-8 py-3 rounded-lg font-medium"
            >
              Load This Example
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BonusExamplePopup;

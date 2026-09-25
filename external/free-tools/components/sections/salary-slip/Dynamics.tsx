"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import EmployeeDetailsForm from "@/components/salary/EmployeeDetailsForm";
import SalaryDetailsForm from "@/components/salary/SalaryDetailsForm";
import AllowancesForm from "@/components/salary/AllowancesForm";
import SalarySlipResult from "@/components/salary/SalarySlipResult";
import { SalarySlipData } from "@/utils/salaryUtils";
import StepperHeader from "@/components/salary/StepperHeader";

const initialData: SalarySlipData = {
  employeeDetails: {
    epfNumber: "",
    fullName: "",
    nicNumber: "",
    designation: "",
    companyName: "",
    month: "",
  },
  salaryDetails: {
    basicSalary: 0,
    isEPFETFEligible: true,
    isAPITEligible: true,
  },
  allowances: [],
  hasAllowances: false,
};

const Generator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<SalarySlipData>(initialData);
  const { toast } = useToast();

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateEmployeeDetails = (
    details: SalarySlipData["employeeDetails"]
  ) => {
    setData((prev) => ({
      ...prev,
      employeeDetails: details,
    }));
    nextStep();
  };

  const updateSalaryDetails = (details: SalarySlipData["salaryDetails"]) => {
    setData((prev) => ({
      ...prev,
      salaryDetails: details,
    }));
    nextStep();
  };

  const updateAllowances = (
    allowances: SalarySlipData["allowances"],
    hasAllowances: boolean
  ) => {
    setData((prev) => ({
      ...prev,
      allowances,
      hasAllowances,
    }));
    nextStep();
  };

  const resetForm = () => {
    setData(initialData);
    setCurrentStep(1);
    toast({
      title: "Form Reset",
      description: "Start creating a new salary slip.",
    });
  };

  return (
    <div>
      <StepperHeader currentStep={currentStep} />

      {currentStep === 1 && (
        <EmployeeDetailsForm
          initialData={data.employeeDetails}
          onSubmit={updateEmployeeDetails}
        />
      )}

      {currentStep === 2 && (
        <SalaryDetailsForm
          initialData={data.salaryDetails}
          onSubmit={updateSalaryDetails}
          onBack={prevStep}
        />
      )}

      {currentStep === 3 && (
        <AllowancesForm
          initialData={data.allowances}
          onSubmit={updateAllowances}
          onBack={prevStep}
        />
      )}

      {currentStep === 4 && (
        <SalarySlipResult data={data} onReset={resetForm} onBack={prevStep} />
      )}
    </div>
  );
};

export default Generator;

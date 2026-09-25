import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SalaryDetails } from "@/utils/salaryUtils";

interface SalaryDetailsFormProps {
  initialData: SalaryDetails;
  onSubmit: (data: SalaryDetails) => void;
  onBack: () => void;
}

const SalaryDetailsForm = ({
  initialData,
  onSubmit,
  onBack,
}: SalaryDetailsFormProps) => {
  // Override EPF/ETF and APIT Tax to false initially
  const [formData, setFormData] = useState<SalaryDetails>({
    ...initialData,
    isEPFETFEligible: initialData.isEPFETFEligible ?? false,
    isAPITEligible: initialData.isAPITEligible ?? false,
  });

  const [errors, setErrors] = useState<{ basicSalary?: string }>({});

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value === "" ? 0 : parseFloat(value);

    setFormData((prev) => ({
      ...prev,
      basicSalary: numericValue,
    }));

    if (errors.basicSalary) {
      setErrors({});
    }
  };

  const handleCheckboxChange = (
    name: "isEPFETFEligible" | "isAPITEligible",
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const validateForm = (): boolean => {
    if (formData.basicSalary <= 0) {
      setErrors({
        basicSalary: "Basic salary is required and must be greater than 0",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#080A3C]">
        What is your employee&#39;s basic salary?
      </h2>

      <p className="text-gray-600 mb-8 text-center max-w-lg mx-auto">
        This is the main part of an employee&#39;s salary and it&#39;s a set
        amount that usually does not change over time, unless you provide a
        promotion or salary increase.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 space-y-8"
        noValidate
      >
        <div>
          <label
            htmlFor="basicSalary"
            className="block mb-3 font-medium text-gray-700 bg-gray-50 p-3 rounded-md"
          >
            Basic Salary <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-gray-800">LKR</span>
            <Input
              id="basicSalary"
              type="number"
              value={formData.basicSalary === 0 ? "" : formData.basicSalary}
              onChange={handleSalaryChange}
              placeholder="Enter basic salary amount"
              className={errors.basicSalary ? "border-red-500" : ""}
            />
          </div>
          {errors.basicSalary && (
            <p className="text-sm text-red-600 mt-2">{errors.basicSalary}</p>
          )}
        </div>

        <div>
          <p className="font-medium mb-4">
            Please select whether the amount you&#39;re entering is eligible for
            EPF/ETF, APIT Tax.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="epf-etf-eligible"
                checked={formData.isEPFETFEligible}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("isEPFETFEligible", checked === true)
                }
              />
              <label
                htmlFor="epf-etf-eligible"
                className="text-sm font-medium cursor-pointer select-none"
              >
                EPF/ETF
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="apit-eligible"
                checked={formData.isAPITEligible}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("isAPITEligible", checked === true)
                }
              />
              <label
                htmlFor="apit-eligible"
                className="text-sm font-medium cursor-pointer select-none"
              >
                APIT Tax
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-44"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="w-44 bg-[#080A3C] hover:bg-[#080A3C/90] text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SalaryDetailsForm;

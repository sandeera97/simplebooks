import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, X } from "lucide-react";
import { AllowanceItem, allowanceTypes } from "@/utils/salaryUtils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AllowancesFormProps {
  initialData: AllowanceItem[];
  onSubmit: (allowances: AllowanceItem[], hasAllowances: boolean) => void;
  onBack: () => void;
}

const AllowancesForm = ({
  initialData,
  onSubmit,
  onBack,
}: AllowancesFormProps) => {
  const [hasAllowances, setHasAllowances] = useState<boolean>(
    initialData.length > 0
  );
  const [allowances, setAllowances] = useState<AllowanceItem[]>(
    initialData.length > 0
      ? initialData
      : [
          {
            type: "",
            amount: 0,
            isEPFETFEligible: false,
            isAPITEligible: false,
          },
        ]
  );

  const [formError, setFormError] = useState<string | null>(null);

  const handleAllowanceChange = (
    index: number,
    field: keyof AllowanceItem,
    value: string | number | boolean
  ) => {
    const newAllowances = [...allowances];
    newAllowances[index] = {
      ...newAllowances[index],
      [field]: value,
    };
    setAllowances(newAllowances);
  };

  const addAllowance = () => {
    setAllowances([
      ...allowances,
      { type: "", amount: 0, isEPFETFEligible: false, isAPITEligible: false },
    ]);
  };

  const removeAllowance = (index: number) => {
    if (allowances.length > 1) {
      const newAllowances = allowances.filter((_, i) => i !== index);
      setAllowances(newAllowances);
    }
  };

  const handleNoAllowances = () => {
    setHasAllowances(false);
    setFormError(null);
    onSubmit([], false);
  };

  const handleSubmitAllowances = (e: React.FormEvent) => {
    e.preventDefault();

    const validAllowances = allowances.filter((a) => a.type && a.amount > 0);

    if (validAllowances.length === 0) {
      setFormError(
        "Please add at least one allowance with a valid type and amount."
      );
      return;
    }

    setFormError(null);
    onSubmit(validAllowances, true);
  };

  if (!hasAllowances) {
    return (
      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#080A3C]">
          Is your employee receiving any extra payments?
        </h2>

        <p className="text-gray-600 mb-6 text-center leading-relaxed">
          Some companies offer their employees extra payments apart from their
          basic salary, such as travel allowances and overtime pay. These
          motivate employees and are usually discussed in employment contracts.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            type="button"
            onClick={handleNoAllowances}
            variant="outline"
            className="w-40"
          >
            No
          </Button>
          <Button
            type="button"
            onClick={() => setHasAllowances(true)}
            className="w-40 bg-[#080A3C] hover:bg-[#080A3C]/90 text-white"
          >
            Yes
          </Button>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-40"
          >
            Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#080A3C]">
        Tell us about your employee&#39;s extra payments.
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Select what you are offering your employee from the dropdown and enter
        the amounts.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Please select whether the amount you&#39;re entering is eligible for
        EPF/ETF, APIT Tax.
      </p>

      {formError && (
        <p className="text-sm text-red-600 mb-4 text-center font-semibold">
          {formError}
        </p>
      )}

      <form onSubmit={handleSubmitAllowances} className="space-y-6">
        {allowances.map((allowance, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg bg-gray-50 shadow-sm"
          >
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`allowance-type-${index}`}
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Allowance Type
                  </label>
                  <Select
                    value={allowance.type}
                    onValueChange={(value) =>
                      handleAllowanceChange(index, "type", value)
                    }
                    aria-label="Allowance Type"
                  >
                    <SelectTrigger
                      className="w-full"
                      id={`allowance-type-${index}`}
                    >
                      <SelectValue placeholder="Select or type" />
                    </SelectTrigger>
                    <SelectContent>
                      {allowanceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor={`allowance-amount-${index}`}
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="flex items-center">
                    <span className="mr-3 font-medium text-gray-700">LKR</span>
                    <Input
                      id={`allowance-amount-${index}`}
                      type="number"
                      value={allowance.amount === 0 ? "" : allowance.amount}
                      onChange={(e) =>
                        handleAllowanceChange(
                          index,
                          "amount",
                          e.target.value === "" ? 0 : parseFloat(e.target.value)
                        )
                      }
                      className="w-full"
                      min={0}
                      step={0.01}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`epf-etf-eligible-${index}`}
                    checked={allowance.isEPFETFEligible}
                    onCheckedChange={(checked) =>
                      handleAllowanceChange(
                        index,
                        "isEPFETFEligible",
                        checked === true
                      )
                    }
                  />
                  <label
                    htmlFor={`epf-etf-eligible-${index}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    EPF/ETF
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`apit-eligible-${index}`}
                    checked={allowance.isAPITEligible}
                    onCheckedChange={(checked) =>
                      handleAllowanceChange(
                        index,
                        "isAPITEligible",
                        checked === true
                      )
                    }
                  />
                  <label
                    htmlFor={`apit-eligible-${index}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    APIT Tax
                  </label>
                </div>

                {index > 0 && (
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={() => removeAllowance(index)}
                    className="ml-auto"
                    aria-label="Remove allowance"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addAllowance}
          className="flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Another Allowance</span>
        </Button>

        <div className="flex justify-center gap-6 pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-40"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="w-40 bg-[#080A3C] hover:bg-[#080A3C]/90 text-white"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AllowancesForm;

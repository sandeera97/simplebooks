import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { months, EmployeeDetails } from "@/utils/salaryUtils";
import { X } from "lucide-react";

interface EmployeeDetailsFormProps {
  initialData: EmployeeDetails;
  onSubmit: (data: EmployeeDetails) => void;
}

const EmployeeDetailsForm = ({
  initialData,
  onSubmit,
}: EmployeeDetailsFormProps) => {
  const [formData, setFormData] = useState<EmployeeDetails>(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof EmployeeDetails, string>>
  >({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof EmployeeDetails, boolean>>
  >({});

  // Validate the whole form
  const validateForm = (
    data: EmployeeDetails
  ): Partial<Record<keyof EmployeeDetails, string>> => {
    const newErrors: Partial<Record<keyof EmployeeDetails, string>> = {};
    const epfRegex = /^\d{6}$/;
    const nicRegex = /^[0-9]{9}[Vv]$|^[0-9]{12}$/;

    if (!data.epfNumber.trim()) {
      newErrors.epfNumber = "EPF number is required";
    } else if (!epfRegex.test(data.epfNumber)) {
      newErrors.epfNumber = "EPF number must be 6 digits";
    }

    if (!data.nicNumber.trim()) {
      newErrors.nicNumber = "NIC number is required";
    } else if (!nicRegex.test(data.nicNumber)) {
      newErrors.nicNumber =
        "NIC number must be in the format 123456789V or 123456789012";
    }

    if (!data.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!data.fullName.trim()) {
      newErrors.fullName = "Employee name is required";
    }

    if (!data.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!data.month) {
      newErrors.month = "Month is required";
    }

    return newErrors;
  };

  // Update form data and validate field on change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate updated form
    const newErrors = validateForm({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleMonthChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      month: value,
    }));

    setTouched((prev) => ({
      ...prev,
      month: true,
    }));

    const newErrors = validateForm({ ...formData, month: value });
    setErrors(newErrors);
  };

  const clearMonth = () => {
    setFormData((prev) => ({
      ...prev,
      month: "",
    }));
    setTouched((prev) => ({
      ...prev,
      month: true,
    }));

    const newErrors = validateForm({ ...formData, month: "" });
    setErrors(newErrors);
  };

  // Determine if form is valid (no errors)
  const isFormValid =
    Object.keys(errors).length === 0 &&
    Object.values(touched).length > 0 &&
    Object.values(touched).every(Boolean);

  // On submit only call if valid
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // Mark all fields touched on submit so all errors show if invalid
    setTouched({
      epfNumber: true,
      nicNumber: true,
      designation: true,
      fullName: true,
      companyName: true,
      month: true,
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#080A3C]">
        Tell us about your employee and company workspace
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Employee's EPF number",
              name: "epfNumber",
              placeholder: "EPF Number",
              required: true,
            },
            {
              label: "Employee's full name",
              name: "fullName",
              placeholder: "Full Name",
              required: true,
            },
            {
              label: "Employee's NIC number",
              name: "nicNumber",
              placeholder: "NIC Number",
              required: true,
            },
            {
              label: "Designation",
              name: "designation",
              placeholder: "Job Title",
              required: true,
            },
            {
              label: "Company name",
              name: "companyName",
              placeholder: "Company Name",
              required: true,
            },
          ].map(({ label, name, placeholder, required }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="mb-2 font-medium text-[#080A3C] bg-gray-50 p-3 rounded-md"
              >
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <Input
                id={name}
                name={name}
                value={formData[name as keyof EmployeeDetails] || ""}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full ${
                  errors[name as keyof EmployeeDetails] &&
                  touched[name as keyof EmployeeDetails]
                    ? "border-red-500"
                    : ""
                }`}
              />
              {errors[name as keyof EmployeeDetails] &&
                touched[name as keyof EmployeeDetails] && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors[name as keyof EmployeeDetails]}
                  </p>
                )}
            </div>
          ))}

          {/* Month Select */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700 bg-gray-50 p-3 rounded-md">
              Month <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Select value={formData.month} onValueChange={handleMonthChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select month" />
                  {formData.month && (
                    <div
                      role="button"
                      tabIndex={0}
                      className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearMonth();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          clearMonth();
                        }
                      }}
                      aria-label="Clear month selection"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </div>
                  )}
                </SelectTrigger>

                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.month && touched.month && (
                <p className="text-sm text-red-600 mt-1">{errors.month}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={!isFormValid}
            className={`w-44 bg-[#080A3C] hover:bg-[#080A3C]/90 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeDetailsForm;

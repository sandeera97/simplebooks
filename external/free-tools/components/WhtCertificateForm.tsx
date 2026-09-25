import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import WhtCertificateSuccess from "./WhtCertificateSuccess";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface WhtCertificateFormProps {
  isOpen: boolean;
  onClose: () => void;
  incomeType: string;
  amount: string;
}

type FormData = {
  incomeType: string;
  amount: string;
  withholdingAgentTIN: string;
  withholdingAgentName: string;
  withholdingAgentAddress: string;
  withholdeeName: string;
  withholdeeAddress: string;
  withholdeeTIN: string;
  paymentPeriodFrom: string;
  paymentPeriodTo: string;
  chequeNumber: string;
  dateOfPayment: string;
  authorizedOfficerName: string;
};

const WhtCertificateForm = ({
  isOpen,
  onClose,
  incomeType,
  amount,
}: WhtCertificateFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    incomeType: "",
    amount: "",
    withholdingAgentTIN: "",
    withholdingAgentName: "",
    withholdingAgentAddress: "",
    withholdeeName: "",
    withholdeeAddress: "",
    withholdeeTIN: "",
    paymentPeriodFrom: "",
    paymentPeriodTo: "",
    chequeNumber: "",
    dateOfPayment: "",
    authorizedOfficerName: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formComplete, setFormComplete] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Error states for TIN validation
  const [withholdingAgentTINError, setWithholdingAgentTINError] = useState("");
  const [withholdeeTINError, setWithholdeeTINError] = useState("");

  // Touched states for TIN fields to control error message display
  const [withholdingAgentTINTouched, setWithholdingAgentTINTouched] =
    useState(false);
  const [withholdeeTINTouched, setWithholdeeTINTouched] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        incomeType,
        amount,
        withholdingAgentTIN: "",
        withholdingAgentName: "",
        withholdingAgentAddress: "",
        withholdeeName: "",
        withholdeeAddress: "",
        withholdeeTIN: "",
        paymentPeriodFrom: "",
        paymentPeriodTo: "",
        chequeNumber: "",
        dateOfPayment: "",
        authorizedOfficerName: "",
      });
      setCurrentStep(1);
      setFormComplete(false);
      setShowSuccessDialog(false);
      setWithholdingAgentTINError("");
      setWithholdeeTINError("");
      setWithholdingAgentTINTouched(false);
      setWithholdeeTINTouched(false);
    }
  }, [isOpen, incomeType, amount]);

  const isValidTin = (tin: string) => /^\d{9}$/.test(tin);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateStep(currentStep, { ...formData, [field]: value });
  };

  const validateStep = (step: number, data: FormData = formData) => {
    let valid = true;

    if (step === 1) {
      if (!data.withholdingAgentTIN) {
        setWithholdingAgentTINError("TIN is required");
        valid = false;
      } else if (!isValidTin(data.withholdingAgentTIN)) {
        setWithholdingAgentTINError("TIN must be exactly 9 digits");
        valid = false;
      } else {
        setWithholdingAgentTINError("");
      }

      if (!data.withholdingAgentName || !data.withholdingAgentAddress) {
        valid = false;
      }
    } else if (step === 2) {
      if (!data.withholdeeTIN) {
        setWithholdeeTINError("TIN is required");
        valid = false;
      } else if (!isValidTin(data.withholdeeTIN)) {
        setWithholdeeTINError("TIN must be exactly 9 digits");
        valid = false;
      } else {
        setWithholdeeTINError("");
      }

      if (!data.withholdeeName || !data.withholdeeAddress) {
        valid = false;
      }
    } else if (step === 3) {
      if (
        !data.paymentPeriodFrom ||
        !data.paymentPeriodTo ||
        !data.chequeNumber ||
        !data.dateOfPayment ||
        !data.authorizedOfficerName
      ) {
        valid = false;
      }

      if (data.paymentPeriodFrom && data.paymentPeriodTo) {
        const startDate = new Date(data.paymentPeriodFrom);
        const endDate = new Date(data.paymentPeriodTo);
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 31 || startDate > endDate) {
          valid = false;
        }
      }
    }

    setFormComplete(valid);
    return valid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      setFormComplete(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    validateStep(currentStep - 1);
  };

  // First step fields with error and touched handling
  const renderFirstStepFields = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          TIN of the Withholding Agent
        </label>
        <Input
          placeholder="Enter TIN number"
          value={formData.withholdingAgentTIN || ""}
          onChange={(e) =>
            handleInputChange("withholdingAgentTIN", e.target.value)
          }
          onBlur={() => setWithholdingAgentTINTouched(true)}
        />
        {withholdingAgentTINError && withholdingAgentTINTouched && (
          <p className="text-red-500 text-sm mt-1">
            {withholdingAgentTINError}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Name of the Withholding Agent
        </label>
        <Input
          placeholder="Enter name"
          value={formData.withholdingAgentName || ""}
          onChange={(e) =>
            handleInputChange("withholdingAgentName", e.target.value)
          }
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Address of the Withholding Agent
        </label>
        <Textarea
          placeholder="Enter address"
          value={formData.withholdingAgentAddress || ""}
          onChange={(e) =>
            handleInputChange("withholdingAgentAddress", e.target.value)
          }
        />
      </div>
    </>
  );

  // Second step fields with error and touched handling
  const renderSecondStepFields = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Name of the Withholdee
        </label>
        <Input
          placeholder="Enter name"
          value={formData.withholdeeName || ""}
          onChange={(e) => handleInputChange("withholdeeName", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Address of the Withholdee
        </label>
        <Textarea
          placeholder="Enter address"
          value={formData.withholdeeAddress || ""}
          onChange={(e) =>
            handleInputChange("withholdeeAddress", e.target.value)
          }
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          TIN of the Withholdee
        </label>
        <Input
          placeholder="Enter TIN number"
          value={formData.withholdeeTIN || ""}
          onChange={(e) => handleInputChange("withholdeeTIN", e.target.value)}
          onBlur={() => setWithholdeeTINTouched(true)}
        />
        {withholdeeTINError && withholdeeTINTouched && (
          <p className="text-red-500 text-sm mt-1">{withholdeeTINError}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Amount</label>
        <div className="flex">
          <div className="bg-[#FF612F] text-white px-4 py-2 rounded-l-md flex items-center">
            LKR
          </div>
          <Input
            className="rounded-l-none"
            placeholder="Enter amount"
            value={formData.amount || ""}
            onChange={(e) => handleInputChange("amount", e.target.value)}
            disabled
          />
        </div>
      </div>
    </>
  );

  const renderThirdStepFields = () => {
    return (
      <>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Payment Period (max 31 days)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">From</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.paymentPeriodFrom && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.paymentPeriodFrom ? (
                      format(new Date(formData.paymentPeriodFrom), "PPP")
                    ) : (
                      <span>Select date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={
                      formData.paymentPeriodFrom
                        ? new Date(formData.paymentPeriodFrom)
                        : undefined
                    }
                    onSelect={(date) => {
                      if (date) {
                        const localDate = new Date(date);
                        const dateString = `${localDate.getFullYear()}-${String(
                          localDate.getMonth() + 1
                        ).padStart(2, "0")}-${String(
                          localDate.getDate()
                        ).padStart(2, "0")}`;
                        handleInputChange("paymentPeriodFrom", dateString);
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">To</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.paymentPeriodTo && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.paymentPeriodTo ? (
                      format(new Date(formData.paymentPeriodTo), "PPP")
                    ) : (
                      <span>Select date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={
                      formData.paymentPeriodTo
                        ? new Date(formData.paymentPeriodTo)
                        : undefined
                    }
                    onSelect={(date) => {
                      if (date) {
                        const localDate = new Date(date);
                        const dateString = `${localDate.getFullYear()}-${String(
                          localDate.getMonth() + 1
                        ).padStart(2, "0")}-${String(
                          localDate.getDate()
                        ).padStart(2, "0")}`;
                        handleInputChange("paymentPeriodTo", dateString);
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          {formData.paymentPeriodFrom &&
            formData.paymentPeriodTo &&
            new Date(formData.paymentPeriodFrom) >
              new Date(formData.paymentPeriodTo) && (
              <p className="text-red-500 text-sm mt-1">
                From date must be before To date
              </p>
            )}
          {formData.paymentPeriodFrom &&
            formData.paymentPeriodTo &&
            Math.ceil(
              Math.abs(
                new Date(formData.paymentPeriodTo).getTime() -
                  new Date(formData.paymentPeriodFrom).getTime()
              ) /
                (1000 * 60 * 60 * 24)
            ) > 31 && (
              <p className="text-red-500 text-sm mt-1">
                Period cannot exceed 31 days
              </p>
            )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Cheque/Auto Payment Receipt No
          </label>
          <Input
            placeholder="Enter cheque number"
            value={formData.chequeNumber || ""}
            onChange={(e) => handleInputChange("chequeNumber", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Date of Payment
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !formData.dateOfPayment && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.dateOfPayment ? (
                  format(new Date(formData.dateOfPayment), "PPP")
                ) : (
                  <span>Select date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={
                  formData.dateOfPayment
                    ? new Date(formData.dateOfPayment)
                    : undefined
                }
                onSelect={(date) => {
                  if (date) {
                    const localDate = new Date(date);
                    const dateString = `${localDate.getFullYear()}-${String(
                      localDate.getMonth() + 1
                    ).padStart(2, "0")}-${String(localDate.getDate()).padStart(
                      2,
                      "0"
                    )}`;
                    handleInputChange("dateOfPayment", dateString);
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Name of Authorized Officer
          </label>
          <Input
            placeholder="Name of authorized officer"
            value={formData.authorizedOfficerName || ""}
            onChange={(e) =>
              handleInputChange("authorizedOfficerName", e.target.value)
            }
          />
        </div>
      </>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderFirstStepFields();
      case 2:
        return renderSecondStepFields();
      case 3:
        return renderThirdStepFields();
      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-between mb-6 w-full max-w-xs mx-auto">
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${
              currentStep === 1
                ? "bg-[#FF612F] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            1
          </div>
          <span className="text-xs mt-1">Agent</span>
        </div>
        <div className="h-0.5 bg-gray-200 w-12 mt-3"></div>
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${
              currentStep === 2
                ? "bg-[#FF612F] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            2
          </div>
          <span className="text-xs mt-1">Withholdee</span>
        </div>
        <div className="h-0.5 bg-gray-200 w-12 mt-3"></div>
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${
              currentStep === 3
                ? "bg-[#FF612F] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            3
          </div>
          <span className="text-xs mt-1">Payment</span>
        </div>
        <div className="h-0.5 bg-gray-200 w-12 mt-3"></div>
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${
              currentStep === 4
                ? "bg-[#FF612F] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            4
          </div>
          <span className="text-xs mt-1">Finish</span>
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    if (currentStep < 3) {
      handleNext();
    } else {
      setShowSuccessDialog(true);
    }
  };

  const handleBackToEdit = () => {
    setShowSuccessDialog(false);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Withholding Agent Details";
      case 2:
        return "Withholdee Details";
      case 3:
        return "Payment Details";
      default:
        return "Generate Certificate";
    }
  };

  return (
    <>
      <Dialog
        open={isOpen && !showSuccessDialog}
        onOpenChange={showSuccessDialog ? () => {} : onClose}
      >
        <DialogContent className="sm:max-w-md font-poppins">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {getStepTitle()}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {currentStep === 1
                ? "Enter the withholding agent information"
                : currentStep === 2
                ? "Enter the withholdee information"
                : "Enter payment details for your WHT certificate"}
            </DialogDescription>
          </DialogHeader>

          {renderStepIndicator()}

          <div className="mt-4">
            {currentStep === 1 && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Income Type
                </label>
                <Select
                  value={formData.incomeType || ""}
                  onValueChange={(value) =>
                    handleInputChange("incomeType", value)
                  }
                  disabled
                >
                  <SelectTrigger className="bg-blue-50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Rental Income">Rental Income</SelectItem>
                    <SelectItem value="Consultancy / Service Fee">
                      Consultancy / Service Fee
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {renderStepContent()}

            <div className="flex justify-between gap-3 mt-6">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex items-center"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </Button>
              )}

              <Button
                className={`${
                  currentStep === 1 ? "w-full" : "flex-grow"
                } bg-[#080A3C]`}
                onClick={handleSubmit}
                disabled={!formComplete}
              >
                {currentStep < 3 ? "Continue" : "Generate Certificate"}
                {currentStep < 3 && <ArrowRight size={16} className="ml-1" />}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showSuccessDialog && (
        <WhtCertificateSuccess
          isOpen={showSuccessDialog}
          onClose={onClose}
          onBackToEdit={handleBackToEdit}
          certificateData={formData}
        />
      )}
    </>
  );
};

export default WhtCertificateForm;

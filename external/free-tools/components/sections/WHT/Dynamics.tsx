"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import ContactAssistance from "@/components/ContactAssistance";
import { RefreshCw, ArrowRight } from "lucide-react";
import WhtCertificateForm from "@/components/WhtCertificateForm";
import { trackEvent } from "@/utils/trackEvent";

interface WHTRates {
  [key: string]: {
    rate: number;
    threshold: number;
    description: string;
  };
}

const incomeTypes = [
  "Rental Income",
  // "Fixed Deposit Interest",
  "Consultancy / Service Fee",
];

const whtRates: WHTRates = {
  "Rental Income": {
    rate: 10,
    threshold: 100000,
    description:
      "For rental income, WHT is applicable at 10% when the monthly rental payment exceeds Rs. 100,000.00 as per IRD guidelines.",
  },
  /* Commented out Fixed Deposit
  "Fixed Deposit Interest": {
    rate: 10,
    threshold: 0,
    description:
      "Fixed deposit interest is subject to 10% WHT on the total amount received.",
  },
  */
  "Consultancy / Service Fee": {
    rate: 5,
    threshold: 100000,
    description:
      "Professional and consultancy services are subject to 5% WHT deduction when monthly payments exceed Rs. 100,000.00 as per IRD guidelines.",
  },
};

const Calculator = () => {
  const [incomeType, setIncomeType] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [whtDue, setWhtDue] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [isCertificateFormOpen, setIsCertificateFormOpen] = useState(false);
  const [calculating, setCalculating] = useState<boolean>(false);

  const HAS_TRACKED_KEY = "wht_tracked";

  const getTracked = () => {
    try {
      return (
        typeof window !== "undefined" &&
        sessionStorage.getItem(HAS_TRACKED_KEY) === "1"
      );
    } catch {
      return false;
    }
  };

  const setTracked = () => {
    try {
      if (typeof window !== "undefined")
        sessionStorage.setItem(HAS_TRACKED_KEY, "1");
    } catch {}
  };

  // useEffect(() => {
  //   if (!getTracked() && !calculating) {
  //     setTracked();
  //     trackEvent("wht-calculations", {
  //       tool: "free-tools",
  //       calculator: "wht-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  const calculateWHT = (type: string, value: number) => {
    if (!type || !whtRates[type]) return 0;

    if (value <= whtRates[type].threshold) {
      return 0;
    }

    return (value * whtRates[type].rate) / 100;
  };

  const isEligibleForWHT = () => {
    if (!incomeType || !amount) return false;

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) return false;

    // For Fixed Deposit Interest, no threshold check
    if (incomeType === "Fixed Deposit Interest") return true;

    // For other types, check if amount exceeds threshold
    return amountValue > whtRates[incomeType].threshold;
  };

  const handleCalculate = () => {
    if (incomeType && amount && parseFloat(amount) > 0) {
      const amountValue = parseFloat(amount);
      const calculatedWHT = calculateWHT(incomeType, amountValue);
      setWhtDue(calculatedWHT);
      setStep(2);
      setError("");
    } else {
      setError("Please enter valid information");
    }
  };

  const handleReset = () => {
    setIncomeType("");
    setAmount("");
    setStep(1);
    setWhtDue(0);
    setError("");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-LK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div>
      <Card className="p-4 md:p-6 shadow-lg mb-6 border-2 border-blue-100">
        {step === 1 || step === 2 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Income Type
                </label>
                <Select
                  value={incomeType}
                  onValueChange={(value) => setIncomeType(value)}
                  disabled={step === 2}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {incomeTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Amount Received
                </label>
                <div className="flex">
                  <div className="bg-[#FF612F] text-white px-4 py-2 rounded-l-md flex items-center">
                    LKR
                  </div>
                  <Input
                    className="rounded-l-none"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => {
                      if (!getTracked() && !calculating) {
                        setTracked();
                        trackEvent("wht-calculations", {
                          tool: "free-tools",
                          calculator: "wht-calculator",
                        });
                      }
                      setCalculating(true);
                      setAmount(e.target.value);
                    }}
                    type="number"
                    disabled={step === 2}
                  />
                </div>
              </div>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {step === 1 ? (
                <Button
                  className="w-full bg-[#080A3C] hover:bg-[#080A3C]/90 text-white py-4"
                  onClick={handleCalculate}
                  disabled={!isEligibleForWHT()}
                >
                  Calculate WHT
                </Button>
              ) : (
                <Button
                  className="w-full bg-[#080A3C] hover:bg-[#080A3C]/90 text-white py-4"
                  onClick={() => setStep(1)}
                >
                  Edit Details
                </Button>
              )}

              <Button
                variant="outline"
                className="w-full md:w-auto py-4"
                onClick={handleReset}
              >
                <RefreshCw size={18} className="mr-2" />
                Reset
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center p-8">
            <h2 className="text-xl font-bold mb-4">Next Steps Coming Soon</h2>
            <Button variant="outline" onClick={() => setStep(1)}>
              Back to Step 1
            </Button>
          </div>
        )}

        {incomeType && whtRates[incomeType] && (
          <div className="bg-blue-50 p-4 rounded-md mt-6 flex gap-2 items-start">
            <div className="text-blue-500 mt-1 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm text-blue-700">
              {whtRates[incomeType].description}
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8">
            <div className="bg-white rounded-md border-2 border-gray-100 overflow-hidden">
              <div className="p-6 text-center border-b">
                <h2 className="text-xl font-bold">Summary</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                        Description
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-medium text-gray-600">
                        Gross Amount
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-medium text-gray-600">
                        Rate
                      </th>
                      <th className="py-3 px-4 text-right text-sm font-medium text-gray-600">
                        WHT Due
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 text-left">[{incomeType}]</td>
                      <td className="py-4 px-4 text-right">
                        {formatCurrency(parseFloat(amount))}
                      </td>
                      <td className="py-4 px-4 text-right">
                        {whtRates[incomeType]?.rate}%
                      </td>
                      <td className="py-4 px-4 text-right">
                        {formatCurrency(whtDue)}
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-4 px-4 text-left font-bold">Total</td>
                      <td className="py-4 px-4 text-right font-bold">
                        {formatCurrency(parseFloat(amount))}
                      </td>
                      <td className="py-4 px-4 text-right">-</td>
                      <td className="py-4 px-4 text-right font-bold text-red-500">
                        {formatCurrency(whtDue)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 flex justify-center">
                <Button
                  className="bg-[#FF612F] hover:bg-[#FF612F]/90 text-white flex items-center gap-2"
                  onClick={() => setIsCertificateFormOpen(true)}
                >
                  Generate WHT Certificate
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* <ContactAssistance title="Need Expert WHT Assistance?" /> */}

      {/* WHT Certificate Form Dialog */}
      <WhtCertificateForm
        isOpen={isCertificateFormOpen}
        onClose={() => setIsCertificateFormOpen(false)}
        incomeType={incomeType}
        amount={amount}
      />
    </div>
  );
};

export default Calculator;

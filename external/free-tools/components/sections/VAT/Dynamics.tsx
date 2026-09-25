"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { trackEvent } from "@/utils/trackEvent";

const Calculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [vatAmount, setVatAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [isAddingVat, setIsAddingVat] = useState<boolean>(true);
  const [calculating, setCalculating] = useState<boolean>(false);

  const HAS_TRACKED_KEY = "vat_tracked";

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
  //     trackEvent("vat-calculations", {
  //       tool: "free-tools",
  //       calculator: "vat-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  const VAT_RATE = 0.18;

  const calculateVat = (isAdding: boolean, inputValue: string) => {
    const inputAmount = parseFloat(inputValue) || 0;

    if (isAdding) {
      const vat = inputAmount * VAT_RATE;
      const total = inputAmount + vat;
      setVatAmount(vat);
      setTotalAmount(total);
    } else {
      const baseAmount = inputAmount / (1 + VAT_RATE);
      const vat = inputAmount - baseAmount;
      setVatAmount(vat);
      setTotalAmount(baseAmount);
    }
  };

  useEffect(() => {
    calculateVat(isAddingVat, amount);
  }, [isAddingVat, amount]);

  const handleToggle = (value: string) => {
    if (value) {
      // Only proceed if value is not empty
      const isAdding = value === "add";
      setIsAddingVat(isAdding);
      calculateVat(isAdding, amount);
    }
  };

  const handleReset = () => {
    setAmount("");
    setVatAmount(0);
    setTotalAmount(0);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    calculateVat(isAddingVat, newAmount);
  };

  return (
    <div>
      <Card className="p-4 md:p-6 shadow-lg mb-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Enter Amount in LKR
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                LKR
              </span>
              <Input
                className="pl-12"
                placeholder="0"
                value={amount}
                onChange={(e) => {
                  if (!getTracked() && !calculating) {
                    setTracked();
                    trackEvent("vat-calculations", {
                      tool: "free-tools",
                      calculator: "vat-calculator",
                    });
                  }
                  setCalculating(true);
                  handleAmountChange(e);
                }}
                type="number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">VAT Rate</label>
            <Input value="18%" disabled />
            <p className="text-sm text-gray-500 mt-1">
              *This calculator uses the standard VAT rate of 18%
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <ToggleGroup
              type="single"
              value={isAddingVat ? "add" : "remove"}
              onValueChange={handleToggle}
              className="grid grid-cols-2 bg-gray-100 p-1 rounded-lg w-full"
            >
              <ToggleGroupItem
                value="add"
                className="px-4 py-2 rounded-md transition-all data-[state=on]:bg-[#FF612F] data-[state=on]:text-white data-[state=on]:shadow-sm data-[state=off]:text-gray-500"
              >
                Adding VAT
              </ToggleGroupItem>
              <ToggleGroupItem
                value="remove"
                className="px-4 py-2 rounded-md transition-all data-[state=on]:bg-[#FF612F] data-[state=on]:text-white data-[state=on]:shadow-sm data-[state=off]:text-gray-500"
              >
                Removing VAT
              </ToggleGroupItem>
            </ToggleGroup>

            <Button
              variant="outline"
              className="w-full md:w-auto mt-4 md:mt-0 ml-0 md:ml-4"
              onClick={handleReset}
            >
              <RefreshCw size={18} className="mr-2" />
              Reset
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">VAT Amount</p>
              <p className="text-xl font-bold">Rs. {vatAmount.toFixed(2)}</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">
                {isAddingVat ? "Total Amount" : "Base Amount"}
              </p>
              <p className="text-xl font-bold">Rs. {totalAmount.toFixed(2)}</p>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;

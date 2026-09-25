"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trackEvent } from "@/utils/trackEvent";

const LocalCalculator = () => {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(0);
  const [breakdown, setBreakdown] = useState<Record<string, number>>({});
  const [LKRIncome, setLKRIncome] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const HAS_TRACKED_KEY = "ltc_tracked";

  function getTracked() {
    try {
      return (
        typeof window !== "undefined" &&
        sessionStorage.getItem(HAS_TRACKED_KEY) === "1"
      );
    } catch {
      return false;
    }
  }
  function setTracked() {
    try {
      if (typeof window !== "undefined")
        sessionStorage.setItem(HAS_TRACKED_KEY, "1");
    } catch {}
  }

  // useEffect(() => {
  //   if (!getTracked() && !calculating) {
  //     setTracked();
  //     trackEvent("local-income-tax-calculations", {
  //       tool: "free-tools",
  //       calculator: "local-income-tax-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  const resetForm = () => {
    setIncome("");
    setTax(0);
    setBreakdown({});
  };

  const calculateTax = (monthlyAmount: number) => {
    const annualAmount = monthlyAmount * 12;
    setLKRIncome(monthlyAmount);

    if (annualAmount <= 1800000) {
      setTax(0);
      setBreakdown({
        exempted: annualAmount,
        slab1: 0,
        slab2: 0,
        slab3: 0,
        slab4: 0,
        slab5: 0,
      });
      return;
    }

    let taxableAmount = annualAmount - 1800000;
    let tax = 0;
    const breakdown = {
      exempted: 1800000,
      slab1: 0,
      slab2: 0,
      slab3: 0,
      slab4: 0,
      slab5: 0,
    };

    const slabs = [
      { limit: 1000000, rate: 0.06, key: "slab1" },
      { limit: 500000, rate: 0.18, key: "slab2" },
      { limit: 500000, rate: 0.24, key: "slab3" },
      { limit: 500000, rate: 0.3, key: "slab4" },
      { limit: Infinity, rate: 0.36, key: "slab5" },
    ];

    for (const { limit, rate, key } of slabs) {
      if (taxableAmount > 0) {
        const amount = Math.min(taxableAmount, limit);
        tax += amount * rate;
        breakdown[key as keyof typeof breakdown] = amount;
        taxableAmount -= amount;
      }
    }

    setTax(Number((tax / 12).toFixed(2)));
    setBreakdown(breakdown);
  };

  useEffect(() => {
    const amount = parseFloat(income.replace(/,/g, "")) || 0;
    calculateTax(amount);
  }, [income]);

  const formatCurrency = (value: string) => {
    // Remove all characters except digits and decimal point
    const cleanValue = value.replace(/[^\d.]/g, "");

    // Ensure only one decimal point
    const parts = cleanValue.split(".");
    if (parts.length > 2) {
      return parts[0] + "." + parts.slice(1).join("");
    }

    // Format the integer part with commas
    if (parts.length === 2) {
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return integerPart + "." + parts[1];
    } else {
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  return (
    <div className="space-y-6 w-full max-w-full">
      <div>
        <h3 className="text-2xl font-bold text-center text-[#080A3C] mb-4">
          Local Tax Calculator
        </h3>
        <label className="block text-[#080A3C] font-semibold mb-2">
          Monthly Income (LKR)
        </label>
        <input
          value={income}
          onChange={(e) => {
            if (!getTracked() && !calculating) {
              setTracked();
              trackEvent("local-income-tax-calculations", {
                tool: "free-tools",
                calculator: "local-income-tax-calculator",
              });
            }
            setCalculating(true);
            setIncome(formatCurrency(e.target.value));
          }}
          placeholder="Enter your monthly income"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF612F] focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-muted">
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-[#080A3C] font-semibold">
              Monthly Income (LKR)
            </span>
            <span className="text-[#080A3C] font-bold text-lg">
              Rs. {LKRIncome.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <span className="text-sm text-[#080A3C] font-semibold">
              Monthly Tax (LKR)
            </span>
            <span className="text-[#080A3C] font-bold text-lg">
              Rs.{" "}
              {tax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Card>

        <Card className="p-4 bg-muted">
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-[#080A3C] font-semibold">
              Annual Income (LKR)
            </span>
            <span className="text-[#080A3C] font-bold text-lg">
              Rs. {(LKRIncome * 12).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <span className="text-sm text-[#080A3C] font-semibold">
              Annual Tax (LKR)
            </span>
            <span className="text-[#080A3C] font-bold text-lg">
              Rs.{" "}
              {(tax * 12).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Card>
      </div>

      {/* Table with horizontal scroll only */}
      <div className="w-full border rounded overflow-hidden">
        <ScrollArea className="w-full" orientation="horizontal">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left whitespace-nowrap text-[#080A3C] font-semibold">
                  Monthly Salary (Annual Salary/12)
                </TableHead>
                <TableHead className="text-center whitespace-nowrap text-[#080A3C] font-semibold">
                  Rate (%)
                </TableHead>
                <TableHead className="text-right whitespace-nowrap text-[#080A3C] font-semibold">
                  Tax
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-left whitespace-nowrap text-[#080A3C]">
                  Up to 150,000
                </TableCell>
                <TableCell className="text-center whitespace-nowrap text-[#080A3C]">
                  Relief
                </TableCell>
                <TableCell className="text-right whitespace-nowrap text-[#080A3C]">
                  -
                </TableCell>
              </TableRow>
              {Object.entries(breakdown).map(([key, amount], index) =>
                key !== "exempted" && amount > 0 ? (
                  <TableRow key={index}>
                    <TableCell className="text-left whitespace-nowrap text-[#080A3C]">
                      {index === 1 ? "First" : "Next"}{" "}
                      {Math.floor(amount / 12).toLocaleString()} LKR
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap text-[#080A3C]">
                      {[6, 18, 24, 30, 36][index - 1]}%
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap text-[#080A3C]">
                      Rs.{" "}
                      {(
                        (amount * [0.06, 0.18, 0.24, 0.3, 0.36][index - 1]) /
                        12
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TableCell>
                  </TableRow>
                ) : null
              )}
              <TableRow className="font-bold bg-muted">
                <TableCell className="text-left whitespace-nowrap text-[#080A3C]">
                  Monthly Total
                </TableCell>
                <TableCell className="text-center whitespace-nowrap text-[#080A3C]"></TableCell>
                <TableCell className="text-right whitespace-nowrap text-[#080A3C]">
                  Rs.{" "}
                  {tax.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={resetForm}
          className="bg-white text-[#FF612F] border-2 border-[#FF612F] hover:bg-[#FF612F] hover:text-white"
        >
          Reset Calculator
        </Button>
      </div>
    </div>
  );
};

export default LocalCalculator;

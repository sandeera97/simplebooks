"use client";
import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { trackEvent } from "@/utils/trackEvent";

const ForeignCalculator = () => {
  const [usdIncome, setUsdIncome] = useState("");
  const [exchangeRateValue, setExchangeRateValue] = useState("300");
  const [tax, setTax] = useState(0);
  const [breakdown, setBreakdown] = useState<{
    exempted?: number;
    slab1?: number;
    slab2?: number;
  }>({});
  const [LKRIncome, setLKRIncome] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const HAS_TRACKED_KEY = "ftc_tracked";

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
  //     trackEvent("foreign-income-tax-calculations", {
  //       tool: "free-tools",
  //       calculator: "foreign-income-tax-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  const calculateTax = useCallback(
    (monthlyAmountUSD: number) => {
      const monthlyAmountLKR = monthlyAmountUSD * Number(exchangeRateValue);
      setLKRIncome(monthlyAmountLKR);
      const annualAmount = monthlyAmountLKR * 12;

      if (annualAmount <= 1800000) {
        setTax(0);
        setBreakdown({ exempted: annualAmount, slab1: 0, slab2: 0 });
        return;
      }

      let taxableAmount = annualAmount - 1800000;
      let tax = 0;
      const breakdown = { exempted: 1800000, slab1: 0, slab2: 0 };

      if (taxableAmount > 0) {
        const slab1Amount = Math.min(taxableAmount, 1000000);
        tax += slab1Amount * 0.06;
        breakdown.slab1 = slab1Amount;
        taxableAmount -= slab1Amount;
      }

      if (taxableAmount > 0) {
        tax += taxableAmount * 0.15;
        breakdown.slab2 = taxableAmount;
      }

      setTax(Number((tax / 12).toFixed(2)));
      setBreakdown(breakdown);
    },
    [exchangeRateValue]
  );

  useEffect(() => {
    const amount = parseFloat(usdIncome.replace(/,/g, "")) || 0;
    calculateTax(amount);
  }, [usdIncome, exchangeRateValue, calculateTax]);

  const formatCurrency = (value: string) =>
    value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!getTracked() && !calculating) {
      setTracked();
      trackEvent("foreign-income-tax-calculations", {
        tool: "free-tools",
        calculator: "foreign-income-tax-calculator",
      });
    }

    setCalculating(true);

    const formattedValue = formatCurrency(e.target.value);
    setUsdIncome(formattedValue);
  };

  const resetForm = () => {
    setUsdIncome("");
    setExchangeRateValue("300");
    setTax(0);
    setBreakdown({});
    setLKRIncome(0);
  };

  return (
    <div className="w-full max-w-full space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-center text-[#080A3C] mb-6">
          Foreign Tax Calculator
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="income"
              className="text-[#080A3C] font-semibold block mb-2"
            >
              Monthly Profit (USD)
            </label>
            <Input
              id="income"
              type="text"
              value={usdIncome}
              onChange={handleIncomeChange}
              placeholder="Enter your monthly income in USD"
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="exchangeRate"
              className="text-[#080A3C] font-semibold block mb-2"
            >
              Exchange Rate
            </label>
            <Input
              id="exchangeRate"
              type="text"
              value={exchangeRateValue}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setExchangeRateValue(value);
              }}
              placeholder="Enter the Exchange Rate"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="text-sm text-[#080A3C] italic space-y-1 mb-6">
        <p className="break-words">
          * Remitted through a Sri Lankan Bank: If foreign currency is remitted
          to Sri Lanka via a local bank, it is taxed at a maximum rate of 15%.
        </p>
        <p className="break-words">
          * Not Remitted through a Sri Lankan Bank: If not remitted through a
          local bank, it may be subject to progressive individual tax rates,
          potentially up to 36%.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <div>
            <h4 className="font-semibold text-[#080A3C]">
              Converted Monthly Profit (LKR)
            </h4>
            {exchangeRateValue && (
              <p className="text-sm text-muted-foreground">
                Exchange Rate: 1 USD = {exchangeRateValue} LKR
              </p>
            )}
            <p className="font-semibold text-[#080A3C] mt-2 text-lg">
              Rs. {LKRIncome.toLocaleString()}
            </p>
          </div>
        </Card>

        <Card className="p-4">
          <div>
            <h4 className="font-semibold text-[#080A3C]">Monthly Tax (LKR)</h4>
            <p className="font-semibold text-[#080A3C] mt-2 text-lg">
              Rs.{" "}
              {tax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-sm text-muted-foreground">
              Effective Rate:{" "}
              {LKRIncome ? ((tax / LKRIncome) * 100).toFixed(2) + "%" : "0.00%"}
            </p>
          </div>
        </Card>
      </div>

      {/* Table with horizontal scroll only */}
      <div className="w-full border rounded overflow-hidden">
        <ScrollArea className="w-full" orientation="horizontal">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#080A3C] whitespace-nowrap font-semibold">
                  Monthly Profit (Annual Profit/12)
                </TableHead>
                <TableHead className="text-[#080A3C] whitespace-nowrap font-semibold text-center">
                  Rate (%)
                </TableHead>
                <TableHead className="text-[#080A3C] whitespace-nowrap font-semibold text-right">
                  Tax
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-[#080A3C]">
              <TableRow>
                <TableCell className="whitespace-nowrap">
                  Up to 150,000
                </TableCell>
                <TableCell className="text-center whitespace-nowrap">
                  Relief
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  -
                </TableCell>
              </TableRow>
              {Object.entries(breakdown).map(([key, amount], index) =>
                key !== "exempted" && amount > 0 ? (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">
                      {index === 1 ? "First" : "Next"}{" "}
                      {Math.floor(amount / 12).toLocaleString()} LKR
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap">
                      {[6, 15][index - 1]}%
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      Rs.{" "}
                      {((amount * [0.06, 0.15][index - 1]) / 12).toLocaleString(
                        undefined,
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </TableCell>
                  </TableRow>
                ) : null
              )}
              <TableRow className="font-semibold bg-muted">
                <TableCell className="whitespace-nowrap">
                  Effective Tax Rate
                </TableCell>
                <TableCell className="text-center whitespace-nowrap">
                  {LKRIncome ? ((tax / LKRIncome) * 100).toFixed(2) : "0.00"}%
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
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

      <Card className="p-4 mb-6 bg-red-50 border-l-4 border-red-500">
        <div className="flex gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-red-900">DISCLAIMER:</p>
            <p className="text-red-900 italic mt-1 break-words">
              This tax calculator is based on the information available from the
              bill issued by the Inland Revenue Department (IRD) as of February
              21, 2025.
            </p>
          </div>
        </div>
      </Card>

      <div className="flex justify-center">
        <Button
          onClick={resetForm}
          variant="outline"
          className="border-2 border-[#FF612F] text-[#FF612F] hover:bg-[#FF612F] hover:text-white"
        >
          Reset Calculator
        </Button>
      </div>
    </div>
  );
};

export default ForeignCalculator;

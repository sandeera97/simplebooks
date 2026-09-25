"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/utils/trackEvent";

interface MonthData {
  name: string;
  income: string;
  cumulativeIncome: number;
  taxLiability: number;
  monthlyPayable: number;
}

const CumulativeCalculator = () => {
  const months = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
  ];

  const HAS_TRACKED_KEY = "ctc_tracked";

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
  //     trackEvent("cumulative-income-tax-calculations", {
  //       tool: "free-tools",
  //       calculator: "cumulative-income-tax-calculator",
  //     });
  //     setCalculating(true);
  //   }
  // }, []);

  const [monthlyData, setMonthlyData] = useState<MonthData[]>(
    months.map((month) => ({
      name: month,
      income: "",
      cumulativeIncome: 0,
      taxLiability: 0,
      monthlyPayable: 0,
    }))
  );

  const [totalAnnualIncome, setTotalAnnualIncome] = useState(0);
  const [totalAnnualTax, setTotalAnnualTax] = useState(0);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const calculateTaxLiability = (cumulativeIncome: number): number => {
    if (cumulativeIncome <= 1800000) {
      return 0;
    } else if (cumulativeIncome <= 2800000) {
      return cumulativeIncome * 0.06 - 108000;
    } else {
      return cumulativeIncome * 0.15 - 360000;
    }
  };

  const handleIncomeChange = async (index: number, value: string) => {
    if (!getTracked() && !calculating) {
      setTracked();
      trackEvent("cumulative-income-tax-calculations", {
        tool: "free-tools",
        calculator: "cumulative-income-tax-calculator",
      });
    }

    setCalculating(true);

    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const formattedValue = sanitizedValue
      ? parseInt(sanitizedValue).toLocaleString()
      : "";

    const updatedData = [...monthlyData];
    updatedData[index] = {
      ...updatedData[index],
      income: formattedValue,
    };

    setMonthlyData(updatedData);
  };

  useEffect(() => {
    const recalculateAll = () => {
      const newData = [...monthlyData];
      let cumulativeIncome = 0;
      let previousTaxLiability = 0;
      let totalIncome = 0;

      for (let i = 0; i < newData.length; i++) {
        const monthIncome = parseInt(
          newData[i].income.replace(/,/g, "") || "0"
        );
        totalIncome += monthIncome;
        cumulativeIncome += monthIncome;

        const taxLiability = calculateTaxLiability(cumulativeIncome);
        const monthlyPayable = Math.max(0, taxLiability - previousTaxLiability);

        newData[i] = {
          ...newData[i],
          cumulativeIncome,
          taxLiability,
          monthlyPayable,
        };

        previousTaxLiability = taxLiability;
      }

      // Calculate total annual income and tax
      setTotalAnnualIncome(totalIncome);
      setTotalAnnualTax(previousTaxLiability);

      // Calculate effective tax rate
      const rate =
        totalIncome > 0 ? (previousTaxLiability / totalIncome) * 100 : 0;
      setEffectiveTaxRate(rate);

      setMonthlyData(newData);
    };

    recalculateAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyData.map((m) => m.income).join(",")]);

  const resetCalculator = () => {
    setMonthlyData(
      months.map((month) => ({
        name: month,
        income: "",
        cumulativeIncome: 0,
        taxLiability: 0,
        monthlyPayable: 0,
      }))
    );
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-center text-[#080A3C]">
          Monthly Income Input for Tax Year 2025/2026
        </h3>
      </div>

      <div className="border rounded-lg ">
        <ScrollArea className="w-full" orientation="horizontal">
          <Table className="min-w-full md:min-w-0">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap text-[#080A3C] font-semibold px-4 py-3 uppercase tracking-wide border-r border-white/50">
                  Month
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle
                          size={14}
                          className="inline-block ml-1 text-[#FF612F] cursor-help"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Months of the tax year</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
                <TableHead className="whitespace-normal text-[#080A3C] font-semibold px-4 py-3 uppercase tracking-wide border-r border-white/50">
                  Monthly Income (LKR)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle
                          size={14}
                          className="inline-block ml-1 text-[#FF612F] cursor-help"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Enter your income
                          <br /> for this month
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
                <TableHead className="whitespace-normal text-[#080A3C] font-semibold px-4 py-3 uppercase tracking-wide border-r border-white/50">
                  Cumulative Income (LKR)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle
                          size={14}
                          className="inline-block ml-1 text-[#FF612F] cursor-help"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Total income received from <br /> April up to this
                          month
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
                <TableHead className="whitespace-normal text-[#080A3C] font-semibold px-4 py-3 uppercase tracking-wide border-r border-white/50">
                  Tax Liability (LKR)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle
                          size={14}
                          className="inline-block ml-1 text-[#FF612F] cursor-help"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Total tax calculated on <br /> cumulative income
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
                <TableHead className="whitespace-normal text-[#080A3C] font-semibold px-4 py-3 uppercase tracking-wide">
                  Monthly Payable (LKR)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle
                          size={14}
                          className="inline-block ml-1 text-[#FF612F] cursor-help"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Tax amount to be paid for this month <br />{" "}
                          (Difference from previous month&#39;s liability)
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthlyData.map((month, index) => (
                <TableRow
                  key={month.name}
                  className={month.income ? "bg-[#FFF6F1] hover" : ""}
                >
                  <TableCell className="whitespace-nowrap text-[#080A3C]">
                    {month.name}
                  </TableCell>
                  <TableCell className="md:px-2">
                    <Input
                      placeholder="Enter income"
                      value={month.income}
                      onChange={(e) =>
                        handleIncomeChange(index, e.target.value)
                      }
                      className="max-w-[180px]"
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-[#080A3C] md:px-2">
                    {month.cumulativeIncome > 0
                      ? `Rs. ${month.cumulativeIncome.toLocaleString()}`
                      : "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-[#080A3C] md:px-2">
                    {month.taxLiability > 0
                      ? `Rs. ${formatCurrency(month.taxLiability)}`
                      : "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-[#080A3C] md:px-2">
                    {month.monthlyPayable > 0
                      ? `Rs. ${formatCurrency(month.monthlyPayable)}`
                      : "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={resetCalculator}
          className="bg-white text-[#FF612F] border-2 border-[#FF612F] hover:bg-[#FF612F] hover:text-white"
        >
          Reset Calculator
        </Button>
      </div>

      {/* Tax Summary Section */}
      <Card className="p-5 bg-white">
        <h3 className="font-semibold text-lg text-[#080A3C] mb-3">
          Tax Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f8f9fa] p-4 rounded-md">
            <div className="text-sm text-muted-foreground">
              Total Annual Income
            </div>
            <div className="text-xl font-semibold text-[#080A3C]">
              Rs.{" "}
              {totalAnnualIncome.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="bg-[#f8f9fa] p-4 rounded-md">
            <div className="text-sm text-muted-foreground">
              Total Annual Tax
            </div>
            <div className="text-xl font-semibold text-[#FF612F]">
              Rs.{" "}
              {totalAnnualTax.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="bg-[#f8f9fa] p-4 rounded-md">
            <div className="text-sm text-muted-foreground">
              Effective Tax Rate
            </div>
            <div className="text-xl font-semibold text-[#080A3C]">
              {effectiveTaxRate.toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 border-l-4 border-amber-500 bg-amber-50 text-sm rounded-md">
          <p className="text-amber-800">
            <span className="font-semibold">Important:</span> According to IRD
            regulations, tax payments should begin when the cumulative income
            exceeds Rs. 1,800,000. The monthly payable amount is due on or
            before the 15th day of the following month.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-[#080A3C]">
            How to use this calculator:
          </h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              Enter your income for each month of the tax year (April to March)
            </li>
            <li>
              The calculator will automatically compute the cumulative income
            </li>
            <li>
              Tax liability is calculated on the cumulative amount according to
              tax brackets
            </li>
            <li>
              Monthly payable is the difference between current and previous
              month&#39;s tax liability
            </li>
            <li>You can update or clear values at any time to recalculate</li>
          </ol>
        </div>

        <div className="mt-4 p-3 border-l-4 border-red-500 bg-red-50 text-sm rounded-md">
          <p className="text-red-800">
            <span className="font-semibold">DISCLAIMER:</span> This tax
            calculator is based on the information available from the Inland
            Revenue Department (IRD) Tax Table 08 for the year of assessment
            2025/2026.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CumulativeCalculator;

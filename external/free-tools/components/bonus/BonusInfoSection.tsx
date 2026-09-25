"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Lightbulb } from "lucide-react";

const BonusInfoSection = () => {
  return (
    <div className="space-y-6 mt-8">
      {/* What counts as a bonus section */}
      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-blue-900">
            <Info className="h-5 w-5" />
            What counts as a bonus or lump-sum payment?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 space-y-2">
          <ul className="space-y-1 text-sm list-none">
            <li>• Annual bonuses and incentive payments</li>
            <li>• Leave encashment payments</li>
            <li>• Medical expense reimbursements</li>
            <li>• Salary arrears or back pay</li>
            <li>• Share allocations from employee share schemes</li>
            <li>• Any other one-time payments</li>
          </ul>
        </CardContent>
      </Card>

      {/* How to use this calculator section */}
      <Card className="border-green-200 bg-green-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-green-900">
            <Lightbulb className="h-5 w-5" />
            Tips for use this calculator:
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-green-800">
          <ul className="space-y-1 text-sm list-none">
            <li>• Enter your regular monthly salary, not your annual salary</li>
            <li>
              • Make sure to include all months in the current tax year (April
              to March)
            </li>
            <li>
              • If your salary changes during the year, use your current salary
              for past months and expected salary for future months
            </li>
            <li>
              • If you&#39;ve received multiple bonuses, include previous bonus
              tax already paid
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Disclaimer section */}
      <div className="p-4 border-l-4 border-red-500 bg-red-50/50 rounded-md">
        <p className="text-sm">
          <span className="font-semibold text-red-800">DISCLAIMER:</span>{" "}
          <span className="text-red-700">
            This calculator is based on the Sri Lanka Inland Revenue Department
            regulations for 2025-2026. While we strive for accuracy, this is for
            information only and should not replace professional tax advice. For
            specific situations, please consult a qualified tax professional.
          </span>
        </p>
      </div>
    </div>
  );
};

export default BonusInfoSection;

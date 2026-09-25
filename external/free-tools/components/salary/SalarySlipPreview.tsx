
import { SalarySlipData } from "@/utils/salaryUtils";

interface SalarySlipPreviewProps {
  data: SalarySlipData;
  calculations: {
    totalEPFableAmount: number;
    epfAmount: number;
    etfAmount: number;
    totalAPITableAmount: number;
    apitAmount: number;
    grossSalary: number;
    netSalary: number;
    totalAllowances: number;
  };
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    minimumFractionDigits: 2,
  }).format(amount);
};

const SalarySlipPreview = ({ data, calculations }: SalarySlipPreviewProps) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-8 font-poppins">
      <div className="border-2 border-gray-200 rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-1">{data.employeeDetails.companyName}</h1>
          <h2 className="text-xl">Salary Slip - {data.employeeDetails.month}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Employee Details</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 font-medium">Name:</td>
                  <td className="py-1">{data.employeeDetails.fullName}</td>
                </tr>
                {data.employeeDetails.designation && (
                  <tr>
                    <td className="py-1 font-medium">Designation:</td>
                    <td className="py-1">{data.employeeDetails.designation}</td>
                  </tr>
                )}
                {data.employeeDetails.epfNumber && (
                  <tr>
                    <td className="py-1 font-medium">EPF No:</td>
                    <td className="py-1">{data.employeeDetails.epfNumber}</td>
                  </tr>
                )}
                {data.employeeDetails.nicNumber && (
                  <tr>
                    <td className="py-1 font-medium">NIC No:</td>
                    <td className="py-1">{data.employeeDetails.nicNumber}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Payment Details</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 font-medium">Period:</td>
                  <td className="py-1">{data.employeeDetails.month}</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium">Issue Date:</td>
                  <td className="py-1">{currentDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-4 mb-6">
          <h3 className="font-semibold mb-3 text-gray-700">Earnings</h3>
          <table className="w-full">
            <thead className="text-left bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-sm font-medium">Description</th>
                <th className="px-4 py-2 text-sm font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2">Basic Salary</td>
                <td className="px-4 py-2">{formatCurrency(data.salaryDetails.basicSalary)}</td>
              </tr>
              
              {data.allowances.map((allowance, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-4 py-2">{allowance.type}</td>
                  <td className="px-4 py-2">{formatCurrency(allowance.amount)}</td>
                </tr>
              ))}
              
              <tr className="bg-gray-50 font-medium">
                <td className="px-4 py-2">Gross Salary</td>
                <td className="px-4 py-2">{formatCurrency(calculations.grossSalary)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-t-2 border-gray-200 pt-4 mb-6">
          <h3 className="font-semibold mb-3 text-gray-700">Deductions</h3>
          <table className="w-full">
            <thead className="text-left bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-sm font-medium">Description</th>
                <th className="px-4 py-2 text-sm font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2">EPF (8%)</td>
                <td className="px-4 py-2">{formatCurrency(calculations.epfAmount)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2">APIT</td>
                <td className="px-4 py-2">{formatCurrency(calculations.apitAmount)}</td>
              </tr>
              <tr className="bg-gray-50 font-medium">
                <td className="px-4 py-2">Total Deductions</td>
                <td className="px-4 py-2">
                  {formatCurrency(calculations.epfAmount + calculations.apitAmount)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-t-2 border-gray-200 pt-4 mb-6">
          <table className="w-full">
            <tbody>
              <tr className="bg-gray-100 font-bold">
                <td className="px-4 py-3">Net Salary</td>
                <td className="px-4 py-3">{formatCurrency(calculations.netSalary)}</td>
              </tr>
              <tr className="text-xs text-gray-500">
                <td className="px-4 pt-2" colSpan={2}>
                  * ETF Contribution by Employer (3%): {formatCurrency(calculations.etfAmount)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          <p>This is a computer-generated salary slip and does not require signature.</p>
        </div>
      </div>
    </div>
  );
};

export default SalarySlipPreview;

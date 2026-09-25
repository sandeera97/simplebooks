import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  SalarySlipData,
  calculateEPF,
  calculateETF,
  calculateAPITTax,
  calculateTotalEPFableAmount,
  calculateTotalAPITableAmount,
} from "@/utils/salaryUtils";
import { Eye, Download, X } from "lucide-react";
import SalarySlipPreview from "./SalarySlipPreview";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

interface SalarySlipResultProps {
  data: SalarySlipData;
  onReset: () => void;
  onBack: () => void;
}

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
  },
  border: {
    border: "1pt solid #ddd",
    padding: 24,
    height: "100%",
    borderRadius: 8,
  },
  header: {
    textAlign: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#080A3C",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "1pt solid #bbb",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  label: {
    width: "50%",
    fontSize: 11,
    fontWeight: "600",
    color: "#333",
  },
  value: {
    width: "50%",
    fontSize: 11,
    textAlign: "right",
    color: "#111",
  },
  table: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "#fff",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f3f6f9",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  col1: {
    width: "60%",
    fontSize: 12,
    fontWeight: "700",
    paddingLeft: 8,
    color: "#080A3C",
  },
  col2: {
    width: "40%",
    fontSize: 12,
    textAlign: "right",
    paddingRight: 8,
    fontWeight: "700",
    color: "#080A3C",
  },
  total: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "#f0f4f8",
    fontWeight: "700",
    borderTopWidth: 1,
    borderTopColor: "#bbb",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 9,
    color: "#999",
    fontStyle: "italic",
  },
});

// Create PDF Document Component
const SalarySlipDocument = ({
  data,
  calculations,
}: {
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
}) => {
  // Format currency for PDF
  const formatCurrencyPDF = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{data.employeeDetails.companyName}</Text>
            <Text style={styles.subtitle}>
              Salary Slip - {data.employeeDetails.month}
            </Text>
          </View>

          {/* Employee Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Employee Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{data.employeeDetails.fullName}</Text>
            </View>
            {data.employeeDetails.designation && (
              <View style={styles.row}>
                <Text style={styles.label}>Designation:</Text>
                <Text style={styles.value}>
                  {data.employeeDetails.designation}
                </Text>
              </View>
            )}
            {data.employeeDetails.epfNumber && (
              <View style={styles.row}>
                <Text style={styles.label}>EPF No:</Text>
                <Text style={styles.value}>
                  {data.employeeDetails.epfNumber}
                </Text>
              </View>
            )}
            {data.employeeDetails.nicNumber && (
              <View style={styles.row}>
                <Text style={styles.label}>NIC No:</Text>
                <Text style={styles.value}>
                  {data.employeeDetails.nicNumber}
                </Text>
              </View>
            )}
          </View>

          {/* Payment Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Period:</Text>
              <Text style={styles.value}>{data.employeeDetails.month}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Issue Date:</Text>
              <Text style={styles.value}>{currentDate}</Text>
            </View>
          </View>

          {/* Earnings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Earnings</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.col1}>Description</Text>
                <Text style={styles.col2}>Amount</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.col1}>Basic Salary</Text>
                <Text style={styles.col2}>
                  LKR {formatCurrencyPDF(data.salaryDetails.basicSalary)}
                </Text>
              </View>
              {data.allowances.map((allowance, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.col1}>{allowance.type}</Text>
                  <Text style={styles.col2}>
                    LKR {formatCurrencyPDF(allowance.amount)}
                  </Text>
                </View>
              ))}
              <View style={styles.total}>
                <Text style={styles.col1}>Gross Salary</Text>
                <Text style={styles.col2}>
                  LKR {formatCurrencyPDF(calculations.grossSalary)}
                </Text>
              </View>
            </View>
          </View>

          {/* Deductions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deductions</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.col1}>Description</Text>
                <Text style={styles.col2}>Amount</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.col1}>EPF (8%)</Text>
                <Text style={styles.col2}>
                  LKR {formatCurrencyPDF(calculations.epfAmount)}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.col1}>APIT</Text>
                <Text style={styles.col2}>
                  LKR {formatCurrencyPDF(calculations.apitAmount)}
                </Text>
              </View>
              <View style={styles.total}>
                <Text style={styles.col1}>Total Deductions</Text>
                <Text style={styles.col2}>
                  LKR{" "}
                  {formatCurrencyPDF(
                    calculations.epfAmount + calculations.apitAmount
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* Net Salary */}
          <View style={styles.section}>
            <View style={styles.total}>
              <Text style={styles.col1}>Net Salary</Text>
              <Text style={styles.col2}>
                LKR {formatCurrencyPDF(calculations.netSalary)}
              </Text>
            </View>
            <View style={[styles.row, { marginTop: 5 }]}>
              <Text style={[styles.label, { fontSize: 8, color: "#666666" }]}>
                * ETF Contribution by Employer (3%): LKR{" "}
                {formatCurrencyPDF(calculations.etfAmount)}
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text>
              This is a computer-generated salary slip and does not require
              signature.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const SalarySlipResult = ({ data, onReset, onBack }: SalarySlipResultProps) => {
  const [showPreview, setShowPreview] = useState(false);
  const [calculations, setCalculations] = useState({
    totalEPFableAmount: 0,
    epfAmount: 0,
    etfAmount: 0,
    totalAPITableAmount: 0,
    apitAmount: 0,
    grossSalary: 0,
    netSalary: 0,
    totalAllowances: 0,
  });

  useEffect(() => {
    const calculateSalary = async () => {
      const totalEPFableAmount = calculateTotalEPFableAmount(
        data.salaryDetails.basicSalary,
        data.salaryDetails.isEPFETFEligible,
        data.allowances
      );

      const epfAmount = calculateEPF(totalEPFableAmount);
      const etfAmount = calculateETF(totalEPFableAmount);

      const totalAPITableAmount = calculateTotalAPITableAmount(
        data.salaryDetails.basicSalary,
        data.salaryDetails.isAPITEligible,
        data.allowances
      );

      const apitAmount = await calculateAPITTax(true, totalAPITableAmount);

      const totalAllowances = data.allowances.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      const grossSalary = data.salaryDetails.basicSalary + totalAllowances;

      const netSalary = grossSalary - epfAmount - apitAmount;

      setCalculations({
        totalEPFableAmount,
        epfAmount,
        etfAmount,
        totalAPITableAmount,
        apitAmount,
        grossSalary,
        netSalary,
        totalAllowances,
      });
    };

    calculateSalary();
  }, [data]);

  const handleDownloadPDF = async () => {
    try {
      // Generate PDF document
      const blob = await pdf(
        <SalarySlipDocument data={data} calculations={calculations} />
      ).toBlob();

      // Create a formatted date string for the file name
      const formattedMonth = data.employeeDetails.month.replace(/\s+/g, "_");

      // Create a link element to download the PDF
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Salary_Slip_${data.employeeDetails.fullName.replace(
        /\s+/g,
        "_"
      )}_${formattedMonth}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-2 text-center text-[#080A3C]">
        Here&#39;s your employee&#39;s salary slip!
      </h2>

      <p className="text-center text-gray-600 mb-8">
        Since this is computer generated, you will not need a signature or seal.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
        <Button
          onClick={() => setShowPreview(true)}
          className="bg-[#080A3C] hover:bg-[#080A3C/90] text-white flex items-center gap-2 px-5 py-3 rounded-lg shadow-md transition"
        >
          <Eye className="h-5 w-5" />
          Preview Pay Slip
        </Button>

        <Button
          onClick={handleDownloadPDF}
          className="bg-[#080A3C] hover:bg-[#080A3C/90] text-white flex items-center gap-2 px-5 py-3 rounded-lg shadow-md transition"
        >
          <Download className="h-5 w-5" />
          Download Pay Slip
        </Button>
      </div>

      <div className="flex justify-center gap-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="w-40 py-3 font-medium rounded-lg"
        >
          Back
        </Button>

        <Button
          type="button"
          onClick={onReset}
          className="w-40 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition"
        >
          Create New
        </Button>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-[#080A3C]">
                  Salary Slip Preview
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPreview(false)}
                  aria-label="Close preview"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div id="salary-slip-preview" className="overflow-auto">
                <SalarySlipPreview data={data} calculations={calculations} />
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(false)}
                  className="py-2 px-6"
                >
                  Close
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  className="bg-[#080A3C] hover:bg-[#080A3C/90] text-white flex items-center gap-2 py-2 px-6 rounded-lg transition"
                >
                  <Download className="h-5 w-5" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalarySlipResult;

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

interface WhtCertificateSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToEdit: () => void;
  certificateData: {
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
}

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  border: {
    border: "1pt solid black",
    padding: 16,
    height: "100%",
  },
  title: {
    fontSize: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  field: {
    marginBottom: 3,
    fontSize: 10,
    color: "#444444",
  },
  fieldValue: {
    fontSize: 10,
    marginBottom: 8,
    padding: 4,
    backgroundColor: "#f9f9f9",
    border: "0.5pt solid #cccccc",
    borderRadius: 2,
  },
  heading: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "#222222",
  },
  normalText: {
    fontSize: 10,
    marginVertical: 6,
  },
  tableContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  tableHeader: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f5f5f5",
  },
  tableRow: {
    flexDirection: "row",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  tableHeaderCell: {
    padding: 5,
    fontSize: 9,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: "#000",
    textAlign: "center",
  },
  lastHeaderCell: {
    padding: 5,
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    padding: 5,
    fontSize: 9,
    borderRightWidth: 1,
    borderRightColor: "#000",
    justifyContent: "center",
  },
  lastTableCell: {
    padding: 5,
    fontSize: 9,
    justifyContent: "center",
  },
  footer: {
    marginTop: 20,
    fontSize: 9,
  },
  infoBox: {
    marginTop: 5,
    padding: 5,
    border: "0.5pt solid #cccccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
  },
  signatureSection: {
    marginTop: 15,
    fontSize: 9,
  },
  signatureLabel: {
    fontSize: 9,
    marginBottom: 3,
    color: "#444444",
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#333333",
  },
});

// Define the cell widths
const cellWidths = {
  type: "20%",
  amount: "20%",
  notSubject: "20%",
  rate: "10%",
  wht: "15%",
  net: "15%",
};

// Create PDF Document component
const WhtCertificateDocument = ({
  certificateData,
}: {
  certificateData: WhtCertificateSuccessProps["certificateData"];
}) => {
  // Generate a random certificate serial number
  const certificateNo = `06-${new Date().getFullYear()}/R${Math.floor(
    Math.random() * 10000
  )}`;

  // Format current date as DD Month YYYY
  const formattedDate = certificateData.dateOfPayment
    ? new Date(certificateData.dateOfPayment).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

  // Calculate WHT amount
  const amount = parseFloat(certificateData.amount);
  const whtRate = certificateData.incomeType === "Rental Income" ? 10 : 5;
  const whtAmount = (amount * whtRate) / 100;
  const netAmount = amount - whtAmount;

  // Format dates
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const fromDate = formatDate(certificateData.paymentPeriodFrom);
  const toDate = formatDate(certificateData.paymentPeriodTo);

  // Payment type
  const paymentType =
    certificateData.incomeType === "Rental Income" ? "Rent" : "Service Fee";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={styles.title}>
              Certificate No./ Serial No.: {certificateNo}
            </Text>
            <Text style={styles.title}>Date: {formattedDate}</Text>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={styles.field}>TIN of the Withholding Agent:</Text>
            <View style={styles.fieldValue}>
              <Text>{certificateData.withholdingAgentTIN}</Text>
            </View>
          </View>

          <Text style={styles.heading}>
            Certificate of Withholding Tax (WHT)/ Advance Income Tax (AIT)
            Deduction
          </Text>

          <View style={{ marginBottom: 10 }}>
            <Text style={styles.field}>
              Name and address of the Withholding Agent:
            </Text>
            <View style={styles.fieldValue}>
              <Text>{certificateData.withholdingAgentName}</Text>
              <Text>{certificateData.withholdingAgentAddress}</Text>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={styles.field}>
              Name and address of the Withholdee:
            </Text>
            <View style={styles.fieldValue}>
              <Text>{certificateData.withholdeeName}</Text>
              <Text>{certificateData.withholdeeAddress}</Text>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={styles.field}>
              National Identity Card No. /Passport No. / Tax Identification No.:
            </Text>
            <View style={styles.fieldValue}>
              <Text>{certificateData.withholdeeTIN}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={{ width: "50%" }}>
              <Text style={styles.field}>Payment made for Period from:</Text>
              <View style={styles.fieldValue}>
                <Text>{fromDate}</Text>
              </View>
            </View>
            <View style={{ width: "50%", paddingLeft: 5 }}>
              <Text style={styles.field}>to:</Text>
              <View style={styles.fieldValue}>
                <Text>{toDate}</Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={styles.field}>Gross Amounts (Rs.):</Text>
            <View style={styles.fieldValue}>
              <Text>{Number(certificateData.amount).toLocaleString()}</Text>
            </View>
          </View>

          <View style={styles.tableContainer}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <View
                style={[styles.tableHeaderCell, { width: cellWidths.type }]}
              >
                <Text>Payment Type</Text>
              </View>
              <View
                style={[styles.tableHeaderCell, { width: cellWidths.amount }]}
              >
                <Text>Amount Subject to WHT/AIT (Rs.)</Text>
              </View>
              <View
                style={[
                  styles.tableHeaderCell,
                  { width: cellWidths.notSubject },
                ]}
              >
                <Text>Amount Not Subject to WHT/AIT (Rs.)</Text>
              </View>
              <View
                style={[styles.tableHeaderCell, { width: cellWidths.rate }]}
              >
                <Text>WHT/AIT Rate (%)</Text>
              </View>
              <View style={[styles.tableHeaderCell, { width: cellWidths.wht }]}>
                <Text>Amount of WHT/AIT Deducted (Rs.)</Text>
              </View>
              <View style={[styles.lastHeaderCell, { width: cellWidths.net }]}>
                <Text>Net Amount Paid (Rs.)</Text>
              </View>
            </View>

            {/* Data Row */}
            <View style={styles.tableRow}>
              <View style={[styles.tableCell, { width: cellWidths.type }]}>
                <Text>{paymentType}</Text>
              </View>
              <View style={[styles.tableCell, { width: cellWidths.amount }]}>
                <Text>{Number(certificateData.amount).toLocaleString()}</Text>
              </View>
              <View
                style={[styles.tableCell, { width: cellWidths.notSubject }]}
              >
                <Text>0</Text>
              </View>
              <View style={[styles.tableCell, { width: cellWidths.rate }]}>
                <Text>{whtRate}%</Text>
              </View>
              <View style={[styles.tableCell, { width: cellWidths.wht }]}>
                <Text>{whtAmount.toLocaleString()}</Text>
              </View>
              <View style={[styles.lastTableCell, { width: cellWidths.net }]}>
                <Text>{netAmount.toLocaleString()}</Text>
              </View>
            </View>

            {/* Total Row */}
            <View style={styles.tableRow}>
              <View
                style={[
                  styles.tableCell,
                  { width: cellWidths.type, fontWeight: "bold" },
                ]}
              >
                <Text style={{ fontWeight: "bold" }}>Total</Text>
              </View>
              <View style={[styles.tableCell, { width: cellWidths.amount }]}>
                <Text style={{ fontWeight: "bold" }}>
                  {Number(certificateData.amount).toLocaleString()}
                </Text>
              </View>
              <View
                style={[styles.tableCell, { width: cellWidths.notSubject }]}
              >
                <Text style={{ fontWeight: "bold" }}>0</Text>
              </View>
              <View style={[styles.tableCell, { width: cellWidths.rate }]}>
                <Text style={{ fontWeight: "bold" }}></Text>
              </View>
              <View style={[styles.tableCell, { width: cellWidths.wht }]}>
                <Text style={{ fontWeight: "bold" }}>
                  {whtAmount.toLocaleString()}
                </Text>
              </View>
              <View style={[styles.lastTableCell, { width: cellWidths.net }]}>
                <Text style={{ fontWeight: "bold" }}>
                  {netAmount.toLocaleString()}
                </Text>
              </View>
            </View>
          </View>

          {/* New line added below the table */}
          <View style={{ marginTop: 10, marginBottom: 15 }}>
            <Text
              style={{ fontSize: 10, fontStyle: "italic", textAlign: "center" }}
            >
              Above deducted WHT/AIT was paid to the Commissioner General of
              Inland Revenue as follows:
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.sectionHeader}>Payment Information:</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <View style={{ width: "48%" }}>
                <Text style={styles.signatureLabel}>
                  Cheque/Auto payment receipt No.
                </Text>
                <View style={styles.infoBox}>
                  <Text>{certificateData.chequeNumber}</Text>
                </View>
              </View>
              <View style={{ width: "48%" }}>
                <Text style={styles.signatureLabel}>Date of Payment</Text>
                <View style={styles.infoBox}>
                  <Text>{formattedDate}</Text>
                </View>
              </View>
            </View>

            <View style={styles.signatureSection}>
              <Text style={styles.signatureLabel}>
                Name and signature of the Authorized Officer
              </Text>
              <View style={styles.infoBox}>
                <Text>{certificateData.authorizedOfficerName}</Text>
              </View>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text style={styles.signatureLabel}>Date</Text>
              <View style={styles.infoBox}>
                <Text>{formattedDate}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const WhtCertificateSuccess = ({
  isOpen,
  onClose,
  onBackToEdit,
  certificateData,
}: WhtCertificateSuccessProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showWarningDialog, setShowWarningDialog] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);
  const { toast } = useToast();

  // Calculate WHT amount for preview
  const amount = parseFloat(certificateData.amount);
  const whtRate = certificateData.incomeType === "Rental Income" ? 10 : 5;
  const whtAmount = (amount * whtRate) / 100;
  const netAmount = amount - whtAmount;

  // Generate a random certificate serial number
  const certificateNo = `06-${new Date().getFullYear()}/R${Math.floor(
    Math.random() * 10000
  )}`;

  const handleDownloadPDF = async () => {
    setIsGenerating(true);

    try {
      // Generate PDF document
      const blob = await pdf(
        <WhtCertificateDocument certificateData={certificateData} />
      ).toBlob();

      // Create a formatted date string from payment period for the file name
      const fromDate = new Date(certificateData.paymentPeriodFrom);
      const formattedDate = `${fromDate.getFullYear()}-${String(
        fromDate.getMonth() + 1
      ).padStart(2, "0")}`;

      // Create a link element to download the PDF
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `WHT_Certificate_${certificateData.withholdeeName.replace(
        /\s+/g,
        "_"
      )}_${formattedDate}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setHasDownloaded(true);

      toast({
        title: "PDF Downloaded Successfully",
        description: "Your WHT certificate has been downloaded.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error Generating PDF",
        description:
          "There was an error generating your certificate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Update isDialogOpen whenever isOpen prop changes
  React.useEffect(() => {
    setIsDialogOpen(isOpen);
  }, [isOpen]);

  const handleDialogOpenChange = (open: boolean) => {
    if (!open && !hasDownloaded) {
      // Prevent dialog from closing and show warning
      setShowWarningDialog(true);
    } else {
      // Allow closing if downloaded
      setIsDialogOpen(false);
      onClose();
    }
  };

  const closeDialogCompletely = () => {
    setIsDialogOpen(false);
    setShowWarningDialog(false);
    onClose();
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="sm:max-w-md font-poppins">
          <DialogTitle className="text-xl font-bold">
            Your certificate is ready!
          </DialogTitle>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Need to tweak something? Just update the form and we&#39;ll
              refresh it for you
            </p>

            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                className="flex items-center gap-1"
                onClick={onBackToEdit}
              >
                <ArrowLeft size={16} />
                Back to Edit
              </Button>
              <Button
                className={`ml-auto ${
                  hasDownloaded
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-[#FF612F] hover:bg-[#FF612F]/90"
                } text-white flex items-center gap-1`}
                onClick={handleDownloadPDF}
                disabled={isGenerating}
              >
                <Download size={16} />
                {hasDownloaded ? "Downloaded" : "Download PDF"}
              </Button>
            </div>

            {/* Certificate Preview with ScrollArea */}
            <div className="border rounded-md p-4 mt-4 bg-gray-50">
              <div className="text-center space-y-1">
                <h3 className="font-bold">WHT Certificate</h3>
                <p className="text-xs text-gray-500">
                  Certificate No: {certificateNo}
                </p>
              </div>

              <ScrollArea className="h-[280px] mt-4" orientation="vertical">
                <div className="space-y-3 text-sm px-1">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <div>
                      <p className="font-medium">Withholding Agent:</p>
                      <p className="text-gray-600 text-xs truncate">
                        {certificateData.withholdingAgentName}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Agent TIN:</p>
                      <p className="text-gray-600 text-xs">
                        {certificateData.withholdingAgentTIN}
                      </p>
                    </div>

                    <div>
                      <p className="font-medium">Withholdee:</p>
                      <p className="text-gray-600 text-xs truncate">
                        {certificateData.withholdeeName}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Withholdee TIN:</p>
                      <p className="text-gray-600 text-xs">
                        {certificateData.withholdeeTIN}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="font-medium">Period:</p>
                      <p className="text-gray-600 text-xs">
                        {formatDate(certificateData.paymentPeriodFrom)} -{" "}
                        {formatDate(certificateData.paymentPeriodTo)}
                      </p>
                    </div>

                    <div className="col-span-2 pt-3 border-t">
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <p className="font-medium">Amount:</p>
                          <p className="text-gray-600">
                            Rs. {Number(amount).toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">WHT ({whtRate}%):</p>
                          <p className="text-gray-600">
                            Rs. {whtAmount.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Net:</p>
                          <p className="text-gray-600">
                            Rs. {netAmount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="text-center mt-4">
                <p className="text-xs text-gray-500 italic">
                  Preview only. Download for complete certificate.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Warning dialog when trying to close without downloading */}
      <AlertDialog open={showWarningDialog} onOpenChange={setShowWarningDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Certificate Not Downloaded</AlertDialogTitle>
            <AlertDialogDescription>
              You haven&#39;t downloaded your WHT certificate yet. This document
              is important for your records.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setShowWarningDialog(false);
                setHasDownloaded(true); // Allow closing without download
                closeDialogCompletely();
              }}
            >
              Close Without Downloading
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-[#FF612F] hover:bg-[#FF612F]/90"
              onClick={() => {
                setShowWarningDialog(false);
                handleDownloadPDF();
              }}
            >
              Download Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default WhtCertificateSuccess;

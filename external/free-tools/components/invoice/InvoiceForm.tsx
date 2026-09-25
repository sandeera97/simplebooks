import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InvoiceData, InvoiceTheme } from "@/types/invoice";
import InvoicePreview from "./InvoicePreview";
import { FileText, Image, Trash, Palette, Printer, Eye } from "lucide-react";

interface InvoiceFormProps {
  invoiceData: InvoiceData;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({
  invoiceData,
  setInvoiceData,
}) => {
  const [activeTab, setActiveTab] = useState<"settings" | "preview">(
    "settings"
  );
  const [selectedTheme, setSelectedTheme] = useState<InvoiceTheme>("blue");
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [showThemeOptions, setShowThemeOptions] = useState<boolean>(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoImage(event.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const generatePdf = () => {
    window.print(); // Simple print for now
  };

  const toggleThemeOptions = () => {
    setShowThemeOptions(!showThemeOptions);
  };

  return (
    <div className="grid md:grid-cols-5 gap-6">
      <div className="md:col-span-1">
        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-4">
              <Button
                variant={activeTab === "settings" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <FileText className="mr-2 h-4 w-4" />
                Settings
              </Button>

              <Button
                variant={activeTab === "preview" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveTab("preview")}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={toggleThemeOptions}
              >
                <Palette className="mr-2 h-4 w-4" />
                Theme
              </Button>

              {showThemeOptions && (
                <div className="flex flex-wrap gap-2 pl-8">
                  <button
                    className={`w-6 h-6 rounded-full bg-blue-500 ${
                      selectedTheme === "blue" ? "ring-2 ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedTheme("blue")}
                  />
                  <button
                    className={`w-6 h-6 rounded-full bg-green-500 ${
                      selectedTheme === "green" ? "ring-2 ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedTheme("green")}
                  />
                  <button
                    className={`w-6 h-6 rounded-full bg-red-500 ${
                      selectedTheme === "red" ? "ring-2 ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedTheme("red")}
                  />
                  <button
                    className={`w-6 h-6 rounded-full bg-purple-500 ${
                      selectedTheme === "purple" ? "ring-2 ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedTheme("purple")}
                  />
                  <button
                    className={`w-6 h-6 rounded-full bg-black ${
                      selectedTheme === "black" ? "ring-2 ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedTheme("black")}
                  />
                </div>
              )}

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => document.getElementById("logo-upload")?.click()}
              >
                <Image className="mr-2 h-4 w-4" />
                {logoImage ? "Change Logo" : "Add Logo"}
              </Button>

              {logoImage && (
                <div className="pl-8 relative">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="h-12 w-12 object-contain border rounded"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                    onClick={() => setLogoImage(null)}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
              )}

              <input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoUpload}
              />

              <Button onClick={generatePdf} className="w-full justify-start">
                <Printer className="mr-2 h-4 w-4" />
                Print / Download
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-4">
        <InvoicePreview
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
          logoImage={logoImage}
          theme={selectedTheme}
        />
      </div>
    </div>
  );
};

export default InvoiceForm;

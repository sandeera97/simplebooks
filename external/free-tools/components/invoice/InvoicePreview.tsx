
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { InvoiceData, InvoiceTheme, InvoiceItem } from "@/types/invoice";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash, Plus } from "lucide-react";

interface InvoicePreviewProps {
  invoiceData: InvoiceData;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
  logoImage: string | null;
  theme: InvoiceTheme;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ 
  invoiceData, 
  setInvoiceData, 
  logoImage, 
  theme 
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  const getThemeColor = () => {
    switch (theme) {
      case "blue": return "bg-blue-500";
      case "green": return "bg-green-500";
      case "red": return "bg-red-500";
      case "purple": return "bg-purple-500";
      case "black": return "bg-black";
      default: return "bg-blue-500";
    }
  };

  const handleInputChange = (field: keyof InvoiceData, value: any) => {
    setInvoiceData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (field: 'invoiceDate' | 'dueDate', value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: new Date(value)
    }));
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: any) => {
    const newItems = [...invoiceData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    if (field === 'quantity' || field === 'rate') {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }
    
    setInvoiceData(prev => ({
      ...prev,
      items: newItems
    }));
    
    calculateAmounts();
  };

  const handleAddItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, rate: 0, amount: 0 }]
    }));
    calculateAmounts();
  };

  const handleRemoveItem = (index: number) => {
    if (invoiceData.items.length > 1) {
      setInvoiceData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }));
      calculateAmounts();
    }
  };

  const calculateAmounts = () => {
    const items = [...invoiceData.items];
    
    // Calculate amount for each item
    items.forEach(item => {
      item.amount = item.quantity * item.rate;
    });
    
    // Calculate subtotal
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    
    // Calculate tax
    const taxAmount = subtotal * (invoiceData.tax / 100);
    
    // Calculate total
    const total = subtotal + taxAmount;
    
    setInvoiceData(prev => ({
      ...prev,
      items,
      subtotal,
      total
    }));
  };

  return (
    <Card className="border shadow-md print:shadow-none">
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            {logoImage && (
              <img src={logoImage} alt="Logo" className="h-20 w-20 object-contain" />
            )}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">INVOICE</h1>
              <div className="mt-1">
                <Input
                  className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                  value={invoiceData.yourCompanyName}
                  onChange={(e) => handleInputChange("yourCompanyName", e.target.value)}
                  placeholder="Your Company Name"
                />
                <Input
                  className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                  value={invoiceData.yourName}
                  onChange={(e) => handleInputChange("yourName", e.target.value)}
                  placeholder="Your Name"
                />
                <Input
                  className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                  value={invoiceData.yourAddress}
                  onChange={(e) => handleInputChange("yourAddress", e.target.value)}
                  placeholder="Your Address"
                />
                <Input
                  className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                  value={invoiceData.yourCity}
                  onChange={(e) => handleInputChange("yourCity", e.target.value)}
                  placeholder="Your City"
                />
                <Input
                  className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                  value={invoiceData.yourCountry}
                  onChange={(e) => handleInputChange("yourCountry", e.target.value)}
                  placeholder="Your Country"
                />
              </div>
            </div>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex space-x-2 items-center">
              <span className="font-medium w-24">Invoice #:</span>
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                value={invoiceData.invoiceNumber}
                onChange={(e) => handleInputChange("invoiceNumber", e.target.value)}
                placeholder="INV-001"
              />
            </div>
            <div className="flex space-x-2 items-center">
              <span className="font-medium w-24">Invoice Date:</span>
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                type="date"
                value={formatDate(invoiceData.invoiceDate)}
                onChange={(e) => handleDateChange("invoiceDate", e.target.value)}
              />
            </div>
            <div className="flex space-x-2 items-center">
              <span className="font-medium w-24">Due Date:</span>
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                type="date"
                value={formatDate(invoiceData.dueDate)}
                onChange={(e) => handleDateChange("dueDate", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="my-8 grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-sm font-medium mb-2">Bill To:</h2>
            <div className="text-sm">
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                value={invoiceData.clientCompanyName}
                onChange={(e) => handleInputChange("clientCompanyName", e.target.value)}
                placeholder="Client Company Name"
              />
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                value={invoiceData.clientName}
                onChange={(e) => handleInputChange("clientName", e.target.value)}
                placeholder="Client Name"
              />
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                value={invoiceData.clientAddress}
                onChange={(e) => handleInputChange("clientAddress", e.target.value)}
                placeholder="Client Address"
              />
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                value={invoiceData.clientCity}
                onChange={(e) => handleInputChange("clientCity", e.target.value)}
                placeholder="Client City"
              />
              <Input
                className="border-none px-0 py-0 h-auto text-base focus-visible:ring-0"
                value={invoiceData.clientCountry}
                onChange={(e) => handleInputChange("clientCountry", e.target.value)}
                placeholder="Client Country"
              />
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mt-8">
          <div className={`${getThemeColor()} text-white grid grid-cols-12 py-2 px-4 rounded-t-md`}>
            <div className="col-span-6 font-medium">Item Description</div>
            <div className="col-span-2 text-center font-medium">Qty</div>
            <div className="col-span-2 text-center font-medium">Rate</div>
            <div className="col-span-1 text-right font-medium">Amount</div>
            <div className="col-span-1"></div>
          </div>
          
          <div className="border-x border-b rounded-b-md">
            {invoiceData.items.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-12 py-2 px-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="col-span-6">
                  <Input
                    className="border-none px-0 py-0 h-auto focus-visible:ring-0 bg-transparent"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                    placeholder="Item description"
                  />
                </div>
                <div className="col-span-2 text-center">
                  <Input
                    className="border-none px-0 py-0 h-auto text-center focus-visible:ring-0 bg-transparent"
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="col-span-2 text-center">
                  <Input
                    className="border-none px-0 py-0 h-auto text-center focus-visible:ring-0 bg-transparent"
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, "rate", parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="col-span-1 text-right">
                  ${item.amount.toFixed(2)}
                </div>
                <div className="col-span-1 flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveItem(index)}
                    className="h-5 w-5"
                    disabled={invoiceData.items.length === 1}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="py-2 px-4 border-t">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs"
                onClick={handleAddItem}
              >
                <Plus className="h-3 w-3 mr-1" />
                Add Item
              </Button>
              
              <div className="flex justify-between items-center text-sm">
                <div></div>
                <div className="w-56">
                  <div className="flex justify-between py-1">
                    <span>Subtotal:</span>
                    <span>${invoiceData.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1 items-center">
                    <span>Tax (%):</span>
                    <div className="flex items-center space-x-2">
                      <Input
                        className="border-none px-0 py-0 h-auto w-12 text-right focus-visible:ring-0"
                        type="number"
                        min="0"
                        max="100"
                        value={invoiceData.tax}
                        onChange={(e) => {
                          handleInputChange("tax", parseFloat(e.target.value) || 0);
                          calculateAmounts();
                        }}
                      />
                      <span>${(invoiceData.subtotal * (invoiceData.tax / 100)).toFixed(2)}</span>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between py-1 font-bold">
                    <span>Total:</span>
                    <span>${invoiceData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        <div className="mt-8">
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">Notes</h3>
            <Textarea 
              className="min-h-[60px] resize-none text-sm focus-visible:ring-0"
              value={invoiceData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Any notes for your client"
            />
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-1">Terms & Conditions</h3>
            <Textarea 
              className="min-h-[60px] resize-none text-sm focus-visible:ring-0"
              value={invoiceData.termsAndConditions}
              onChange={(e) => handleInputChange("termsAndConditions", e.target.value)}
              placeholder="Terms and conditions"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoicePreview;

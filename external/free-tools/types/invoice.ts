
export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  yourCompanyName: string;
  yourName: string;
  yourAddress: string;
  yourCity: string;
  yourCountry: string;
  clientCompanyName: string;
  clientName: string;
  clientAddress: string;
  clientCity: string;
  clientCountry: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  notes: string;
  termsAndConditions: string;
}

export type InvoiceTheme = "blue" | "green" | "red" | "purple" | "black";

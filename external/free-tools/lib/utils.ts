
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { InvoiceData } from "@/types/invoice"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateInvoiceAmounts(invoiceData: InvoiceData): InvoiceData {
  const updatedItems = invoiceData.items.map(item => ({
    ...item,
    amount: item.quantity * item.rate
  }));
  
  const subtotal = updatedItems.reduce((sum, item) => sum + item.amount, 0);
  const taxAmount = subtotal * (invoiceData.tax / 100);
  const total = subtotal + taxAmount;
  
  return {
    ...invoiceData,
    items: updatedItems,
    subtotal,
    total
  };
}

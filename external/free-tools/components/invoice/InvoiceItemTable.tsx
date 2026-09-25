
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { InvoiceItem } from "@/types/invoice";

interface InvoiceItemTableProps {
  items: InvoiceItem[];
  onItemChange: (index: number, field: keyof InvoiceItem, value: any) => void;
  onRemoveItem: (index: number) => void;
}

const InvoiceItemTable: React.FC<InvoiceItemTableProps> = ({
  items,
  onItemChange,
  onRemoveItem,
}) => {
  const handleNumericChange = (index: number, field: keyof InvoiceItem, value: string) => {
    const numericValue = parseFloat(value) || 0;
    onItemChange(index, field, numericValue);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Item Description</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-center">Rate</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="p-2">
                <Input
                  value={item.description}
                  onChange={(e) => onItemChange(index, "description", e.target.value)}
                  placeholder="Item description"
                  className="border-none focus-visible:ring-0"
                />
              </TableCell>
              <TableCell className="p-2 text-center">
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleNumericChange(index, "quantity", e.target.value)}
                  className="w-16 mx-auto text-center border-none focus-visible:ring-0"
                />
              </TableCell>
              <TableCell className="p-2 text-center">
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-muted-foreground">$</span>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => handleNumericChange(index, "rate", e.target.value)}
                    className="pl-8 text-right border-none focus-visible:ring-0"
                  />
                </div>
              </TableCell>
              <TableCell className="p-2 text-right">
                ${item.amount.toFixed(2)}
              </TableCell>
              <TableCell className="p-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveItem(index)}
                  disabled={items.length === 1}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceItemTable;

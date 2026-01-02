import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function DataTable<T>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
  headerClassName,
}: DataTableProps<T>) {
  return (
    <div>
      <Table className={cn("custom-scrollbar", tableClassName)}>
        <TableHeader className={headerClassName}>
          <TableRow className={cn('hover:bg-transparent!',headerRowClassName)}>
           {columns.map((column,i)=> (
            <TableHead key={i} className={cn('bg-dark-400 text-purple-100 py-4 first:pl-5 last:pr-5')}>
              {column.header}
            </TableHead>
           ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.map((row,rowindex) => (
              <TableRow key={rowKey(row,rowindex)} className={cn('overflow-hidden rounded-lg border-b border-purple-100/5 hover:bg-dark-400/30! relative',bodyRowClassName)}>
                {
                  columns.map((column,columnIndex) => (
                    <TableCell key={columnIndex} className={cn('py-4 first:pl-5 last:pr-5',column.cellClassName,bodyCellClassName)}>
                      {column.cell(row,rowindex)}
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
    </div>
  );
}

export default DataTable;

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

interface FinancialTableProps {
  title: string
  data: {
    label: string
    value: string
    isBold?: boolean
    isHighlighted?: boolean
  }[]
  footerNote?: string
}

export function FinancialTable({ title, data, footerNote }: FinancialTableProps) {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-center mb-4 text-primary">{title}</h3>
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[70%] bg-gray-50">Description</TableHead>
              <TableHead className="text-right bg-gray-50">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className={cn(row.isHighlighted && "bg-yellow-100")}>
                <TableCell className={cn("font-medium", row.isBold && "font-extrabold")}>{row.label}</TableCell>
                <TableCell className={cn("text-right", row.isBold && "font-extrabold")}>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {footerNote && <p className="text-xs text-gray-500 mt-2 text-center italic">{footerNote}</p>}
    </div>
  )
}

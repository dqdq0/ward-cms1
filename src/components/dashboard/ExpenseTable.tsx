import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Edit2, Trash2 } from "lucide-react";

interface ExpenseEntry {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
}

interface ExpenseTableProps {
  expenses?: ExpenseEntry[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const defaultExpenses: ExpenseEntry[] = [
  {
    id: "1",
    date: "2024-01-15",
    description: "Office Supplies",
    category: "Supplies",
    amount: 299.99,
  },
  {
    id: "2",
    date: "2024-01-14",
    description: "Client Lunch Meeting",
    category: "Meals",
    amount: 84.5,
  },
  {
    id: "3",
    date: "2024-01-13",
    description: "Software License",
    category: "Technology",
    amount: 599.0,
  },
];

const ExpenseTable = ({
  expenses = defaultExpenses,
  onEdit = () => {},
  onDelete = () => {},
}: ExpenseTableProps) => {
  return (
    <div className="w-full p-4 space-y-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search expenses..." className="pl-8" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell className="text-right">
                  ${expense.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(expense.id)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(expense.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExpenseTable;

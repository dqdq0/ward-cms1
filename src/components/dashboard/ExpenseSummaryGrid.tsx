import React from "react";
import { Card } from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  PieChartIcon,
} from "lucide-react";

interface ExpenseSummaryCardProps {
  title: string;
  amount: string;
  trend: number;
  icon: React.ReactNode;
}

const ExpenseSummaryCard = ({
  title = "Total Expenses",
  amount = "$0",
  trend = 0,
  icon = <PieChartIcon className="h-6 w-6" />,
}: ExpenseSummaryCardProps) => {
  const isPositive = trend >= 0;

  return (
    <Card className="p-6 bg-white">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{amount}</h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {Math.abs(trend)}%
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
      </div>
    </Card>
  );
};

interface ExpenseSummaryGridProps {
  summaries?: {
    title: string;
    amount: string;
    trend: number;
    icon: React.ReactNode;
  }[];
}

const ExpenseSummaryGrid = ({ summaries }: ExpenseSummaryGridProps) => {
  const defaultSummaries = [
    {
      title: "Total Expenses",
      amount: "$24,500",
      trend: 12,
      icon: <PieChartIcon className="h-6 w-6 text-primary" />,
    },
    {
      title: "Monthly Budget",
      amount: "$30,000",
      trend: -5,
      icon: <TrendingUpIcon className="h-6 w-6 text-primary" />,
    },
    {
      title: "Remaining Budget",
      amount: "$5,500",
      trend: 8,
      icon: <PieChartIcon className="h-6 w-6 text-primary" />,
    },
    {
      title: "Average Daily Spend",
      amount: "$789",
      trend: -2,
      icon: <TrendingUpIcon className="h-6 w-6 text-primary" />,
    },
  ];

  const displaySummaries = summaries || defaultSummaries;

  return (
    <div className="w-full bg-background p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displaySummaries.map((summary, index) => (
          <ExpenseSummaryCard
            key={index}
            title={summary.title}
            amount={summary.amount}
            trend={summary.trend}
            icon={summary.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseSummaryGrid;

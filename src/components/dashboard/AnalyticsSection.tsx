import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "lucide-react";

interface AnalyticsSectionProps {
  spendingData?: {
    labels: string[];
    values: number[];
  };
  budgetData?: {
    allocated: number;
    spent: number;
    categories: { name: string; value: number }[];
  };
}

const AnalyticsSection = ({
  spendingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [1200, 1900, 1500, 2100, 1800, 2300],
  },
  budgetData = {
    allocated: 10000,
    spent: 7500,
    categories: [
      { name: "Marketing", value: 3000 },
      { name: "Operations", value: 2500 },
      { name: "IT", value: 2000 },
    ],
  },
}: AnalyticsSectionProps) => {
  return (
    <div className="w-full h-[300px] bg-background p-4">
      <Card className="h-full">
        <Tabs defaultValue="spending" className="h-full">
          <div className="flex items-center justify-between px-6 pt-4">
            <h2 className="text-xl font-semibold">Analytics Overview</h2>
            <TabsList>
              <TabsTrigger value="spending" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Spending Patterns
              </TabsTrigger>
              <TabsTrigger value="budget" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Budget Allocation
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                Trends
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="spending" className="h-[calc(100%-60px)] p-4">
            <div className="h-full flex items-center justify-center border rounded-lg">
              {/* Placeholder for spending chart */}
              <div className="text-muted-foreground">
                Spending patterns visualization would go here
              </div>
            </div>
          </TabsContent>

          <TabsContent value="budget" className="h-[calc(100%-60px)] p-4">
            <div className="h-full flex items-center justify-center border rounded-lg">
              {/* Placeholder for budget chart */}
              <div className="text-muted-foreground">
                Budget allocation visualization would go here
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="h-[calc(100%-60px)] p-4">
            <div className="h-full flex items-center justify-center border rounded-lg">
              {/* Placeholder for trends chart */}
              <div className="text-muted-foreground">
                Trends visualization would go here
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AnalyticsSection;

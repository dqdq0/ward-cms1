import React, { useEffect, useState } from "react";
import { fetchExpenses, fetchAnalytics, fetchSummary } from "@/lib/api";
import TopNavigation from "./dashboard/TopNavigation";
import Sidebar from "./dashboard/Sidebar";
import ExpenseSummaryGrid from "./dashboard/ExpenseSummaryGrid";
import ExpenseTable from "./dashboard/ExpenseTable";
import AnalyticsSection from "./dashboard/AnalyticsSection";

interface HomeProps {
  onNavigate?: (path: string) => void;
  onAddExpense?: () => void;
  onGenerateReport?: () => void;
}

const Home = ({
  onNavigate = () => {},
  onAddExpense = () => {},
  onGenerateReport = () => {},
}: HomeProps) => {
  const [expenses, setExpenses] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [expensesData, analyticsData, summaryData] = await Promise.all([
          fetchExpenses(),
          fetchAnalytics(),
          fetchSummary(),
        ]);

        setExpenses(expensesData);
        setAnalytics(analyticsData);
        setSummary(summaryData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation
        onAddExpense={onAddExpense}
        onGenerateReport={onGenerateReport}
      />

      <div className="flex h-[calc(100vh-64px)] mt-16">
        <Sidebar onNavigate={onNavigate} />

        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Overview of your expense management system
              </p>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                <ExpenseSummaryGrid summaries={summary?.summaries} />
                <div className="grid gap-6">
                  <ExpenseTable expenses={expenses} />
                  <AnalyticsSection
                    spendingData={analytics?.spending}
                    budgetData={analytics?.budget}
                  />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

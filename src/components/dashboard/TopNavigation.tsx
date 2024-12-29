import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopNavigationProps {
  onAddExpense?: () => void;
  onGenerateReport?: () => void;
  notifications?: Array<{ id: string; text: string }>;
  userAvatar?: string;
  userName?: string;
}

const TopNavigation = ({
  onAddExpense = () => {},
  onGenerateReport = () => {},
  notifications = [
    { id: "1", text: "New expense report ready" },
    { id: "2", text: "Budget limit reached for category: Travel" },
  ],
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  userName = "John Doe",
}: TopNavigationProps) => {
  return (
    <nav className="h-16 w-full bg-background border-b flex items-center justify-between px-4 fixed top-0 z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Cost Management System</h1>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={onAddExpense}
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Expense
        </Button>

        <Button
          variant="outline"
          onClick={onGenerateReport}
          className="flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          Generate Report
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative">
              <Bell className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id}>
                {notification.text}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Avatar>
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default TopNavigation;

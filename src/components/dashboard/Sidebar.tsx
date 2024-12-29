import React from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Settings,
  ChevronDown,
  Users,
  Building,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarProps {
  onNavigate?: (path: string) => void;
  activeItem?: string;
}

const Sidebar = ({
  onNavigate = () => {},
  activeItem = "dashboard",
}: SidebarProps) => {
  const menuItems = [
    {
      label: "Overview",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: <LayoutDashboard size={20} />,
        },
        { id: "analytics", label: "Analytics", icon: <PieChart size={20} /> },
      ],
    },
    {
      label: "Expenses",
      items: [
        { id: "expenses", label: "All Expenses", icon: <Receipt size={20} /> },
        {
          id: "departments",
          label: "Departments",
          icon: <Building size={20} />,
        },
        { id: "employees", label: "Employees", icon: <Users size={20} /> },
      ],
    },
  ];

  return (
    <div className="w-[280px] h-full bg-background border-r p-4 flex flex-col">
      <div className="space-y-4">
        {menuItems.map((section, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            defaultValue={section.label}
          >
            <AccordionItem value={section.label}>
              <AccordionTrigger className="text-sm font-medium">
                {section.label}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeItem === item.id ? "secondary" : "ghost"}
                      className="w-full justify-start gap-2"
                      onClick={() => onNavigate(item.id)}
                    >
                      {item.icon}
                      {item.label}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => onNavigate("settings")}
        >
          <Settings size={20} />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

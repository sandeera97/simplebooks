"use client";

import React from "react";
import {
  Calculator,
  ChevronLeft,
  ChevronRight,
  X,
  Banknote,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    category: "Tax Calculators",
    icon: Calculator,
    items: [
      {
        name: "VAT Calculator",
        path: "/vat-calculator-sri-lanka",
        icon: Calculator,
      },
      {
        name: "APIT Calculator",
        path: "/tax-calculators/local-income",
        icon: Calculator,
        subItems: [
          {
            name: "Local APIT Calculator",
            path: "/tax-calculators/local-income",
            icon: Calculator,
          },
          {
            name: "Foreign APIT Calculator",
            path: "/tax-calculators/foreign-income",
            icon: Calculator,
          },
          {
            name: "Cumulative APIT Calculator",
            path: "/tax-calculators/cumulative-income",
            icon: Calculator,
          },
          {
            name: "Bonus APIT Calculator",
            path: "/tax-calculators/bonus-tax-calculator",
            icon: Calculator,
          },
        ],
      },
      {
        name: "WHT Calculator",
        path: "/wht-calculator",
        icon: Calculator,
      },
    ],
  },
  {
    category: "Payroll",
    icon: Banknote,
    items: [
      {
        name: "Salary Slip Generator",
        path: "/payroll/salary-calculator-sri-lanka",
        icon: Banknote,
      },
      {
        name: "EPF/ETF Calculator",
        path: "/payroll/epf-calculator",
        icon: Calculator,
      },
      {
        name: "Gratuity Calculator",
        path: "/payroll/gratuity-calculator-sri-lanka",
        icon: Calculator,
      },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true); // to ensure client-side only render logic
    try {
      const stored = localStorage.getItem("sidebar-expandedItems");
      if (stored) {
        setExpandedItems(JSON.parse(stored));
      } else {
        setExpandedItems(["APIT Calculator"]);
      }
    } catch (error) {
      console.error("Failed to parse sidebar expanded items", error);
      setExpandedItems(["APIT Calculator"]);
    }
  }, []);

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => {
      let newExpanded: string[];
      if (prev.includes(name)) {
        newExpanded = prev.filter((item) => item !== name);
      } else {
        newExpanded = [...prev, name];
      }
      try {
        localStorage.setItem(
          "sidebar-expandedItems",
          JSON.stringify(newExpanded)
        );
      } catch {
        // ignore errors
      }
      return newExpanded;
    });
  };

  const toggleSidebar = () => {
    const newState = !isOpen;
    try {
      localStorage.setItem("sidebar-state", newState ? "open" : "closed");
    } catch {
      // ignore
    }
    const event = new CustomEvent("sidebar-toggle", {
      detail: { isOpen: newState },
    });
    window.dispatchEvent(event);
  };

  const isPathActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  // Prevent render until client to avoid hydration mismatch due to localStorage usage
  if (!hasMounted) {
    return null;
  }

  if (isMobile && !isOpen) {
    return null;
  }

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 min-h-screen bg-sidebar-bg text-sidebar-text transition-all duration-300
        ${isOpen ? (isMobile ? "w-3/4" : "w-64") : "w-20"}
      `}
    >
      {isMobile && (
        <Button
          onClick={toggleSidebar}
          size="icon"
          className="absolute left-4 top-4 z-50 bg-sidebar-bg"
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6" />
        </Button>
      )}

      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-4 bg-sidebar-highlight rounded-full p-1"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      )}

      <div className={`${isMobile ? "py-16 px-4" : "py-8 px-4 "}`}>
        <h1
          className={`text-xl font-bold mb-6 ${
            isOpen
              ? "text-center bg-white text-primary py-3 rounded"
              : "text-center bg-white rounded-lg py-2 text-primary"
          }`}
        >
          {isOpen ? "Simplebooks" : "SB"}
        </h1>

        <nav>
          {menuCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div key={index} className="mb-4">
                {(isOpen || isMobile) && (
                  <div className="flex items-center mb-2 px-2">
                    <CategoryIcon size={18} className="mr-2" />
                    <h2 className="text-sm font-bold uppercase tracking-wider text-sidebar-text">
                      {category.category}
                    </h2>
                  </div>
                )}

                <ul className="space-y-1">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = isPathActive(item.path);
                    const hasSubItems =
                      item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedItems.includes(item.name);

                    return (
                      <li key={item.path} className={hasSubItems ? "mb-0" : ""}>
                        {hasSubItems ? (
                          <>
                            <button
                              className={`flex items-center w-full ${
                                !isOpen && !isMobile ? "justify-center" : ""
                              } space-x-3 px-4 py-2 rounded-lg transition-colors hover:bg-sidebar-highlight/10 ${
                                isActive
                                  ? "bg-sidebar-highlight text-white"
                                  : ""
                              }`}
                              onClick={() => toggleExpand(item.name)}
                              title={item.name}
                            >
                              <Icon size={16} />
                              {(isOpen || isMobile) && (
                                <>
                                  <span className="text-xs flex-1 text-left">
                                    {item.name}
                                  </span>
                                  <ChevronRight
                                    size={16}
                                    className={`transition-transform ${
                                      isExpanded ? "rotate-90" : ""
                                    }`}
                                  />
                                </>
                              )}
                            </button>
                            {(isExpanded || (!isOpen && isActive)) && (
                              <ul
                                className={`space-y-1 mt-1 ${
                                  isOpen || isMobile ? "ml-4" : "mt-1"
                                }`}
                              >
                                {item.subItems.map((subItem) => {
                                  const SubIcon = subItem.icon;
                                  const isSubActive = isPathActive(
                                    subItem.path
                                  );
                                  return (
                                    <li key={subItem.path}>
                                      <Link
                                        href={subItem.path}
                                        className={`flex items-center ${
                                          !isOpen && !isMobile
                                            ? "justify-center"
                                            : ""
                                        } space-x-2 px-3 py-1.5 rounded-lg text-xs transition-colors hover:bg-sidebar-highlight/10 ${
                                          isSubActive
                                            ? "bg-sidebar-highlight text-white"
                                            : ""
                                        }`}
                                        title={subItem.name}
                                        onClick={() => {
                                          if (isMobile) {
                                            toggleSidebar();
                                          }
                                        }}
                                      >
                                        <SubIcon size={14} />
                                        {(isOpen || isMobile) && (
                                          <span className="text-xs">
                                            {subItem.name}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link
                            href={item.path}
                            className={`flex items-center ${
                              !isOpen && !isMobile ? "justify-center" : ""
                            } space-x-3 px-4 py-2 rounded-lg transition-colors hover:bg-sidebar-highlight/10 ${
                              isActive ? "bg-sidebar-highlight text-white" : ""
                            }`}
                            title={item.name}
                            onClick={() => {
                              if (isMobile) {
                                toggleSidebar();
                              }
                            }}
                          >
                            <Icon size={16} />
                            {(isOpen || isMobile) && (
                              <span className="text-xs">{item.name}</span>
                            )}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
 const pathname = usePathname();

 const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Insights", href: "/dashboard/insights", icon: "💡" },
  { name: "Cohorts", href: "/dashboard/cohorts", icon: "👥" },
  { name: "Patients", href: "/dashboard/patients", icon: "🏥" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
 ];
 return (
  <div className="flex min-h-screen">
   {/* Shared Sidebar */}
   <aside className="w-64 bg-muted p-6 space-y-6 border-r flex-shrink-0">
    <div className="flex items-center space-x-2">
     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">H</span>
     </div>
     <h2 className="text-xl font-bold">Health Universe</h2>
    </div>

    <nav className="space-y-2">
     {navigation.map((item) => {
      const isActive = pathname === item.href;
      return (
       <Link key={item.name} href={item.href}>
        <Button
         variant={isActive ? "default" : "ghost"}
         className={`w-full justify-start ${
          isActive ? "bg-primary text-primary-foreground" : ""
         }`}
        >
         <span className="mr-2">{item.icon}</span>
         {item.name}
        </Button>
       </Link>
      );
     })}
    </nav>

    <div className="mt-auto pt-4 border-t">
     <Button
      variant="ghost"
      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
     >
      <span className="mr-2">🚪</span>
      Sign Out
     </Button>
    </div>
   </aside>

   {/* Main Content Area */}
   <main className="flex-1 bg-background min-w-0 overflow-x-auto">
    <div className="w-full max-w-none">{children}</div>
   </main>
  </div>
 );
}

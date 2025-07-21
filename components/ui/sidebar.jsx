// app/components/sidebar.tsx or src/components/sidebar.tsx
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
 const pathname = usePathname();

 const isActive = (href) => {
  if (href === "/dashboard") {
   return pathname === "/dashboard";
  }
  return pathname.startsWith(href);
 };

 return (
  <aside className="w-60 h-screen sticky top-0 bg-white border-r border-blue-100 overflow-y-auto">
   <div className="p-6 space-y-6">
    <nav className="space-y-2">
     <div className="w-full">
      <Link
       href="/dashboard"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors mt-7 ${
        isActive("/dashboard") ? "font-bold bg-blue-100 text-blue-900" : ""
       }`}
      >
       Dashboard
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/glucose"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/glucose")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Glucose Tracking
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/medications"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/medications")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Medications
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/food"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/food") ? "font-bold bg-blue-100 text-blue-900" : ""
       }`}
      >
       Food & Nutrition
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/exercise"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/exercise")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Exercise & Activity
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/reports"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/reports")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Reports & Analytics
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/appointments"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/appointments")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Appointments
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/alerts"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/alerts")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Alerts & Reminders
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/dashboard/settings"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/settings")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Settings
      </Link>
     </div>
     <div className="w-full">
      <Link
       href="/login"
       className={`block w-full p-3 text-left hover:bg-blue-100 rounded-md text-black-700 hover:text-black-700 transition-colors ${
        isActive("/dashboard/logout")
         ? "font-bold bg-blue-100 text-blue-900"
         : ""
       }`}
      >
       Logout
      </Link>
     </div>
    </nav>
   </div>
  </aside>
 );
}

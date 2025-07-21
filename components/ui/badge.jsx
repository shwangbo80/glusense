import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
 default: "bg-blue-600 text-white hover:bg-blue-700",
 secondary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
 destructive: "bg-red-600 text-white hover:bg-red-700",
 outline: "border border-blue-200 text-blue-800 hover:bg-blue-50",
};

function Badge({ className, variant = "default", ...props }) {
 return (
  <div
   className={cn(
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    badgeVariants[variant],
    className
   )}
   {...props}
  />
 );
}

export { Badge, badgeVariants };

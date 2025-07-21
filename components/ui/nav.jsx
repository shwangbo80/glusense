import { Link } from "next/link";
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuIndicator,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Nav() {
 return (
  <div className="w-full bg-white border-b border-gray-200 shadow-sm">
   <div className="bg-gray-200 p-5">Diabetes Analysis</div>
  </div>
 );
}

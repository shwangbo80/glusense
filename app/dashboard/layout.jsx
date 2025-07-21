import Sidebar from "@/components/ui/sidebar";
import Nav from "@/components/ui/nav";
export default function Dashboard({ children }) {
 return (
  <div className="flex flex-col min-h-screen bg-gray-100">
   <div className="flex flex-1">
    <Sidebar />
    <main className="flex-1 bg-background min-w-0 overflow-x-auto m-7 border-1 border-gray-300">
     {children}
    </main>
   </div>
  </div>
 );
}

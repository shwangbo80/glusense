export default function AlertsPage() {
 return (
  <div className="w-full">
   <div className="p-6 space-y-10 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">
     🔔 Alerts & Notifications
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
       Active Alerts
      </h2>
      <p className="text-gray-600">View current health alerts</p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
       Medication Reminders
      </h2>
      <p className="text-gray-600">Set up medication notifications</p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
       Alert Settings
      </h2>
      <p className="text-gray-600">Customize your alert preferences</p>
     </div>
    </div>
   </div>
  </div>
 );
}

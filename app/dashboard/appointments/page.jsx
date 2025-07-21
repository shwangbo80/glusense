export default function AppointmentsPage() {
 return (
  <div className="w-full">
   <div className="p-6 space-y-10 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">
     🏥 Appointments & Care
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
       Upcoming Appointments
      </h2>
      <p className="text-gray-600">View your scheduled appointments</p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Care Team</h2>
      <p className="text-gray-600">Manage your healthcare providers</p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Test Results</h2>
      <p className="text-gray-600">Track your lab results and HbA1c</p>
     </div>
    </div>
   </div>
  </div>
 );
}

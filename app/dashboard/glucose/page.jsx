import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { Chart } from "@/components/ui/chart";

export default function GlucoseTrackingPage() {
 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
     <div>
      <h1 className="text-3xl font-bold text-gray-900">Glucose Tracking</h1>
      <p className="text-gray-600 mt-1">
       Monitor your blood glucose levels and track patterns over time
      </p>
     </div>
     <div className="flex items-center gap-3">
      <Button size="sm" variant="outline">
       Export Data
      </Button>
      <Button size="sm">Add Reading</Button>
     </div>
    </div>

    {/* Current Status Dashboard */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Current Level
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-3xl font-bold text-blue-600">142 mg/dL</div>
       <p className="text-xs text-gray-500 mt-1">45 minutes ago</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Above target</span>
        <span className="text-xs text-gray-400 ml-2">↗ Rising</span>
       </div>
      </CardContent>
     </Card>

     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Today's Average
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-3xl font-bold text-blue-600">128 mg/dL</div>
       <p className="text-xs text-gray-500 mt-1">8 readings today</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Good control</span>
        <span className="text-xs text-gray-400 ml-2">↓ Improving</span>
       </div>
      </CardContent>
     </Card>

     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Time in Range
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-3xl font-bold text-blue-600">78%</div>
       <p className="text-xs text-gray-500 mt-1">Last 24 hours</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Target: &gt;70%</span>
        <span className="text-xs text-gray-400 ml-2">✓ Achieved</span>
       </div>
      </CardContent>
     </Card>

     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Next Reading
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-3xl font-bold text-blue-600">2h 15m</div>
       <p className="text-xs text-gray-500 mt-1">Post-meal check</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Reminder set</span>
        <span className="text-xs text-gray-400 ml-2">🔔 Active</span>
       </div>
      </CardContent>
     </Card>
    </div>

    {/* Quick Add Reading */}
    {/* <Card className="border-gray-200">
     <CardHeader>
      <CardTitle className="text-lg font-semibold text-gray-800">
       Quick Add Reading
      </CardTitle>
     </CardHeader>
     <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
         Glucose Level
        </label>
        <Input type="number" placeholder="mg/dL" className="w-full" />
       </div>
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
         Context
        </label>
        <Select>
         <option>Before meal</option>
         <option>After meal (1hr)</option>
         <option>After meal (2hr)</option>
         <option>Bedtime</option>
         <option>Fasting</option>
         <option>Random</option>
        </Select>
       </div>
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
         Notes (Optional)
        </label>
        <Input type="text" placeholder="e.g., after pizza" className="w-full" />
       </div>
       <div className="flex items-end">
        <Button className="w-full">Add Reading</Button>
       </div>
      </div>
     </CardContent>
    </Card> */}

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     {/* 24-Hour Glucose Curve */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        24-Hour Glucose Pattern
       </CardTitle>
       <div className="flex gap-2 mt-2">
        <Button size="sm" variant="outline">
         24h
        </Button>
        <Button size="sm" variant="outline">
         7d
        </Button>
        <Button size="sm" variant="outline">
         30d
        </Button>
       </div>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "12 AM", value: 110, target: 130 },
         { name: "3 AM", value: 105, target: 130 },
         { name: "6 AM", value: 98, target: 130 },
         { name: "9 AM", value: 155, target: 130 },
         { name: "12 PM", value: 125, target: 130 },
         { name: "3 PM", value: 168, target: 130 },
         { name: "6 PM", value: 140, target: 130 },
         { name: "9 PM", value: 175, target: 130 },
         { name: "Now", value: 142, target: 130 },
        ]}
        options={{
         yAxisLabel: "mg/dL",
         strokeWidth: 3,
         fillColor: "#3b82f6",
         strokeColor: "#1d4ed8",
         fillOpacity: 0.2,
         dataKey: "value",
        }}
       />
       <div className="mt-4 flex justify-between text-xs text-gray-500">
        <span>Target Range: 70-130 mg/dL (fasting)</span>
        <span>Post-meal: &lt;180 mg/dL</span>
       </div>
      </CardContent>
     </Card>

     {/* Time in Range Chart */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Time in Range (Last 7 Days)
       </CardTitle>
      </CardHeader>
      <CardContent>
       <Chart
        type="donut"
        data={[
         {
          name: "In Range (70-180 mg/dL)",
          value: 78,
          fill: "#3b82f6",
         },
         {
          name: "Above Range (>180 mg/dL)",
          value: 15,
          fill: "#1e40af",
         },
         {
          name: "Below Range (<70 mg/dL)",
          value: 7,
          fill: "#0ea5e9",
         },
        ]}
        options={{
         centerText: "78%",
         centerSubtext: "Time in Range",
         innerRadius: "60%",
         outerRadius: "90%",
         dataKey: "value",
        }}
       />
       <div className="mt-4 grid grid-cols-1 gap-2">
        <div className="flex items-center justify-between">
         <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">In Range</span>
         </div>
         <span className="text-sm font-semibold">78% (18.7h/day)</span>
        </div>
        <div className="flex items-center justify-between">
         <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-700 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Above Range</span>
         </div>
         <span className="text-sm font-semibold">15% (3.6h/day)</span>
        </div>
        <div className="flex items-center justify-between">
         <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Below Range</span>
         </div>
         <span className="text-sm font-semibold">7% (1.7h/day)</span>
        </div>
       </div>
      </CardContent>
     </Card>

     {/* 7-Day Trend */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        7-Day Average Trend
       </CardTitle>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "Mon", value: 135, target: 130 },
         { name: "Tue", value: 142, target: 130 },
         { name: "Wed", value: 128, target: 130 },
         { name: "Thu", value: 125, target: 130 },
         { name: "Fri", value: 138, target: 130 },
         { name: "Sat", value: 132, target: 130 },
         { name: "Sun", value: 128, target: 130 },
        ]}
        options={{
         yAxisLabel: "mg/dL",
         strokeWidth: 3,
         fillColor: "#3b82f6",
         strokeColor: "#1d4ed8",
         fillOpacity: 0.2,
         dataKey: "value",
        }}
       />
       <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
         <span className="text-sm font-medium text-blue-800">
          Weekly Average
         </span>
         <span className="text-sm text-blue-600">132 mg/dL</span>
        </div>
        <p className="text-xs text-blue-600 mt-1">
         Trending down from last week (↓ 8 mg/dL)
        </p>
       </div>
      </CardContent>
     </Card>

     {/* 30-Day Trend */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        30-Day Average Trend
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">
        Weekly averages over the last month
       </p>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "Week 1", value: 142, target: 130 },
         { name: "Week 2", value: 138, target: 130 },
         { name: "Week 3", value: 135, target: 130 },
         { name: "Week 4", value: 132, target: 130 },
        ]}
        options={{
         yAxisLabel: "mg/dL",
         strokeWidth: 3,
         fillColor: "#3b82f6",
         strokeColor: "#1d4ed8",
         fillOpacity: 0.2,
         dataKey: "value",
        }}
       />
       <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
         <span className="text-sm font-medium text-blue-800">
          Monthly Average
         </span>
         <span className="text-sm text-blue-600">136.8 mg/dL</span>
        </div>
        <p className="text-xs text-blue-600 mt-1">
         Steady improvement trend (↓ 10 mg/dL from first week)
        </p>
       </div>
      </CardContent>
     </Card>
    </div>

    {/* 90-Day Trend - Full Width */}
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
     <CardHeader>
      <CardTitle className="text-lg font-semibold text-gray-800">
       90-Day Average Trend
      </CardTitle>
      <p className="text-sm text-gray-600 mt-1">
       Monthly averages over the last quarter
      </p>
     </CardHeader>
     <CardContent>
      <div className="h-64 overflow-hidden">
       <div style={{ height: "200px", width: "100%" }}>
        <Chart
         type="area"
         data={[
          { name: "3 Months Ago", value: 155, target: 130 },
          { name: "2 Months Ago", value: 148, target: 130 },
          { name: "1 Month Ago", value: 142, target: 130 },
          { name: "Current", value: 137, target: 130 },
         ]}
         options={{
          yAxisLabel: "mg/dL",
          strokeWidth: 3,
          fillColor: "#3b82f6",
          strokeColor: "#1d4ed8",
          fillOpacity: 0.2,
          dataKey: "value",
          height: 200,
          responsive: true,
          maintainAspectRatio: false,
         }}
        />
       </div>
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
       <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-blue-800">
         Quarterly Progress
        </span>
        <span className="text-sm text-blue-600">145.5 mg/dL avg</span>
       </div>
       <p className="text-xs text-blue-600 mt-1">
        Excellent long-term progress (↓ 18 mg/dL over 3 months)
       </p>
      </div>
     </CardContent>
    </Card>

    {/* Recent Readings Table */}
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
     <CardHeader>
      <div className="flex justify-between items-center">
       <CardTitle className="text-lg font-semibold text-gray-800">
        Recent Readings
       </CardTitle>
       <Button size="sm" variant="outline">
        View All
       </Button>
      </div>
     </CardHeader>
     <CardContent>
      <Table>
       <TableHeader>
        <TableRow>
         <TableHead className="font-semibold text-gray-700">
          Date & Time
         </TableHead>
         <TableHead className="font-semibold text-gray-700">Level</TableHead>
         <TableHead className="font-semibold text-gray-700">Context</TableHead>
         <TableHead className="font-semibold text-gray-700">Status</TableHead>
         <TableHead className="font-semibold text-gray-700">Notes</TableHead>
         <TableHead className="font-semibold text-gray-700">Actions</TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Today, 2:45 PM</TableCell>
         <TableCell className="font-medium text-gray-900">142 mg/dL</TableCell>
         <TableCell className="text-gray-600">2hr post-meal</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           Above Target
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Had pasta</TableCell>
         <TableCell>
          <Button size="sm" variant="outline">
           Edit
          </Button>
         </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Today, 12:30 PM</TableCell>
         <TableCell className="font-medium text-gray-900">118 mg/dL</TableCell>
         <TableCell className="text-gray-600">Pre-meal</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           In Range
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Before lunch</TableCell>
         <TableCell>
          <Button size="sm" variant="outline">
           Edit
          </Button>
         </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Today, 7:15 AM</TableCell>
         <TableCell className="font-medium text-gray-900">95 mg/dL</TableCell>
         <TableCell className="text-gray-600">Fasting</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           In Range
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Morning reading</TableCell>
         <TableCell>
          <Button size="sm" variant="outline">
           Edit
          </Button>
         </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Yesterday, 10:30 PM</TableCell>
         <TableCell className="font-medium text-gray-900">158 mg/dL</TableCell>
         <TableCell className="text-gray-600">Bedtime</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           Elevated
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Late dinner</TableCell>
         <TableCell>
          <Button size="sm" variant="outline">
           Edit
          </Button>
         </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Yesterday, 6:45 PM</TableCell>
         <TableCell className="font-medium text-gray-900">125 mg/dL</TableCell>
         <TableCell className="text-gray-600">Pre-meal</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           In Range
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Before dinner</TableCell>
         <TableCell>
          <Button size="sm" variant="outline">
           Edit
          </Button>
         </TableCell>
        </TableRow>
       </TableBody>
      </Table>
     </CardContent>
    </Card>
   </div>
  </div>
 );
}

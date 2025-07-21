import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { Chart } from "@/components/ui/chart";

export default function DiabetesDashboard() {
 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
     <div>
      <h1 className="text-3xl font-bold text-gray-900">Your Health Overview</h1>
      <p className="text-gray-600 mt-1">
       Welcome back! Here's your diabetes management summary for today.
      </p>
     </div>
     <div className="text-sm text-gray-500">
      Last updated: {new Date().toLocaleDateString()}
     </div>
    </div>

    {/* Active Alerts */}
    <Card className="border-gray-200">
     <CardHeader>
      <CardTitle className="text-lg font-semibold">Active Alerts</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="space-y-3">
       <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
        <div className="flex-1">
         <h4 className="font-medium text-blue-800">High Glucose Alert</h4>
         <p className="text-sm mt-1">
          Your glucose level of 142 mg/dL is above your target range. Consider
          light exercise or contact your healthcare provider.
         </p>
         <p className="text-xsmt-2">2 hours ago</p>
        </div>
        <Button
         size="sm"
         variant="outline"
         className=" bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
        >
         Dismiss
        </Button>
       </div>
      </div>
     </CardContent>
    </Card>

    {/* Quick Stats - Today's Summary Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Latest Glucose
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold text-blue-600">142 mg/dL</div>
       <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Above target</span>
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
       <div className="text-2xl font-bold text-blue-600">78%</div>
       <p className="text-xs text-gray-500 mt-1">Last 24 hours</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
        <span className="text-xs text-blue-700">Good control</span>
       </div>
      </CardContent>
     </Card>

     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Medications Due
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold text-blue-600">2</div>
       <p className="text-xs text-gray-500 mt-1">Next dose in 1 hour</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Reminder set</span>
       </div>
      </CardContent>
     </Card>

     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
       <CardTitle className="text-sm font-medium text-gray-600">
        Active Alerts
       </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold text-blue-600">1</div>
       <p className="text-xs text-gray-500 mt-1">High glucose alert</p>
       <div className="flex items-center mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-xs text-blue-600">Needs attention</span>
       </div>
      </CardContent>
     </Card>
    </div>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     {/* Glucose Trends Chart */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Glucose Trends (Last 7 Days)
       </CardTitle>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "Mon", value: 120, target: 130 },
         { name: "Tue", value: 145, target: 130 },
         { name: "Wed", value: 135, target: 130 },
         { name: "Thu", value: 125, target: 130 },
         { name: "Fri", value: 150, target: 130 },
         { name: "Sat", value: 140, target: 130 },
         { name: "Sun", value: 142, target: 130 },
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
      </CardContent>
     </Card>

     {/* Glucose Trends 30 Days */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Glucose Trends (Last 30 Days)
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">Weekly averages</p>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "Week 1", value: 138, target: 130 },
         { name: "Week 2", value: 142, target: 130 },
         { name: "Week 3", value: 135, target: 130 },
         { name: "Week 4", value: 140, target: 130 },
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
      </CardContent>
     </Card>

     {/* Glucose Trends 90 Days */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Glucose Trends (Last 90 Days)
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">Monthly averages</p>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "Month 1", value: 145, target: 130 },
         { name: "Month 2", value: 140, target: 130 },
         { name: "Month 3", value: 138, target: 130 },
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
      </CardContent>
     </Card>

     {/* Time in Range Chart */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Time in Range Distribution
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">Last 14 days • CGM Data</p>
      </CardHeader>
      <CardContent>
       <Chart
        type="donut"
        data={[
         {
          name: "In Range (70-180 mg/dL)",
          value: 78,
          fill: "#3b82f6",
          time: "18h 43m",
         },
         {
          name: "Above Range (>180 mg/dL)",
          value: 15,
          fill: "#1e40af",
          time: "3h 36m",
         },
         {
          name: "Below Range (<70 mg/dL)",
          value: 7,
          fill: "#0ea5e9",
          time: "1h 41m",
         },
        ]}
        config={{
         value: {
          label: "Time in Range",
          color: "#3b82f6",
         },
         "In Range (70-180 mg/dL)": {
          label: "In Range",
          color: "#3b82f6",
         },
         "Above Range (>180 mg/dL)": {
          label: "Above Range",
          color: "#1e40af",
         },
         "Below Range (<70 mg/dL)": {
          label: "Below Range",
          color: "#0ea5e9",
         },
        }}
        options={{
         centerText: "78%",
         centerSubtext: "Time in Range",
         showTooltip: true,
         innerRadius: "60%",
         outerRadius: "90%",
         dataKey: "value",
        }}
       />
       <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div>
           <p className="text-sm font-medium text-blue-800">Target Range</p>
           <p className="text-xs text-blue-600">70-180 mg/dL</p>
          </div>
         </div>
         <div className="text-right">
          <p className="text-lg font-bold text-blue-800">78%</p>
          <p className="text-xs text-blue-600">18h 43m/day</p>
         </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
          <div>
           <p className="text-sm font-medium text-blue-800">Above Range</p>
           <p className="text-xs text-blue-600">&gt;180 mg/dL</p>
          </div>
         </div>
         <div className="text-right">
          <p className="text-lg font-bold text-blue-800">15%</p>
          <p className="text-xs text-blue-600">3h 36m/day</p>
         </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <div>
           <p className="text-sm font-medium text-blue-800">Below Range</p>
           <p className="text-xs text-blue-600">&lt;70 mg/dL</p>
          </div>
         </div>
         <div className="text-right">
          <p className="text-lg font-bold text-blue-800">7%</p>
          <p className="text-xs text-blue-600">1h 41m/day</p>
         </div>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
           <span className="text-sm font-medium text-blue-800">
            Goal: &gt;70% TIR
           </span>
          </div>
          <span className="text-sm text-blue-600">✓ Target achieved</span>
         </div>
        </div>
       </div>
      </CardContent>
     </Card>

     {/* Medication Adherence */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Medication Adherence (Last 30 Days)
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">
        Daily medication compliance tracking
       </p>
      </CardHeader>
      <CardContent>
       <Chart
        type="bar"
        data={[
         { name: "Metformin", value: 95, target: 100 },
         { name: "Insulin (Rapid)", value: 88, target: 100 },
         { name: "Glipizide", value: 92, target: 100 },
         { name: "Lisinopril", value: 96, target: 100 },
         { name: "Atorvastatin", value: 89, target: 100 },
         { name: "Aspirin", value: 97, target: 100 },
        ]}
        options={{
         yAxisLabel: "% Adherence",
         barColor: "#3b82f6",
         dataKey: "value",
        }}
       />
       <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Excellent (&gt;95%)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Metformin, Lisinopril, Aspirin
         </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Good (90-95%)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">Glipizide</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Needs Attention (&lt;90%)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">Insulin, Atorvastatin</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Overall Average
          </span>
         </div>
         <p className="text-lg font-bold text-blue-800 mt-1">92.8%</p>
        </div>
       </div>
      </CardContent>
     </Card>

     {/* Exercise Impact */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Exercise Impact on Glucose
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">
        Post-exercise glucose levels over last 30 days
       </p>
      </CardHeader>
      <CardContent>
       <Chart
        type="scatter"
        data={[
         { x: 15, y: 165, name: "Light Walking" },
         { x: 30, y: 140, name: "Brisk Walking" },
         { x: 45, y: 125, name: "Cycling" },
         { x: 60, y: 120, name: "Swimming" },
         { x: 20, y: 155, name: "Stretching" },
         { x: 50, y: 130, name: "Moderate Exercise" },
         { x: 75, y: 115, name: "Intense Workout" },
         { x: 35, y: 135, name: "Yoga" },
         { x: 25, y: 150, name: "Household Chores" },
         { x: 40, y: 128, name: "Dancing" },
         { x: 55, y: 122, name: "Jogging" },
         { x: 90, y: 108, name: "HIIT Training" },
        ]}
        options={{
         xAxisLabel: "Exercise Duration (min)",
         yAxisLabel: "Post-Exercise Glucose (mg/dL)",
         scatterColor: "#3b82f6",
         dataKey: "y",
         xAxisKey: "x",
        }}
       />
       <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Excellent (&lt;120)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Swimming, HIIT, Intense Workout
         </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Good (120-140)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Cycling, Jogging, Dancing, Yoga
         </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Fair (&gt;140)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Light activities, short duration
         </p>
        </div>
       </div>
       <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">Key Insight</span>
         </div>
        </div>
        <p className="text-xs text-blue-600 mt-1">
         Best results: 45+ minutes of moderate to intense activity
        </p>
       </div>
      </CardContent>
     </Card>

     {/* Daily Glucose Patterns */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Daily Glucose Patterns
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">
        Average glucose levels throughout the day (Last 30 days)
       </p>
      </CardHeader>
      <CardContent>
       <Chart
        type="area"
        data={[
         { name: "6 AM", value: 98, target: 100 },
         { name: "8 AM", value: 110, target: 100 },
         { name: "10 AM", value: 155, target: 140 },
         { name: "12 PM", value: 140, target: 140 },
         { name: "2 PM", value: 168, target: 140 },
         { name: "4 PM", value: 145, target: 140 },
         { name: "6 PM", value: 125, target: 140 },
         { name: "8 PM", value: 175, target: 140 },
         { name: "10 PM", value: 150, target: 140 },
         { name: "12 AM", value: 120, target: 140 },
        ]}
        options={{
         yAxisLabel: "Glucose (mg/dL)",
         strokeWidth: 3,
         fillColor: "#3b82f6",
         strokeColor: "#1e40af",
         fillOpacity: 0.2,
         dataKey: "value",
        }}
       />
       <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Fasting (6-8 AM)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Avg: 104 mg/dL - Good control
         </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Post-Meal Peaks
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          10 AM, 2 PM, 8 PM - Monitor carbs
         </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Best Control
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Pre-dinner (6 PM): 125 mg/dL
         </p>
        </div>
       </div>
      </CardContent>
     </Card>

     {/* Food Impact Analysis */}
     <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg font-semibold text-gray-800">
        Food Impact Analysis
       </CardTitle>
       <p className="text-sm text-gray-600 mt-1">
        2-hour post-meal glucose response by food type
       </p>
      </CardHeader>
      <CardContent>
       <Chart
        type="bar"
        data={[
         { name: "Oatmeal", value: 125, target: 140 },
         { name: "Whole Grain Toast", value: 135, target: 140 },
         { name: "White Rice", value: 180, target: 140 },
         { name: "Pasta", value: 165, target: 140 },
         { name: "Quinoa", value: 140, target: 140 },
         { name: "Sweet Potato", value: 150, target: 140 },
         { name: "White Bread", value: 190, target: 140 },
         { name: "Beans", value: 120, target: 140 },
         { name: "Chicken & Salad", value: 110, target: 140 },
         { name: "Pizza", value: 200, target: 140 },
        ]}
        options={{
         yAxisLabel: "2hr Post-Meal Glucose (mg/dL)",
         barColor: "#3b82f6",
         dataKey: "value",
        }}
       />
       <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Best Choices (&lt;140)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">
          Oatmeal, Beans, Chicken & Salad, Whole Grain Toast
         </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Moderate Impact (140-160)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">Quinoa, Sweet Potato</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           High Impact (160-180)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">Pasta, White Rice</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">
           Avoid/Limit (&gt;180)
          </span>
         </div>
         <p className="text-xs text-blue-600 mt-1">White Bread, Pizza</p>
        </div>
       </div>
       <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">Key Insight</span>
         </div>
        </div>
        <p className="text-xs text-blue-600 mt-1">
         Protein + fiber combinations show best glucose control
        </p>
       </div>
      </CardContent>
     </Card>
    </div>

    {/* Recent Readings Table */}
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
     <CardHeader>
      <CardTitle className="text-lg font-semibold text-gray-800">
       Recent Glucose Readings
      </CardTitle>
     </CardHeader>
     <CardContent>
      <Table>
       <TableHeader>
        <TableRow>
         <TableHead className="font-semibold text-gray-700">
          Date & Time
         </TableHead>
         <TableHead className="font-semibold text-gray-700">
          Glucose Level
         </TableHead>
         <TableHead className="font-semibold text-gray-700">Context</TableHead>
         <TableHead className="font-semibold text-gray-700">Status</TableHead>
         <TableHead className="font-semibold text-gray-700">Notes</TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Today, 2:30 PM</TableCell>
         <TableCell className="font-medium text-gray-900">142 mg/dL</TableCell>
         <TableCell className="text-gray-600">2 hours post-meal</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           Above Target
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Had pasta for lunch</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Today, 12:00 PM</TableCell>
         <TableCell className="font-medium text-gray-900">115 mg/dL</TableCell>
         <TableCell className="text-gray-600">Pre-meal</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           In Range
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Before lunch</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Today, 7:30 AM</TableCell>
         <TableCell className="font-medium text-gray-900">98 mg/dL</TableCell>
         <TableCell className="text-gray-600">Fasting</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           In Range
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Morning reading</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Yesterday, 9:00 PM</TableCell>
         <TableCell className="font-medium text-gray-900">155 mg/dL</TableCell>
         <TableCell className="text-gray-600">Bedtime</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           Above Target
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Post-dinner spike</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="text-gray-700">Yesterday, 6:30 PM</TableCell>
         <TableCell className="font-medium text-gray-900">128 mg/dL</TableCell>
         <TableCell className="text-gray-600">Pre-meal</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           In Range
          </span>
         </TableCell>
         <TableCell className="text-gray-600">Before dinner</TableCell>
        </TableRow>
       </TableBody>
      </Table>
     </CardContent>
    </Card>

    {/* Recent Medications */}
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
     <CardHeader>
      <CardTitle className="text-lg font-semibold text-gray-800">
       Recent Medication Doses
      </CardTitle>
     </CardHeader>
     <CardContent>
      <Table>
       <TableHeader>
        <TableRow>
         <TableHead className="font-semibold text-gray-700">
          Medication
         </TableHead>
         <TableHead className="font-semibold text-gray-700">Dose</TableHead>
         <TableHead className="font-semibold text-gray-700">
          Time Taken
         </TableHead>
         <TableHead className="font-semibold text-gray-700">Next Due</TableHead>
         <TableHead className="font-semibold text-gray-700">Status</TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="font-medium text-gray-900">Metformin</TableCell>
         <TableCell className="text-gray-700">500mg</TableCell>
         <TableCell className="text-gray-700">Today, 8:00 AM</TableCell>
         <TableCell className="text-gray-700">Today, 8:00 PM</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           On Schedule
          </span>
         </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="font-medium text-gray-900">
          Insulin (Rapid)
         </TableCell>
         <TableCell className="text-gray-700">8 units</TableCell>
         <TableCell className="text-gray-700">Today, 12:00 PM</TableCell>
         <TableCell className="text-gray-700">Today, 6:00 PM</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           Due Soon
          </span>
         </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-50">
         <TableCell className="font-medium text-gray-900">Glipizide</TableCell>
         <TableCell className="text-gray-700">5mg</TableCell>
         <TableCell className="text-gray-700">Today, 7:30 AM</TableCell>
         <TableCell className="text-gray-700">Tomorrow, 7:30 AM</TableCell>
         <TableCell>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
           On Schedule
          </span>
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

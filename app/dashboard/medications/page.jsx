"use client";
import React from "react";
import { Chart } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as RechartsPrimitive from "recharts";

export default function MedicationsPage() {
 // Mock data based on your database structure
 const currentMedications = [
  {
   name: "Metformin",
   dosage: "500mg",
   frequency: "Twice daily",
   type: "metformin",
   adherence: 96,
  },
  {
   name: "Lantus (Insulin Glargine)",
   dosage: "20 units",
   frequency: "Once daily",
   type: "insulin",
   adherence: 94,
  },
  {
   name: "Humalog (Insulin Lispro)",
   dosage: "8-12 units",
   frequency: "Before meals",
   type: "insulin",
   adherence: 92,
  },
  {
   name: "Glipizide",
   dosage: "5mg",
   frequency: "Once daily",
   type: "sulfonylurea",
   adherence: 98,
  },
  {
   name: "Lisinopril",
   dosage: "10mg",
   frequency: "Once daily",
   type: "other",
   adherence: 97,
  },
 ];

 const adherenceData = [
  { day: "Mon", taken: 95, delayed: 3, missed: 2 },
  { day: "Tue", taken: 92, delayed: 5, missed: 3 },
  { day: "Wed", taken: 98, delayed: 2, missed: 0 },
  { day: "Thu", taken: 90, delayed: 6, missed: 4 },
  { day: "Fri", taken: 96, delayed: 2, missed: 2 },
  { day: "Sat", taken: 94, delayed: 4, missed: 2 },
  { day: "Sun", taken: 97, delayed: 2, missed: 1 },
 ];

 const glucoseCorrelationData = [
  { time: "6:00", glucose: 95, metformin: 1, insulin: 0 },
  { time: "8:00", glucose: 110, metformin: 0, insulin: 1 },
  { time: "10:00", glucose: 125, metformin: 0, insulin: 0 },
  { time: "12:00", glucose: 140, metformin: 0, insulin: 1 },
  { time: "14:00", glucose: 155, metformin: 0, insulin: 0 },
  { time: "16:00", glucose: 130, metformin: 0, insulin: 0 },
  { time: "18:00", glucose: 145, metformin: 0, insulin: 1 },
  { time: "20:00", glucose: 120, metformin: 1, insulin: 0 },
  { time: "22:00", glucose: 105, metformin: 0, insulin: 1 },
 ];

 const dosageHistoryData = [
  { date: "2024-01-01", metformin: 500, lantus: 20, humalog: 8 },
  { date: "2024-02-01", metformin: 500, lantus: 20, humalog: 9 },
  { date: "2024-03-01", metformin: 500, lantus: 22, humalog: 9 },
  { date: "2024-04-01", metformin: 500, lantus: 22, humalog: 10 },
  { date: "2024-05-01", metformin: 500, lantus: 20, humalog: 10 },
  { date: "2024-06-01", metformin: 500, lantus: 20, humalog: 11 },
  { date: "2024-07-01", metformin: 500, lantus: 20, humalog: 10 },
 ];

 const hba1cTrendData = [
  { date: "2024-01-15", hba1c: 8.2, medicationChanges: "Baseline" },
  { date: "2024-02-15", hba1c: 8.0, medicationChanges: "Insulin added" },
  { date: "2024-03-15", hba1c: 7.8, medicationChanges: "Lantus increased" },
  { date: "2024-04-15", hba1c: 7.5, medicationChanges: "Humalog adjusted" },
  { date: "2024-05-15", hba1c: 7.2, medicationChanges: "Stable regimen" },
  { date: "2024-06-15", hba1c: 7.0, medicationChanges: "Optimal control" },
  { date: "2024-07-15", hba1c: 6.9, medicationChanges: "Maintained" },
 ];

 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Medications</h1>

    {/* Current Medications Overview */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
     {currentMedications.map((med, index) => (
      <Card
       key={index}
       className="p-6 border-blue-100 bg-gradient-to-br from-blue-50 to-white"
      >
       <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800">{med.name}</h3>
        <Badge
         variant={med.adherence >= 95 ? "default" : "secondary"}
         className={
          med.adherence >= 95
           ? "bg-blue-100 text-blue-800"
           : "bg-blue-50 text-blue-600"
         }
        >
         {med.adherence}%
        </Badge>
       </div>
       <p className="text-sm text-gray-600 mb-2">
        {med.dosage} • {med.frequency}
       </p>
       <div className="w-full bg-blue-100 rounded-full h-2">
        <div
         className="bg-blue-600 h-2 rounded-full transition-all duration-300"
         style={{ width: `${med.adherence}%` }}
        />
       </div>
      </Card>
     ))}
    </div>

    {/* Medication Adherence Timeline */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      📊 Weekly Adherence Timeline
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.BarChart data={adherenceData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="day" />
        <RechartsPrimitive.YAxis />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Bar
         dataKey="taken"
         stackId="a"
         fill="#3b82f6"
         name="Taken On Time"
        />
        <RechartsPrimitive.Bar
         dataKey="delayed"
         stackId="a"
         fill="#60a5fa"
         name="Delayed"
        />
        <RechartsPrimitive.Bar
         dataKey="missed"
         stackId="a"
         fill="#93c5fd"
         name="Missed"
        />
       </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="flex justify-center mt-4 space-x-6">
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
       <span className="text-sm text-gray-600">Taken On Time</span>
      </div>
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
       <span className="text-sm text-gray-600">Delayed</span>
      </div>
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
       <span className="text-sm text-gray-600">Missed</span>
      </div>
     </div>
    </Card>

    {/* Medication Effectiveness Correlation */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      🔗 Medication Impact on Glucose
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.AreaChart data={glucoseCorrelationData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="time" />
        <RechartsPrimitive.YAxis
         label={{
          value: "Glucose (mg/dL)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="glucose"
         stroke="#3b82f6"
         fill="#3b82f6"
         fillOpacity={0.3}
         name="Glucose Level"
        />
       </RechartsPrimitive.AreaChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Insight:</strong> Your glucose levels show good response to
       medication timing. Post-meal insulin doses effectively manage glucose
       spikes.
      </p>
     </div>
    </Card>

    {/* Dosage History Trends */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      📈 Dosage Adjustment History
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.LineChart data={dosageHistoryData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="date" />
        <RechartsPrimitive.YAxis
         label={{ value: "Dose Amount", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Line
         type="monotone"
         dataKey="metformin"
         stroke="#1d4ed8"
         strokeWidth={2}
         name="Metformin (mg)"
        />
        <RechartsPrimitive.Line
         type="monotone"
         dataKey="lantus"
         stroke="#3b82f6"
         strokeWidth={2}
         name="Lantus (units)"
        />
        <RechartsPrimitive.Line
         type="monotone"
         dataKey="humalog"
         stroke="#60a5fa"
         strokeWidth={2}
         name="Humalog (units)"
        />
       </RechartsPrimitive.LineChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="flex justify-center mt-4 space-x-6">
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
       <span className="text-sm text-gray-600">Metformin (mg)</span>
      </div>
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
       <span className="text-sm text-gray-600">Lantus (units)</span>
      </div>
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
       <span className="text-sm text-gray-600">Humalog (units)</span>
      </div>
     </div>
    </Card>

    {/* HbA1c Improvement with Medication Changes */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      📉 Long-term Medication Effectiveness
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.LineChart data={hba1cTrendData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="date" />
        <RechartsPrimitive.YAxis
         label={{ value: "HbA1c (%)", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Line
         type="monotone"
         dataKey="hba1c"
         stroke="#1d4ed8"
         strokeWidth={3}
         name="HbA1c (%)"
        />
       </RechartsPrimitive.LineChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-blue-50 rounded-lg">
       <h3 className="font-semibold text-blue-800 mb-2">📊 Progress Summary</h3>
       <p className="text-sm text-blue-700">
        HbA1c improved from <strong>8.2%</strong> to <strong>6.9%</strong> over
        6 months
       </p>
      </div>
      <div className="p-4 bg-blue-50 rounded-lg">
       <h3 className="font-semibold text-blue-800 mb-2">
        🎯 Target Achievement
       </h3>
       <p className="text-sm text-blue-700">
        Currently <strong>below 7%</strong> target - excellent control!
       </p>
      </div>
     </div>
    </Card>

    {/* Medication Schedule Heatmap */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      ⏰ Daily Medication Schedule
     </h2>
     <div className="grid grid-cols-8 gap-2">
      <div className="text-xs font-medium text-gray-600 p-2">Time</div>
      {["6AM", "8AM", "12PM", "2PM", "6PM", "8PM", "10PM"].map((time) => (
       <div
        key={time}
        className="text-xs font-medium text-gray-600 p-2 text-center"
       >
        {time}
       </div>
      ))}

      {currentMedications.map((med, index) => (
       <React.Fragment key={index}>
        <div className="text-xs font-medium text-gray-800 p-2 truncate">
         {med.name.split(" ")[0]}
        </div>
        {["6AM", "8AM", "12PM", "2PM", "6PM", "8PM", "10PM"].map((time) => {
         const hasSchedule =
          (med.name === "Metformin" && (time === "8AM" || time === "8PM")) ||
          (med.name === "Lantus (Insulin Glargine)" && time === "10PM") ||
          (med.name === "Humalog (Insulin Lispro)" &&
           (time === "8AM" || time === "12PM" || time === "6PM")) ||
          (med.name === "Glipizide" && time === "8AM") ||
          (med.name === "Lisinopril" && time === "8AM");
         return (
          <div
           key={time}
           className={`p-2 rounded text-center ${
            hasSchedule ? "bg-blue-600 text-white" : "bg-gray-100"
           }`}
          >
           {hasSchedule && (
            <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
           )}
          </div>
         );
        })}
       </React.Fragment>
      ))}
     </div>
     <div className="mt-4 text-xs text-gray-600 text-center">
      Blue dots indicate scheduled medication times
     </div>
    </Card>
   </div>
  </div>
 );
}

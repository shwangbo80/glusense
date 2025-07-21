"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as RechartsPrimitive from "recharts";

export default function ReportsPage() {
 const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

 // Mock data for comprehensive reports
 const monthlyHealthSummary = [
  {
   month: "January",
   avgGlucose: 142,
   timeInRange: 68,
   medicationAdherence: 92,
   exerciseHours: 16.5,
   hba1c: 7.2,
  },
  {
   month: "February",
   avgGlucose: 138,
   timeInRange: 73,
   medicationAdherence: 95,
   exerciseHours: 18.2,
   hba1c: 7.0,
  },
  {
   month: "March",
   avgGlucose: 135,
   timeInRange: 78,
   medicationAdherence: 88,
   exerciseHours: 20.1,
   hba1c: 6.8,
  },
  {
   month: "April",
   avgGlucose: 140,
   timeInRange: 71,
   medicationAdherence: 94,
   exerciseHours: 17.8,
   hba1c: 6.9,
  },
  {
   month: "May",
   avgGlucose: 133,
   timeInRange: 82,
   medicationAdherence: 97,
   exerciseHours: 22.5,
   hba1c: 6.6,
  },
  {
   month: "June",
   avgGlucose: 136,
   timeInRange: 76,
   medicationAdherence: 91,
   exerciseHours: 19.3,
   hba1c: 6.7,
  },
 ];

 const glucoseVariabilityData = [
  { day: "Mon", mean: 135, stdDev: 18, cv: 13.3, readings: 8 },
  { day: "Tue", mean: 142, stdDev: 22, cv: 15.5, readings: 7 },
  { day: "Wed", mean: 138, stdDev: 16, cv: 11.6, readings: 9 },
  { day: "Thu", mean: 144, stdDev: 25, cv: 17.4, readings: 6 },
  { day: "Fri", mean: 131, stdDev: 14, cv: 10.7, readings: 8 },
  { day: "Sat", mean: 139, stdDev: 20, cv: 14.4, readings: 7 },
  { day: "Sun", mean: 133, stdDev: 17, cv: 12.8, readings: 8 },
 ];

 const medicationEffectiveness = [
  {
   medication: "Metformin",
   beforeAvg: 165,
   afterAvg: 142,
   improvement: 23,
   adherence: 95,
  },
  {
   medication: "Insulin",
   beforeAvg: 180,
   afterAvg: 138,
   improvement: 42,
   adherence: 92,
  },
  {
   medication: "Glipizide",
   beforeAvg: 158,
   afterAvg: 135,
   improvement: 23,
   adherence: 88,
  },
  {
   medication: "Lantus",
   beforeAvg: 172,
   afterAvg: 141,
   improvement: 31,
   adherence: 94,
  },
 ];

 const exerciseROIData = [
  {
   activity: "Walking",
   avgCalories: 120,
   glucoseReduction: 15,
   efficiency: 0.125,
   sessions: 24,
  },
  {
   activity: "Cycling",
   avgCalories: 200,
   glucoseReduction: 22,
   efficiency: 0.11,
   sessions: 12,
  },
  {
   activity: "Swimming",
   avgCalories: 250,
   glucoseReduction: 28,
   efficiency: 0.112,
   sessions: 8,
  },
  {
   activity: "Weight Training",
   avgCalories: 180,
   glucoseReduction: 18,
   efficiency: 0.1,
   sessions: 16,
  },
  {
   activity: "Yoga",
   avgCalories: 100,
   glucoseReduction: 8,
   efficiency: 0.08,
   sessions: 20,
  },
 ];

 const foodImpactHeatMap = [
  {
   food: "Pasta",
   avgCarbs: 55,
   avgGlucoseSpike: 45,
   frequency: 8,
   impact: "High",
  },
  {
   food: "Oatmeal",
   avgCarbs: 45,
   avgGlucoseSpike: 25,
   frequency: 15,
   impact: "Medium",
  },
  {
   food: "Rice",
   avgCarbs: 35,
   avgGlucoseSpike: 30,
   frequency: 12,
   impact: "Medium",
  },
  {
   food: "Bread",
   avgCarbs: 30,
   avgGlucoseSpike: 35,
   frequency: 10,
   impact: "Medium",
  },
  {
   food: "Apple",
   avgCarbs: 25,
   avgGlucoseSpike: 10,
   frequency: 18,
   impact: "Low",
  },
  {
   food: "Chicken",
   avgCarbs: 0,
   avgGlucoseSpike: 2,
   frequency: 20,
   impact: "Low",
  },
 ];

 const weeklyScorecard = [
  {
   week: "Week 1",
   glucoseScore: 85,
   medicationScore: 92,
   exerciseScore: 78,
   nutritionScore: 88,
   overallScore: 86,
  },
  {
   week: "Week 2",
   glucoseScore: 78,
   medicationScore: 95,
   exerciseScore: 85,
   nutritionScore: 82,
   overallScore: 85,
  },
  {
   week: "Week 3",
   glucoseScore: 92,
   medicationScore: 88,
   exerciseScore: 90,
   nutritionScore: 91,
   overallScore: 90,
  },
  {
   week: "Week 4",
   glucoseScore: 88,
   medicationScore: 94,
   exerciseScore: 82,
   nutritionScore: 86,
   overallScore: 88,
  },
 ];

 const detailedGlucoseLog = [
  {
   date: "2025-01-15",
   time: "08:00",
   reading: 142,
   type: "Fasting",
   meal: "-",
   notes: "Morning reading",
  },
  {
   date: "2025-01-15",
   time: "12:30",
   reading: 165,
   type: "Post-meal",
   meal: "Lunch",
   notes: "2hr after pasta",
  },
  {
   date: "2025-01-15",
   time: "18:00",
   reading: 138,
   type: "Pre-meal",
   meal: "Dinner",
   notes: "Before dinner",
  },
  {
   date: "2025-01-15",
   time: "20:30",
   reading: 155,
   type: "Post-meal",
   meal: "Dinner",
   notes: "2hr after dinner",
  },
  {
   date: "2025-01-14",
   time: "08:15",
   reading: 135,
   type: "Fasting",
   meal: "-",
   notes: "Good morning reading",
  },
  {
   date: "2025-01-14",
   time: "11:45",
   reading: 158,
   type: "Post-meal",
   meal: "Lunch",
   notes: "After sandwich",
  },
  {
   date: "2025-01-14",
   time: "17:30",
   reading: 145,
   type: "Pre-meal",
   meal: "Dinner",
   notes: "Before dinner",
  },
  {
   date: "2025-01-14",
   time: "20:00",
   reading: 162,
   type: "Post-meal",
   meal: "Dinner",
   notes: "2hr after dinner",
  },
 ];

 const medicationHistoryLog = [
  {
   date: "2025-01-15",
   medication: "Metformin",
   dose: "500mg",
   time: "08:00",
   taken: "Yes",
   notes: "With breakfast",
  },
  {
   date: "2025-01-15",
   medication: "Insulin",
   dose: "10 units",
   time: "12:00",
   taken: "Yes",
   notes: "Before lunch",
  },
  {
   date: "2025-01-15",
   medication: "Metformin",
   dose: "500mg",
   time: "20:00",
   taken: "Yes",
   notes: "With dinner",
  },
  {
   date: "2025-01-14",
   medication: "Metformin",
   dose: "500mg",
   time: "08:00",
   taken: "Yes",
   notes: "With breakfast",
  },
  {
   date: "2025-01-14",
   medication: "Insulin",
   dose: "10 units",
   time: "12:00",
   taken: "No",
   notes: "Forgot to take",
  },
  {
   date: "2025-01-14",
   medication: "Metformin",
   dose: "500mg",
   time: "20:00",
   taken: "Yes",
   notes: "With dinner",
  },
 ];

 const exercisePerformanceLog = [
  {
   date: "2025-01-15",
   activity: "Morning walk",
   duration: 30,
   calories: 120,
   intensity: "Moderate",
   glucoseImpact: -15,
  },
  {
   date: "2025-01-15",
   activity: "Weight training",
   duration: 45,
   calories: 180,
   intensity: "High",
   glucoseImpact: -18,
  },
  {
   date: "2025-01-14",
   activity: "Cycling",
   duration: 35,
   calories: 200,
   intensity: "Moderate",
   glucoseImpact: -22,
  },
  {
   date: "2025-01-14",
   activity: "Yoga",
   duration: 40,
   calories: 100,
   intensity: "Low",
   glucoseImpact: -8,
  },
  {
   date: "2025-01-13",
   activity: "Swimming",
   duration: 30,
   calories: 250,
   intensity: "Moderate",
   glucoseImpact: -28,
  },
 ];

 const sortTable = (data, key) => {
  let direction = "asc";
  if (sortConfig.key === key && sortConfig.direction === "asc") {
   direction = "desc";
  }
  setSortConfig({ key, direction });

  return [...data].sort((a, b) => {
   if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
   if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
   return 0;
  });
 };

 const getSortIcon = (columnKey) => {
  if (sortConfig.key === columnKey) {
   return sortConfig.direction === "asc" ? "↑" : "↓";
  }
  return "↕";
 };

 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">
     Reports & Analytics
    </h1>

    {/* Monthly Health Summary */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Monthly Health Summary
     </h2>
     <div className="h-[400px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.LineChart data={monthlyHealthSummary}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="month" />
        <RechartsPrimitive.YAxis
         yAxisId="left"
         label={{
          value: "Glucose (mg/dL)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.YAxis
         yAxisId="right"
         orientation="right"
         label={{ value: "Percentage (%)", angle: 90, position: "insideRight" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Line
         yAxisId="left"
         type="monotone"
         dataKey="avgGlucose"
         stroke="#1d4ed8"
         strokeWidth={3}
         name="Avg Glucose"
        />
        <RechartsPrimitive.Line
         yAxisId="right"
         type="monotone"
         dataKey="timeInRange"
         stroke="#3b82f6"
         strokeWidth={2}
         name="Time in Range %"
        />
        <RechartsPrimitive.Line
         yAxisId="right"
         type="monotone"
         dataKey="medicationAdherence"
         stroke="#60a5fa"
         strokeWidth={2}
         name="Medication Adherence %"
        />
       </RechartsPrimitive.LineChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
    </Card>

    {/* Glucose Variability Analysis */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Glucose Variability Analysis
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.BarChart data={glucoseVariabilityData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="day" />
        <RechartsPrimitive.YAxis
         yAxisId="left"
         label={{
          value: "Glucose (mg/dL)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.YAxis
         yAxisId="right"
         orientation="right"
         label={{ value: "CV (%)", angle: 90, position: "insideRight" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Bar
         yAxisId="left"
         dataKey="mean"
         fill="#3b82f6"
         name="Mean Glucose"
        />
        <RechartsPrimitive.Bar
         yAxisId="left"
         dataKey="stdDev"
         fill="#93c5fd"
         name="Standard Deviation"
        />
        <RechartsPrimitive.Line
         yAxisId="right"
         type="monotone"
         dataKey="cv"
         stroke="#1d4ed8"
         strokeWidth={3}
         name="Coefficient of Variation"
        />
       </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
    </Card>

    {/* Medication Effectiveness Table */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Medication Effectiveness Analysis
     </h2>
     <div className="overflow-x-auto">
      <table className="w-full border-collapse">
       <thead>
        <tr className="bg-blue-50">
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(medicationEffectiveness, "medication")}
         >
          Medication {getSortIcon("medication")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(medicationEffectiveness, "beforeAvg")}
         >
          Before Avg {getSortIcon("beforeAvg")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(medicationEffectiveness, "afterAvg")}
         >
          After Avg {getSortIcon("afterAvg")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(medicationEffectiveness, "improvement")}
         >
          Improvement {getSortIcon("improvement")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(medicationEffectiveness, "adherence")}
         >
          Adherence % {getSortIcon("adherence")}
         </th>
        </tr>
       </thead>
       <tbody>
        {medicationEffectiveness.map((med, index) => (
         <tr key={index} className="hover:bg-blue-50">
          <td className="border border-blue-200 p-3 font-medium">
           {med.medication}
          </td>
          <td className="border border-blue-200 p-3">{med.beforeAvg} mg/dL</td>
          <td className="border border-blue-200 p-3">{med.afterAvg} mg/dL</td>
          <td className="border border-blue-200 p-3 text-green-600 font-semibold">
           -{med.improvement} mg/dL
          </td>
          <td className="border border-blue-200 p-3">
           <Badge
            className={`${
             med.adherence >= 90
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
            }`}
           >
            {med.adherence}%
           </Badge>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </Card>

    {/* Exercise ROI Analysis */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Exercise ROI Analysis
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.ScatterChart data={exerciseROIData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis
         dataKey="avgCalories"
         label={{ value: "Calories Burned", position: "bottom" }}
        />
        <RechartsPrimitive.YAxis
         label={{
          value: "Glucose Reduction (mg/dL)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.Tooltip
         formatter={(value, name) => [value, name]}
         labelFormatter={(label) => `${exerciseROIData[label]?.activity}`}
        />
        <RechartsPrimitive.Scatter dataKey="glucoseReduction" fill="#3b82f6" />
       </RechartsPrimitive.ScatterChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
    </Card>

    {/* Food Impact Heat Map Table */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Food Impact Analysis
     </h2>
     <div className="overflow-x-auto">
      <table className="w-full border-collapse">
       <thead>
        <tr className="bg-blue-50">
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(foodImpactHeatMap, "food")}
         >
          Food {getSortIcon("food")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(foodImpactHeatMap, "avgCarbs")}
         >
          Avg Carbs {getSortIcon("avgCarbs")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(foodImpactHeatMap, "avgGlucoseSpike")}
         >
          Glucose Spike {getSortIcon("avgGlucoseSpike")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(foodImpactHeatMap, "frequency")}
         >
          Frequency {getSortIcon("frequency")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(foodImpactHeatMap, "impact")}
         >
          Impact Level {getSortIcon("impact")}
         </th>
        </tr>
       </thead>
       <tbody>
        {foodImpactHeatMap.map((food, index) => (
         <tr key={index} className="hover:bg-blue-50">
          <td className="border border-blue-200 p-3 font-medium">
           {food.food}
          </td>
          <td className="border border-blue-200 p-3">{food.avgCarbs}g</td>
          <td className="border border-blue-200 p-3">
           +{food.avgGlucoseSpike} mg/dL
          </td>
          <td className="border border-blue-200 p-3">{food.frequency} times</td>
          <td className="border border-blue-200 p-3">
           <Badge
            className={`${
             food.impact === "High"
              ? "bg-red-100 text-red-800"
              : food.impact === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
            }`}
           >
            {food.impact}
           </Badge>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </Card>

    {/* Weekly Performance Scorecard */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Weekly Performance Scorecard
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.RadarChart data={weeklyScorecard}>
        <RechartsPrimitive.PolarGrid />
        <RechartsPrimitive.PolarAngleAxis dataKey="week" />
        <RechartsPrimitive.PolarRadiusAxis angle={90} domain={[0, 100]} />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Radar
         name="Overall Score"
         dataKey="overallScore"
         stroke="#3b82f6"
         fill="#3b82f6"
         fillOpacity={0.3}
        />
       </RechartsPrimitive.RadarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
    </Card>

    {/* Detailed Glucose Log */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Detailed Glucose Log
     </h2>
     <div className="overflow-x-auto">
      <table className="w-full border-collapse">
       <thead>
        <tr className="bg-blue-50">
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(detailedGlucoseLog, "date")}
         >
          Date {getSortIcon("date")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(detailedGlucoseLog, "time")}
         >
          Time {getSortIcon("time")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(detailedGlucoseLog, "reading")}
         >
          Reading {getSortIcon("reading")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(detailedGlucoseLog, "type")}
         >
          Type {getSortIcon("type")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(detailedGlucoseLog, "meal")}
         >
          Meal {getSortIcon("meal")}
         </th>
         <th className="border border-blue-200 p-3 text-left">Notes</th>
        </tr>
       </thead>
       <tbody>
        {detailedGlucoseLog.map((log, index) => (
         <tr key={index} className="hover:bg-blue-50">
          <td className="border border-blue-200 p-3">{log.date}</td>
          <td className="border border-blue-200 p-3">{log.time}</td>
          <td className="border border-blue-200 p-3 font-semibold">
           <span
            className={`${
             log.reading < 80
              ? "text-red-600"
              : log.reading > 180
              ? "text-red-600"
              : "text-blue-600"
            }`}
           >
            {log.reading} mg/dL
           </span>
          </td>
          <td className="border border-blue-200 p-3">
           <Badge className="bg-blue-100 text-blue-800">{log.type}</Badge>
          </td>
          <td className="border border-blue-200 p-3">{log.meal}</td>
          <td className="border border-blue-200 p-3 text-sm text-gray-600">
           {log.notes}
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </Card>

    {/* Exercise Performance Table */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Exercise Performance Log
     </h2>
     <div className="overflow-x-auto">
      <table className="w-full border-collapse">
       <thead>
        <tr className="bg-blue-50">
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(exercisePerformanceLog, "date")}
         >
          Date {getSortIcon("date")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(exercisePerformanceLog, "activity")}
         >
          Activity {getSortIcon("activity")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(exercisePerformanceLog, "duration")}
         >
          Duration {getSortIcon("duration")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(exercisePerformanceLog, "calories")}
         >
          Calories {getSortIcon("calories")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(exercisePerformanceLog, "intensity")}
         >
          Intensity {getSortIcon("intensity")}
         </th>
         <th
          className="border border-blue-200 p-3 text-left cursor-pointer hover:bg-blue-100"
          onClick={() => sortTable(exercisePerformanceLog, "glucoseImpact")}
         >
          Glucose Impact {getSortIcon("glucoseImpact")}
         </th>
        </tr>
       </thead>
       <tbody>
        {exercisePerformanceLog.map((exercise, index) => (
         <tr key={index} className="hover:bg-blue-50">
          <td className="border border-blue-200 p-3">{exercise.date}</td>
          <td className="border border-blue-200 p-3 font-medium">
           {exercise.activity}
          </td>
          <td className="border border-blue-200 p-3">
           {exercise.duration} min
          </td>
          <td className="border border-blue-200 p-3">
           {exercise.calories} cal
          </td>
          <td className="border border-blue-200 p-3">
           <Badge
            className={`${
             exercise.intensity === "High"
              ? "bg-red-100 text-red-800"
              : exercise.intensity === "Moderate"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
            }`}
           >
            {exercise.intensity}
           </Badge>
          </td>
          <td className="border border-blue-200 p-3 text-green-600 font-semibold">
           {exercise.glucoseImpact} mg/dL
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </Card>
   </div>
  </div>
 );
}

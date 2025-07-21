"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as RechartsPrimitive from "recharts";

export default function ExercisePage() {
 // Mock data based on your database structure
 const recentExercises = [
  {
   activity: "Morning walk",
   type: "walking",
   duration: 30,
   intensity: "moderate",
   calories: 120,
   time: "7:00 AM",
  },
  {
   activity: "Weight training",
   type: "strength",
   duration: 45,
   intensity: "high",
   calories: 180,
   time: "6:30 PM",
  },
  {
   activity: "Yoga session",
   type: "flexibility",
   duration: 40,
   intensity: "low",
   calories: 100,
   time: "8:00 AM",
  },
  {
   activity: "Cycling",
   type: "cardio",
   duration: 35,
   intensity: "moderate",
   calories: 200,
   time: "5:30 PM",
  },
  {
   activity: "Swimming",
   type: "cardio",
   duration: 30,
   intensity: "moderate",
   calories: 250,
   time: "12:00 PM",
  },
  {
   activity: "Tennis",
   type: "sports",
   duration: 60,
   intensity: "high",
   calories: 400,
   time: "2:00 PM",
  },
 ];

 const weeklyExerciseDistribution = [
  { type: "Cardio", minutes: 180, color: "#1d4ed8" },
  { type: "Strength", minutes: 135, color: "#3b82f6" },
  { type: "Walking", minutes: 120, color: "#60a5fa" },
  { type: "Flexibility", minutes: 80, color: "#93c5fd" },
  { type: "Sports", minutes: 105, color: "#dbeafe" },
 ];

 const dailyExerciseDuration = [
  { day: "Mon", duration: 45, target: 30 },
  { day: "Tue", duration: 60, target: 30 },
  { day: "Wed", duration: 30, target: 30 },
  { day: "Thu", duration: 0, target: 30 },
  { day: "Fri", duration: 75, target: 30 },
  { day: "Sat", duration: 90, target: 30 },
  { day: "Sun", duration: 40, target: 30 },
 ];

 const caloriesBurnedOverTime = [
  { date: "Mon", calories: 180, cumulative: 180 },
  { date: "Tue", calories: 250, cumulative: 430 },
  { date: "Wed", calories: 120, cumulative: 550 },
  { date: "Thu", calories: 0, cumulative: 550 },
  { date: "Fri", calories: 300, cumulative: 850 },
  { date: "Sat", calories: 400, cumulative: 1250 },
  { date: "Sun", calories: 150, cumulative: 1400 },
 ];

 const intensityBreakdown = [
  { day: "Mon", low: 0, moderate: 30, high: 15 },
  { day: "Tue", low: 20, moderate: 25, high: 15 },
  { day: "Wed", low: 15, moderate: 15, high: 0 },
  { day: "Thu", low: 0, moderate: 0, high: 0 },
  { day: "Fri", low: 0, moderate: 35, high: 40 },
  { day: "Sat", low: 40, moderate: 30, high: 20 },
  { day: "Sun", low: 25, moderate: 15, high: 0 },
 ];

 const activityFrequency = [
  { activity: "Morning walk", sessions: 12, avgDuration: 30 },
  { activity: "Weight training", sessions: 8, avgDuration: 45 },
  { activity: "Yoga session", sessions: 10, avgDuration: 40 },
  { activity: "Cycling", sessions: 6, avgDuration: 35 },
  { activity: "Swimming", sessions: 5, avgDuration: 30 },
  { activity: "Tennis", sessions: 4, avgDuration: 60 },
  { activity: "Hiking", sessions: 3, avgDuration: 90 },
  { activity: "Basketball", sessions: 2, avgDuration: 45 },
 ];

 const exerciseGlucoseImpact = [
  {
   exerciseTime: "Pre-workout",
   glucose: 140,
   duration: 30,
   intensity: "moderate",
  },
  {
   exerciseTime: "Post-workout",
   glucose: 120,
   duration: 30,
   intensity: "moderate",
  },
  {
   exerciseTime: "Pre-workout",
   glucose: 155,
   duration: 45,
   intensity: "high",
  },
  {
   exerciseTime: "Post-workout",
   glucose: 125,
   duration: 45,
   intensity: "high",
  },
  {
   exerciseTime: "Pre-workout",
   glucose: 145,
   duration: 60,
   intensity: "high",
  },
  {
   exerciseTime: "Post-workout",
   glucose: 115,
   duration: 60,
   intensity: "high",
  },
  { exerciseTime: "Pre-workout", glucose: 135, duration: 20, intensity: "low" },
  {
   exerciseTime: "Post-workout",
   glucose: 130,
   duration: 20,
   intensity: "low",
  },
 ];

 const weeklyScheduleData = [
  {
   day: "Mon",
   "6:00": 0,
   "7:00": 30,
   "8:00": 0,
   "12:00": 0,
   "17:00": 0,
   "18:00": 45,
   "19:00": 0,
  },
  {
   day: "Tue",
   "6:00": 0,
   "7:00": 0,
   "8:00": 40,
   "12:00": 30,
   "17:00": 35,
   "18:00": 0,
   "19:00": 0,
  },
  {
   day: "Wed",
   "6:00": 0,
   "7:00": 30,
   "8:00": 0,
   "12:00": 0,
   "17:00": 0,
   "18:00": 0,
   "19:00": 0,
  },
  {
   day: "Thu",
   "6:00": 0,
   "7:00": 0,
   "8:00": 0,
   "12:00": 0,
   "17:00": 0,
   "18:00": 0,
   "19:00": 0,
  },
  {
   day: "Fri",
   "6:00": 0,
   "7:00": 0,
   "8:00": 0,
   "12:00": 0,
   "17:00": 0,
   "18:00": 45,
   "19:00": 30,
  },
  {
   day: "Sat",
   "6:00": 0,
   "7:00": 0,
   "8:00": 40,
   "12:00": 0,
   "17:00": 0,
   "18:00": 0,
   "19:00": 50,
  },
  {
   day: "Sun",
   "6:00": 0,
   "7:00": 0,
   "8:00": 40,
   "12:00": 0,
   "17:00": 0,
   "18:00": 0,
   "19:00": 0,
  },
 ];

 const exerciseDurationByType = [
  { type: "Cardio", avgDuration: 32, sessions: 15 },
  { type: "Strength", avgDuration: 45, sessions: 8 },
  { type: "Walking", avgDuration: 40, sessions: 12 },
  { type: "Flexibility", avgDuration: 35, sessions: 10 },
  { type: "Sports", avgDuration: 55, sessions: 6 },
 ];

 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">
     Exercise & Activity
    </h1>

    {/* Recent Exercise Log */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
     {recentExercises.map((exercise, index) => (
      <Card
       key={index}
       className="p-4 border-blue-100 bg-gradient-to-br from-blue-50 to-white"
      >
       <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800 text-sm">
         {exercise.activity}
        </h3>
        <Badge className="bg-blue-100 text-blue-800">{exercise.type}</Badge>
       </div>
       <p className="text-xs text-gray-600 mb-2">{exercise.time}</p>
       <div className="flex justify-between text-sm">
        <span className="text-blue-700">{exercise.duration} min</span>
        <span className="text-blue-600">{exercise.calories} cal</span>
       </div>
       <div className="mt-2">
        <Badge
         className={`text-xs ${
          exercise.intensity === "high"
           ? "bg-blue-200 text-blue-800"
           : exercise.intensity === "moderate"
           ? "bg-blue-100 text-blue-700"
           : "bg-blue-50 text-blue-600"
         }`}
        >
         {exercise.intensity}
        </Badge>
       </div>
      </Card>
     ))}
    </div>

    {/* Weekly Exercise Distribution */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Weekly Exercise Distribution
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.PieChart>
        <RechartsPrimitive.Pie
         data={weeklyExerciseDistribution}
         cx="50%"
         cy="50%"
         innerRadius={60}
         outerRadius={120}
         paddingAngle={5}
         dataKey="minutes"
         label={({ type, minutes }) => `${type}: ${minutes}min`}
        >
         {weeklyExerciseDistribution.map((entry, index) => (
          <RechartsPrimitive.Cell key={`cell-${index}`} fill={entry.color} />
         ))}
        </RechartsPrimitive.Pie>
        <RechartsPrimitive.Tooltip />
       </RechartsPrimitive.PieChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="flex justify-center mt-4 space-x-4">
      {weeklyExerciseDistribution.map((item, index) => (
       <div key={index} className="flex items-center space-x-2">
        <div
         className="w-3 h-3 rounded-full"
         style={{ backgroundColor: item.color }}
        ></div>
        <span className="text-sm text-gray-600">{item.type}</span>
       </div>
      ))}
     </div>
    </Card>

    {/* Daily Exercise Duration */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Daily Exercise Duration
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.BarChart data={dailyExerciseDuration}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="day" />
        <RechartsPrimitive.YAxis
         label={{ value: "Minutes", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Bar
         dataKey="duration"
         fill="#3b82f6"
         name="Actual Duration"
         radius={[4, 4, 0, 0]}
        />
        <RechartsPrimitive.Bar
         dataKey="target"
         fill="#93c5fd"
         name="Target Duration"
         radius={[4, 4, 0, 0]}
        />
       </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Weekly Summary:</strong> You exercised 5 out of 7 days this week,
       with an average duration of 49 minutes per session.
      </p>
     </div>
    </Card>

    {/* Calories Burned Over Time */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Calories Burned Over Time
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.LineChart data={caloriesBurnedOverTime}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="date" />
        <RechartsPrimitive.YAxis
         yAxisId="left"
         label={{ value: "Daily Calories", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.YAxis
         yAxisId="right"
         orientation="right"
         label={{
          value: "Cumulative Calories",
          angle: 90,
          position: "insideRight",
         }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Bar
         yAxisId="left"
         dataKey="calories"
         fill="#60a5fa"
         name="Daily Calories"
         radius={[4, 4, 0, 0]}
        />
        <RechartsPrimitive.Line
         yAxisId="right"
         type="monotone"
         dataKey="cumulative"
         stroke="#1d4ed8"
         strokeWidth={3}
         name="Cumulative Calories"
        />
       </RechartsPrimitive.LineChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Weekly Total:</strong> You burned 1,400 calories this week
       through exercise.
      </p>
     </div>
    </Card>

    {/* Exercise Intensity Breakdown */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Exercise Intensity Breakdown
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.BarChart data={intensityBreakdown}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="day" />
        <RechartsPrimitive.YAxis
         label={{ value: "Minutes", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Bar
         dataKey="low"
         stackId="a"
         fill="#dbeafe"
         name="Low Intensity"
        />
        <RechartsPrimitive.Bar
         dataKey="moderate"
         stackId="a"
         fill="#60a5fa"
         name="Moderate Intensity"
        />
        <RechartsPrimitive.Bar
         dataKey="high"
         stackId="a"
         fill="#1d4ed8"
         name="High Intensity"
        />
       </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Intensity Balance:</strong> 35% low, 45% moderate, 20% high
       intensity workouts.
      </p>
     </div>
    </Card>

    {/* Activity Frequency */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Activity Frequency
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.BarChart data={activityFrequency}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="activity" />
        <RechartsPrimitive.YAxis
         label={{ value: "Sessions", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Bar
         dataKey="sessions"
         fill="#3b82f6"
         name="Sessions This Month"
         radius={[4, 4, 0, 0]}
        />
       </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {activityFrequency.slice(0, 4).map((activity, index) => (
       <div key={index} className="p-3 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 text-sm">
         {activity.activity}
        </h3>
        <p className="text-xs text-blue-600">
         {activity.sessions} sessions • {activity.avgDuration} min avg
        </p>
       </div>
      ))}
     </div>
    </Card>

    {/* Exercise Impact on Glucose */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Exercise Impact on Glucose
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.ScatterChart data={exerciseGlucoseImpact}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis
         dataKey="duration"
         label={{ value: "Duration (min)", position: "bottom" }}
        />
        <RechartsPrimitive.YAxis
         label={{
          value: "Glucose (mg/dL)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Scatter
         dataKey="glucose"
         fill="#3b82f6"
         name="Glucose Level"
        />
       </RechartsPrimitive.ScatterChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Key Insight:</strong> Exercise consistently reduces glucose
       levels by an average of 15-20 mg/dL within 2 hours post-workout.
      </p>
     </div>
    </Card>

    {/* Weekly Exercise Schedule */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Weekly Exercise Schedule
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.AreaChart data={weeklyScheduleData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="day" />
        <RechartsPrimitive.YAxis
         label={{ value: "Minutes", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="7:00"
         stackId="1"
         stroke="#1d4ed8"
         fill="#1d4ed8"
         name="7:00 AM"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="8:00"
         stackId="1"
         stroke="#3b82f6"
         fill="#3b82f6"
         name="8:00 AM"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="12:00"
         stackId="1"
         stroke="#60a5fa"
         fill="#60a5fa"
         name="12:00 PM"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="17:00"
         stackId="1"
         stroke="#93c5fd"
         fill="#93c5fd"
         name="5:00 PM"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="18:00"
         stackId="1"
         stroke="#dbeafe"
         fill="#dbeafe"
         name="6:00 PM"
        />
       </RechartsPrimitive.AreaChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Pattern Analysis:</strong> You prefer morning workouts (7-8 AM)
       and evening sessions (6 PM), with Tuesday being your most active day.
      </p>
     </div>
    </Card>

    {/* Exercise Duration by Type */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Exercise Duration by Type
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.RadarChart data={exerciseDurationByType}>
        <RechartsPrimitive.PolarGrid />
        <RechartsPrimitive.PolarAngleAxis dataKey="type" />
        <RechartsPrimitive.PolarRadiusAxis angle={90} domain={[0, 60]} />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Radar
         name="Average Duration"
         dataKey="avgDuration"
         stroke="#3b82f6"
         fill="#3b82f6"
         fillOpacity={0.3}
        />
       </RechartsPrimitive.RadarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 flex justify-center space-x-6">
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
       <span className="text-sm text-gray-600">Average Duration (min)</span>
      </div>
     </div>
    </Card>
   </div>
  </div>
 );
}

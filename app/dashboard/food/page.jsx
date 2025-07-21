"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as RechartsPrimitive from "recharts";

export default function FoodPage() {
 // Mock data based on your database structure
 const recentFoods = [
  {
   name: "Oatmeal with berries",
   carbs: 45,
   calories: 250,
   meal: "breakfast",
   time: "8:00 AM",
  },
  {
   name: "Grilled chicken breast",
   carbs: 0,
   calories: 280,
   meal: "lunch",
   time: "12:30 PM",
  },
  {
   name: "Brown rice",
   carbs: 35,
   calories: 170,
   meal: "lunch",
   time: "12:30 PM",
  },
  {
   name: "Greek yogurt",
   carbs: 15,
   calories: 120,
   meal: "snack",
   time: "3:00 PM",
  },
  {
   name: "Salmon fillet",
   carbs: 0,
   calories: 350,
   meal: "dinner",
   time: "6:30 PM",
  },
  { name: "Broccoli", carbs: 8, calories: 35, meal: "dinner", time: "6:30 PM" },
 ];

 const dailyCarbData = [
  { date: "Mon", carbs: 165, target: 150, glucose: 140 },
  { date: "Tue", carbs: 180, target: 150, glucose: 155 },
  { date: "Wed", carbs: 142, target: 150, glucose: 125 },
  { date: "Thu", carbs: 175, target: 150, glucose: 150 },
  { date: "Fri", carbs: 160, target: 150, glucose: 135 },
  { date: "Sat", carbs: 190, target: 150, glucose: 165 },
  { date: "Sun", carbs: 155, target: 150, glucose: 145 },
 ];

 const mealDistributionData = [
  { meal: "Breakfast", carbs: 45, color: "#1d4ed8" },
  { meal: "Lunch", carbs: 60, color: "#3b82f6" },
  { meal: "Dinner", carbs: 55, color: "#60a5fa" },
  { meal: "Snacks", carbs: 25, color: "#93c5fd" },
 ];

 const foodGlucoseCorrelation = [
  { food: "Oatmeal", carbs: 45, glucose_2hr: 165, meal_type: "breakfast" },
  { food: "Pasta", carbs: 55, glucose_2hr: 180, meal_type: "dinner" },
  { food: "Apple", carbs: 25, glucose_2hr: 140, meal_type: "snack" },
  { food: "Chicken", carbs: 0, glucose_2hr: 110, meal_type: "lunch" },
  { food: "Bread", carbs: 30, glucose_2hr: 155, meal_type: "breakfast" },
  { food: "Yogurt", carbs: 15, glucose_2hr: 125, meal_type: "snack" },
  { food: "Rice", carbs: 35, glucose_2hr: 160, meal_type: "lunch" },
  { food: "Salmon", carbs: 0, glucose_2hr: 105, meal_type: "dinner" },
 ];

 const nutritionalBalance = [
  { nutrient: "Carbs", value: 45, max: 60, color: "#3b82f6" },
  { nutrient: "Protein", value: 25, max: 30, color: "#1d4ed8" },
  { nutrient: "Fat", value: 20, max: 35, color: "#60a5fa" },
  { nutrient: "Fiber", value: 15, max: 25, color: "#93c5fd" },
  { nutrient: "Sugar", value: 12, max: 20, color: "#dbeafe" },
 ];

 const topCarbFoods = [
  { food: "Pasta", totalCarbs: 275, servings: 5 },
  { food: "Oatmeal", totalCarbs: 225, servings: 5 },
  { food: "Rice", totalCarbs: 175, servings: 5 },
  { food: "Bread", totalCarbs: 150, servings: 5 },
  { food: "Apple", totalCarbs: 125, servings: 5 },
  { food: "Yogurt", totalCarbs: 75, servings: 5 },
 ];

 const mealTimingData = [
  { time: "6:00", breakfast: 20, lunch: 0, dinner: 0, snack: 0 },
  { time: "7:00", breakfast: 45, lunch: 0, dinner: 0, snack: 0 },
  { time: "8:00", breakfast: 60, lunch: 0, dinner: 0, snack: 10 },
  { time: "9:00", breakfast: 25, lunch: 0, dinner: 0, snack: 15 },
  { time: "10:00", breakfast: 5, lunch: 0, dinner: 0, snack: 20 },
  { time: "11:00", breakfast: 0, lunch: 10, dinner: 0, snack: 15 },
  { time: "12:00", breakfast: 0, lunch: 70, dinner: 0, snack: 5 },
  { time: "13:00", breakfast: 0, lunch: 45, dinner: 0, snack: 10 },
  { time: "14:00", breakfast: 0, lunch: 15, dinner: 0, snack: 25 },
  { time: "15:00", breakfast: 0, lunch: 5, dinner: 0, snack: 30 },
  { time: "16:00", breakfast: 0, lunch: 0, dinner: 0, snack: 20 },
  { time: "17:00", breakfast: 0, lunch: 0, dinner: 10, snack: 15 },
  { time: "18:00", breakfast: 0, lunch: 0, dinner: 65, snack: 5 },
  { time: "19:00", breakfast: 0, lunch: 0, dinner: 55, snack: 10 },
  { time: "20:00", breakfast: 0, lunch: 0, dinner: 25, snack: 15 },
  { time: "21:00", breakfast: 0, lunch: 0, dinner: 5, snack: 20 },
 ];

 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Food & Nutrition</h1>

    {/* Recent Food Log */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
     {recentFoods.map((food, index) => (
      <Card
       key={index}
       className="p-4 border-blue-100 bg-gradient-to-br from-blue-50 to-white"
      >
       <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800 text-sm">{food.name}</h3>
        <Badge className="bg-blue-100 text-blue-800">{food.meal}</Badge>
       </div>
       <p className="text-xs text-gray-600 mb-2">{food.time}</p>
       <div className="flex justify-between text-sm">
        <span className="text-blue-700">{food.carbs}g carbs</span>
        <span className="text-blue-600">{food.calories} cal</span>
       </div>
      </Card>
     ))}
    </div>

    {/* Daily Carb Intake vs Glucose */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Daily Carb Intake vs Glucose Response
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.LineChart data={dailyCarbData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="date" />
        <RechartsPrimitive.YAxis
         yAxisId="left"
         label={{ value: "Carbs (g)", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.YAxis
         yAxisId="right"
         orientation="right"
         label={{
          value: "Glucose (mg/dL)",
          angle: 90,
          position: "insideRight",
         }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Line
         yAxisId="left"
         type="monotone"
         dataKey="carbs"
         stroke="#3b82f6"
         strokeWidth={3}
         name="Carbs (g)"
        />
        <RechartsPrimitive.Line
         yAxisId="left"
         type="monotone"
         dataKey="target"
         stroke="#93c5fd"
         strokeWidth={2}
         strokeDasharray="5 5"
         name="Target Carbs"
        />
        <RechartsPrimitive.Line
         yAxisId="right"
         type="monotone"
         dataKey="glucose"
         stroke="#1d4ed8"
         strokeWidth={2}
         name="Avg Glucose"
        />
       </RechartsPrimitive.LineChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Insight:</strong> Your carb intake correlates with glucose
       levels. Days with higher carbs show elevated glucose responses.
      </p>
     </div>
    </Card>

    {/* Meal Distribution */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Carb Distribution by Meal
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.PieChart>
        <RechartsPrimitive.Pie
         data={mealDistributionData}
         cx="50%"
         cy="50%"
         innerRadius={60}
         outerRadius={120}
         paddingAngle={5}
         dataKey="carbs"
         label={({ meal, carbs }) => `${meal}: ${carbs}g`}
        >
         {mealDistributionData.map((entry, index) => (
          <RechartsPrimitive.Cell key={`cell-${index}`} fill={entry.color} />
         ))}
        </RechartsPrimitive.Pie>
        <RechartsPrimitive.Tooltip />
       </RechartsPrimitive.PieChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="flex justify-center mt-4 space-x-4">
      {mealDistributionData.map((meal, index) => (
       <div key={index} className="flex items-center space-x-2">
        <div
         className="w-3 h-3 rounded-full"
         style={{ backgroundColor: meal.color }}
        ></div>
        <span className="text-sm text-gray-600">{meal.meal}</span>
       </div>
      ))}
     </div>
    </Card>

    {/* Food-Glucose Correlation */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Food Impact on 2-Hour Glucose
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.ScatterChart data={foodGlucoseCorrelation}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis
         dataKey="carbs"
         label={{ value: "Carbs (g)", position: "bottom" }}
        />
        <RechartsPrimitive.YAxis
         dataKey="glucose_2hr"
         label={{
          value: "2-hr Glucose (mg/dL)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.Tooltip
         formatter={(value, name) => [value, name]}
         labelFormatter={(label) => `${foodGlucoseCorrelation[label]?.food}`}
        />
        <RechartsPrimitive.Scatter dataKey="glucose_2hr" fill="#3b82f6" />
       </RechartsPrimitive.ScatterChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Key Finding:</strong> Higher carb foods correlate with higher
       2-hour glucose readings. Protein-rich foods show minimal glucose impact.
      </p>
     </div>
    </Card>

    {/* Top Carb Foods */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Top Carb Contributors This Week
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.BarChart data={topCarbFoods}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="food" />
        <RechartsPrimitive.YAxis
         label={{
          value: "Total Carbs (g)",
          angle: -90,
          position: "insideLeft",
         }}
        />
        <RechartsPrimitive.Bar
         dataKey="totalCarbs"
         fill="#3b82f6"
         name="Total Carbs (g)"
         radius={[4, 4, 0, 0]}
        />
       </RechartsPrimitive.BarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {topCarbFoods.map((food, index) => (
       <div key={index} className="p-3 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 text-sm">{food.food}</h3>
        <p className="text-xs text-blue-600">
         {food.totalCarbs}g total • {food.servings} servings
        </p>
       </div>
      ))}
     </div>
    </Card>

    {/* Nutritional Balance Radar */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Daily Nutritional Balance
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.RadarChart data={nutritionalBalance}>
        <RechartsPrimitive.PolarGrid />
        <RechartsPrimitive.PolarAngleAxis dataKey="nutrient" />
        <RechartsPrimitive.PolarRadiusAxis angle={90} domain={[0, "dataMax"]} />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Radar
         name="Current"
         dataKey="value"
         stroke="#3b82f6"
         fill="#3b82f6"
         fillOpacity={0.3}
        />
        <RechartsPrimitive.Radar
         name="Target"
         dataKey="max"
         stroke="#93c5fd"
         fill="transparent"
         strokeDasharray="5 5"
        />
       </RechartsPrimitive.RadarChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 flex justify-center space-x-6">
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
       <span className="text-sm text-gray-600">Current Intake</span>
      </div>
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 border-2 border-blue-300 rounded-full"></div>
       <span className="text-sm text-gray-600">Target Range</span>
      </div>
     </div>
    </Card>

    {/* Meal Timing Heatmap */}
    <Card className="p-6 border-blue-100">
     <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Meal Timing Patterns
     </h2>
     <div className="h-[300px] w-full">
      <RechartsPrimitive.ResponsiveContainer>
       <RechartsPrimitive.AreaChart data={mealTimingData}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey="time" />
        <RechartsPrimitive.YAxis
         label={{ value: "Carbs (g)", angle: -90, position: "insideLeft" }}
        />
        <RechartsPrimitive.Tooltip />
        <RechartsPrimitive.Legend />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="breakfast"
         stackId="1"
         stroke="#1d4ed8"
         fill="#1d4ed8"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="lunch"
         stackId="1"
         stroke="#3b82f6"
         fill="#3b82f6"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="dinner"
         stackId="1"
         stroke="#60a5fa"
         fill="#60a5fa"
        />
        <RechartsPrimitive.Area
         type="monotone"
         dataKey="snack"
         stackId="1"
         stroke="#93c5fd"
         fill="#93c5fd"
        />
       </RechartsPrimitive.AreaChart>
      </RechartsPrimitive.ResponsiveContainer>
     </div>
     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
       <strong>Pattern Analysis:</strong> Your meal timing shows healthy
       distribution with peak carb intake at traditional meal times.
      </p>
     </div>
    </Card>
   </div>
  </div>
 );
}

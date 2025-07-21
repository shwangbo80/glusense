"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

export default function Settings() {
 const [activeTab, setActiveTab] = useState("profile");

 // Mock data based on profiles table
 const userProfile = {
  id: "70911de0-1a1b-4552-babe-9e35e699bad1",
  email: "john.doe@example.com",
  full_name: "John Doe",
  avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  date_of_birth: "1985-03-15",
  gender: "male",
  diabetes_type: "type2",
  diagnosis_date: "2020-01-15",
  height_cm: 175,
  weight_kg: 80.5,
  target_glucose_min: 80,
  target_glucose_max: 180,
  timezone: "America/New_York",
  units_glucose: "mg/dL",
  units_weight: "kg",
  is_caregiver: false,
 };

 const tabs = [
  { id: "profile", label: "Personal Profile" },
  { id: "glucose", label: "Glucose Settings" },
  { id: "device", label: "Device Settings" },
  { id: "notifications", label: "Notifications" },
  { id: "display", label: "Display & Units" },
  { id: "privacy", label: "Privacy & Data" },
  { id: "emergency", label: "Emergency Contacts" },
  { id: "goals", label: "Health Goals" },
  { id: "account", label: "Account" },
 ];

 const renderDeviceSettings = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Smart Glass Display</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Brightness Level
       </label>
       <Slider defaultValue={[75]} max={100} step={5} className="w-full" />
       <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>Low</span>
        <span>75%</span>
        <span>High</span>
       </div>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Contrast</label>
       <Slider defaultValue={[80]} max={100} step={5} className="w-full" />
       <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>Low</span>
        <span>80%</span>
        <span>High</span>
       </div>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Display Mode</label>
       <Select defaultValue="auto">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="auto">Auto (Ambient)</SelectItem>
         <SelectItem value="indoor">Indoor</SelectItem>
         <SelectItem value="outdoor">Outdoor</SelectItem>
         <SelectItem value="night">Night Mode</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Text Size</label>
       <Select defaultValue="medium">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="small">Small</SelectItem>
         <SelectItem value="medium">Medium</SelectItem>
         <SelectItem value="large">Large</SelectItem>
         <SelectItem value="xlarge">Extra Large</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Always-On Display</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Auto-Hide UI</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Blue Light Filter</span>
       <Switch />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Audio Settings</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">Volume Level</label>
       <Slider defaultValue={[60]} max={100} step={5} className="w-full" />
       <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>Mute</span>
        <span>60%</span>
        <span>Max</span>
       </div>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Alert Sound</label>
       <Select defaultValue="gentle">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="gentle">Gentle Chime</SelectItem>
         <SelectItem value="beep">Standard Beep</SelectItem>
         <SelectItem value="voice">Voice Alert</SelectItem>
         <SelectItem value="vibrate">Vibration Only</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Voice Commands</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Audio Feedback</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Directional Audio</span>
       <Switch defaultChecked />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Camera & Sensors</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Food Recognition</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Medication Scanning</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Exercise Detection</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Environment Monitoring</span>
       <Switch />
      </div>
      <div className="flex items-center justify-between">
       <span>Gesture Controls</span>
       <Switch defaultChecked />
      </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
       <label className="block text-sm font-medium mb-2">Camera Quality</label>
       <Select defaultValue="high">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="low">Low (Battery Save)</SelectItem>
         <SelectItem value="medium">Medium</SelectItem>
         <SelectItem value="high">High</SelectItem>
         <SelectItem value="ultra">Ultra (High Battery)</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Sensor Frequency
       </label>
       <Select defaultValue="normal">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="low">Low (1 min)</SelectItem>
         <SelectItem value="normal">Normal (30 sec)</SelectItem>
         <SelectItem value="high">High (10 sec)</SelectItem>
         <SelectItem value="realtime">Real-time</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">AI Assistant</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Predictive Glucose Alerts</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Smart Meal Suggestions</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Exercise Recommendations</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Medication Reminders</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Proactive Health Tips</span>
       <Switch />
      </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
       <label className="block text-sm font-medium mb-2">AI Sensitivity</label>
       <Select defaultValue="balanced">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="conservative">Conservative</SelectItem>
         <SelectItem value="balanced">Balanced</SelectItem>
         <SelectItem value="aggressive">Aggressive</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Learning Mode</label>
       <Select defaultValue="adaptive">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="off">Off</SelectItem>
         <SelectItem value="basic">Basic</SelectItem>
         <SelectItem value="adaptive">Adaptive</SelectItem>
         <SelectItem value="advanced">Advanced</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Connectivity & Sync</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>WiFi Auto-Connect</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Bluetooth Pairing</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Cloud Sync</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Offline Mode</span>
       <Switch />
      </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
       <label className="block text-sm font-medium mb-2">Sync Frequency</label>
       <Select defaultValue="realtime">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="manual">Manual</SelectItem>
         <SelectItem value="hourly">Hourly</SelectItem>
         <SelectItem value="realtime">Real-time</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Data Usage</label>
       <Select defaultValue="standard">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="minimal">Minimal</SelectItem>
         <SelectItem value="standard">Standard</SelectItem>
         <SelectItem value="unlimited">Unlimited</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Battery & Performance</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Power Saving Mode</span>
       <Switch />
      </div>
      <div className="flex items-center justify-between">
       <span>Auto Sleep</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Background App Refresh</span>
       <Switch defaultChecked />
      </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Performance Mode
       </label>
       <Select defaultValue="balanced">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="battery">Battery Saver</SelectItem>
         <SelectItem value="balanced">Balanced</SelectItem>
         <SelectItem value="performance">High Performance</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Auto Sleep Timer
       </label>
       <Select defaultValue="5min">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="1min">1 minute</SelectItem>
         <SelectItem value="5min">5 minutes</SelectItem>
         <SelectItem value="10min">10 minutes</SelectItem>
         <SelectItem value="30min">30 minutes</SelectItem>
         <SelectItem value="never">Never</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Security & Privacy</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Biometric Lock</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Voice Recognition</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Eye Tracking Lock</span>
       <Switch />
      </div>
      <div className="flex items-center justify-between">
       <span>Auto Lock</span>
       <Switch defaultChecked />
      </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
       <label className="block text-sm font-medium mb-2">Lock Timeout</label>
       <Select defaultValue="5min">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="immediate">Immediate</SelectItem>
         <SelectItem value="1min">1 minute</SelectItem>
         <SelectItem value="5min">5 minutes</SelectItem>
         <SelectItem value="15min">15 minutes</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Privacy Mode</label>
       <Select defaultValue="standard">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="public">Public</SelectItem>
         <SelectItem value="standard">Standard</SelectItem>
         <SelectItem value="private">Private</SelectItem>
         <SelectItem value="stealth">Stealth</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderPersonalProfile = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Basic Information</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">Full Name</label>
       <Input defaultValue={userProfile.full_name} />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Email</label>
       <Input defaultValue={userProfile.email} />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Date of Birth</label>
       <Input type="date" defaultValue={userProfile.date_of_birth} />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Gender</label>
       <Select defaultValue={userProfile.gender}>
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="male">Male</SelectItem>
         <SelectItem value="female">Female</SelectItem>
         <SelectItem value="other">Other</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Diabetes Information</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">Diabetes Type</label>
       <Select defaultValue={userProfile.diabetes_type}>
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="type1">Type 1</SelectItem>
         <SelectItem value="type2">Type 2</SelectItem>
         <SelectItem value="gestational">Gestational</SelectItem>
         <SelectItem value="mody">MODY</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Diagnosis Date</label>
       <Input type="date" defaultValue={userProfile.diagnosis_date} />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Height (cm)</label>
       <Input type="number" defaultValue={userProfile.height_cm} />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Weight (kg)</label>
       <Input type="number" defaultValue={userProfile.weight_kg} step="0.1" />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Healthcare Team</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Primary Care Doctor
       </label>
       <Input placeholder="Dr. Jane Smith" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Endocrinologist</label>
       <Input placeholder="Dr. Michael Johnson" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Diabetes Educator
       </label>
       <Input placeholder="Sarah Wilson, RN" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Pharmacy</label>
       <Input placeholder="CVS Pharmacy - Main St" />
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderGlucoseSettings = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Target Glucose Ranges</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Target Minimum (mg/dL)
       </label>
       <Input type="number" defaultValue={userProfile.target_glucose_min} />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Target Maximum (mg/dL)
       </label>
       <Input type="number" defaultValue={userProfile.target_glucose_max} />
      </div>
     </div>
     <div className="mt-4">
      <label className="block text-sm font-medium mb-2">
       Time-in-Range Goal (%)
      </label>
      <Slider defaultValue={[70]} max={100} step={1} className="w-full" />
      <div className="flex justify-between text-sm text-gray-500 mt-1">
       <span>0%</span>
       <span>70%</span>
       <span>100%</span>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Alert Thresholds</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Low Glucose Alert (mg/dL)
       </label>
       <Input type="number" defaultValue="70" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        High Glucose Alert (mg/dL)
       </label>
       <Input type="number" defaultValue="200" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Critical Low (mg/dL)
       </label>
       <Input type="number" defaultValue="54" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Critical High (mg/dL)
       </label>
       <Input type="number" defaultValue="250" />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Testing Schedule</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Fasting (Morning)</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Before Meals</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>2 Hours After Meals</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Bedtime</span>
       <Switch />
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderNotifications = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Medication Reminders</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Metformin - 8:00 AM</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Metformin - 8:00 PM</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Insulin - Before meals</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Refill Reminders</span>
       <Switch defaultChecked />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Glucose Testing Reminders</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Morning Fasting - 7:00 AM</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Before Lunch - 12:00 PM</span>
       <Switch />
      </div>
      <div className="flex items-center justify-between">
       <span>Before Dinner - 6:00 PM</span>
       <Switch />
      </div>
      <div className="flex items-center justify-between">
       <span>Post-meal Testing</span>
       <Switch defaultChecked />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Health Reminders</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Exercise Reminders</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Food Logging</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Appointment Reminders</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>HbA1c Test Due</span>
       <Switch defaultChecked />
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderDisplaySettings = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Units & Measurements</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">Glucose Units</label>
       <Select defaultValue={userProfile.units_glucose}>
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="mg/dL">mg/dL</SelectItem>
         <SelectItem value="mmol/L">mmol/L</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Weight Units</label>
       <Select defaultValue={userProfile.units_weight}>
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="kg">Kilograms (kg)</SelectItem>
         <SelectItem value="lbs">Pounds (lbs)</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Height Units</label>
       <Select defaultValue="cm">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="cm">Centimeters (cm)</SelectItem>
         <SelectItem value="ft">Feet & Inches</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Temperature Units
       </label>
       <Select defaultValue="celsius">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="celsius">Celsius (°C)</SelectItem>
         <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Dashboard Layout</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Show Glucose Chart</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Show Medication Adherence</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Show Exercise Summary</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Show Food Log</span>
       <Switch />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Regional Settings</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">Timezone</label>
       <Select defaultValue={userProfile.timezone}>
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="America/New_York">Eastern Time</SelectItem>
         <SelectItem value="America/Chicago">Central Time</SelectItem>
         <SelectItem value="America/Denver">Mountain Time</SelectItem>
         <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
        </SelectContent>
       </Select>
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">Date Format</label>
       <Select defaultValue="MM/DD/YYYY">
        <SelectTrigger>
         <SelectValue />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
         <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
         <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderEmergencyContacts = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Emergency Contacts</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Primary Emergency Contact
       </label>
       <Input placeholder="Name" />
       <Input placeholder="Phone" className="mt-2" />
       <Input placeholder="Relationship" className="mt-2" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Secondary Emergency Contact
       </label>
       <Input placeholder="Name" />
       <Input placeholder="Phone" className="mt-2" />
       <Input placeholder="Relationship" className="mt-2" />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Medical Information</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div>
      <label className="block text-sm font-medium mb-2">Allergies</label>
      <textarea
       className="w-full p-2 border border-gray-300 rounded-md"
       rows="3"
       placeholder="List any allergies to medications or foods"
      />
     </div>
     <div>
      <label className="block text-sm font-medium mb-2">
       Other Medical Conditions
      </label>
      <textarea
       className="w-full p-2 border border-gray-300 rounded-md"
       rows="3"
       placeholder="List other medical conditions"
      />
     </div>
     <div>
      <label className="block text-sm font-medium mb-2">
       Emergency Medications
      </label>
      <textarea
       className="w-full p-2 border border-gray-300 rounded-md"
       rows="2"
       placeholder="Glucagon kit, emergency insulin, etc."
      />
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderHealthGoals = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Diabetes Management Goals</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Target HbA1c (%)
       </label>
       <Input type="number" defaultValue="7.0" step="0.1" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Time-in-Range Goal (%)
       </label>
       <Input type="number" defaultValue="70" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Weight Goal (kg)
       </label>
       <Input type="number" defaultValue="75" step="0.1" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Exercise Goal (min/week)
       </label>
       <Input type="number" defaultValue="150" />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Medication Goals</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium mb-2">
        Adherence Goal (%)
       </label>
       <Input type="number" defaultValue="95" />
      </div>
      <div>
       <label className="block text-sm font-medium mb-2">
        Testing Frequency (per day)
       </label>
       <Input type="number" defaultValue="4" />
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderPrivacySettings = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Data Sharing</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex items-center justify-between">
       <span>Share data with healthcare team</span>
       <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between">
       <span>Allow caregiver access</span>
       <Switch defaultChecked={userProfile.is_caregiver} />
      </div>
      <div className="flex items-center justify-between">
       <span>Participate in research studies</span>
       <Switch />
      </div>
      <div className="flex items-center justify-between">
       <span>Anonymous data for improvements</span>
       <Switch defaultChecked />
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Data Management</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <Button variant="outline" className="w-full">
       Export All Data
      </Button>
      <Button variant="outline" className="w-full">
       Download Report (PDF)
      </Button>
      <Button variant="outline" className="w-full">
       Backup Settings
      </Button>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderAccountSettings = () => (
  <div className="space-y-6">
   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Account Security</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <Button variant="outline" className="w-full">
       Change Password
      </Button>
      <div className="flex items-center justify-between">
       <span>Two-Factor Authentication</span>
       <Switch />
      </div>
      <Button variant="outline" className="w-full">
       View Login History
      </Button>
     </div>
    </CardContent>
   </Card>

   <Card className="border-blue-100">
    <CardHeader>
     <CardTitle className="text-blue-800">Subscription</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <div className="flex justify-between">
       <span>Current Plan:</span>
       <Badge className="bg-blue-100 text-blue-800">Premium</Badge>
      </div>
      <div className="flex justify-between">
       <span>Next Billing:</span>
       <span>Jan 15, 2025</span>
      </div>
      <Button variant="outline" className="w-full">
       Manage Subscription
      </Button>
     </div>
    </CardContent>
   </Card>

   <Card className="border-red-100">
    <CardHeader>
     <CardTitle className="text-red-800">Danger Zone</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
     <div className="space-y-3">
      <Button variant="outline" className="w-full text-red-600 border-red-300">
       Delete All Data
      </Button>
      <Button variant="outline" className="w-full text-red-600 border-red-300">
       Delete Account
      </Button>
     </div>
    </CardContent>
   </Card>
  </div>
 );

 const renderTabContent = () => {
  switch (activeTab) {
   case "profile":
    return renderPersonalProfile();
   case "glucose":
    return renderGlucoseSettings();
   case "device":
    return renderDeviceSettings();
   case "notifications":
    return renderNotifications();
   case "display":
    return renderDisplaySettings();
   case "privacy":
    return renderPrivacySettings();
   case "emergency":
    return renderEmergencyContacts();
   case "goals":
    return renderHealthGoals();
   case "account":
    return renderAccountSettings();
   default:
    return renderPersonalProfile();
  }
 };

 return (
  <div className="w-full">
   <div className="p-6 space-y-8 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

    <div className="flex flex-col lg:flex-row gap-6">
     {/* Sidebar Navigation */}
     <div className="lg:w-64 bg-white rounded-lg border border-blue-100 p-4">
      <nav className="space-y-2">
       {tabs.map((tab) => (
        <button
         key={tab.id}
         onClick={() => setActiveTab(tab.id)}
         className={`w-full text-left p-3 rounded-md transition-colors ${
          activeTab === tab.id
           ? "bg-blue-50 text-blue-700 font-medium"
           : "text-gray-600 hover:bg-gray-50"
         }`}
        >
         <span className="mr-2">{tab.icon}</span>
         {tab.label}
        </button>
       ))}
      </nav>
     </div>

     {/* Main Content */}
     <div className="flex-1">
      {renderTabContent()}

      {/* Save Button */}
      <div className="mt-8 flex justify-end space-x-4">
       <Button variant="outline">Cancel</Button>
       <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

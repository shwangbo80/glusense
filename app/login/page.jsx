"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
 const [error, setError] = useState("");
 const [form, setForm] = useState({ email: "", password: "" });

 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  if (error) setError("");
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (form.email === "demo@email.com" && form.password === "password") {
   window.location.href = "/dashboard";
  } else {
   setError("Invalid email or password.");
  }
 };

 return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full space-y-8">
    {/* Header */}
    <div className="text-center">
     <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
     <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
    </div>

    {/* Login Form */}
    <Card className="shadow-lg border-0">
     <CardHeader className="space-y-1 pb-6">
      <CardTitle className="text-2xl font-semibold text-center text-gray-900">
       Sign In
      </CardTitle>
     </CardHeader>
     <CardContent className="space-y-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
       {/* Error Message */}
       {error && (
        <div className="text-red-600 text-sm font-medium mb-2 text-center">
         {error}
        </div>
       )}
       {/* Email Input */}
       <div>
        <label
         htmlFor="email"
         className="block text-sm font-medium text-gray-700 mb-1"
        >
         Email address
        </label>
        <Input
         id="email"
         name="email"
         type="email"
         required
         placeholder="Enter your email"
         value={form.email}
         onChange={handleChange}
         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
       </div>

       {/* Password Input */}
       <div>
        <label
         htmlFor="password"
         className="block text-sm font-medium text-gray-700 mb-1"
        >
         Password
        </label>
        <Input
         id="password"
         name="password"
         type="password"
         required
         placeholder="Enter your password"
         value={form.password}
         onChange={handleChange}
         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
       </div>

       {/* Remember Me & Forgot Password */}
       <div className="flex items-center justify-between">
        <div className="flex items-center">
         <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
         />
         <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-700"
         >
          Remember me
         </label>
        </div>
        <div className="text-sm">
         <a
          href="#"
          className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
         >
          Forgot your password?
         </a>
        </div>
       </div>

       {/* Sign In Button */}
       <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
       >
        Sign in
       </Button>
       {/* Divider */}
       <div className="relative">
        <div className="absolute inset-0 flex items-center">
         <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm mt-5">
         <span className="px-2 bg-white text-gray-500">Demo Credentials</span>
        </div>
       </div>
      </form>

      {/* Sign Up Link */}
      <div className="text-center">
       <p className="text-sm text-gray-600">Email: demo@email.com</p>
       <p className="text-sm text-gray-600">Password: password</p>
      </div>
     </CardContent>
    </Card>
   </div>
  </div>
 );
}

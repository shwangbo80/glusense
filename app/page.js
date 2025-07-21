"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
 useEffect(() => {
  const observerOptions = {
   root: null,
   rootMargin: "0px",
   threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
     entry.target.classList.add("animate-fade-in-up");
     entry.target.classList.remove("opacity-0", "translate-y-8");
    }
   });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(".scroll-animate");
  animatedElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
 }, []);

 return (
  <div className="min-h-screen bg-white">
   {/* Navigation */}
   <nav className="bg-white shadow-sm border-b border-blue-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
       <div className="flex-shrink-0">
        <img
         className="h-8 w-auto"
         src="/placeholder-logo.svg"
         alt="GluSense"
        />
       </div>{" "}
       <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
         <a
          href="#"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
         >
          AI Software
         </a>
         <a
          href="#"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
         >
          Smart Glass Integration
         </a>
         <a
          href="#"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
         >
          For Caregivers
         </a>
         <a
          href="#"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
         >
          Technology
         </a>
        </div>
       </div>
      </div>
      <div className="flex items-center space-x-4">
       <Link
        href="/login"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
       >
        Login
       </Link>
       <a
        href="#"
        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
       >
        Get Early Access
       </a>
      </div>
     </div>
    </div>
   </nav>

   {/* Hero Section */}
   <section className="bg-gradient-to-br from-blue-25 to-blue-50 h-screen flex items-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
     <div className="text-center">
      <div className="text-8xl font-bold text-blue-600">GluSense</div>
      <div className="text-4xl md:text-4xl font-bold text-gray-900 my-10">
       AI-Powered Diabetes Management <br />
       Software for Smart Glass Devices
      </div>
      <p className="text-2xl text-gray-600 mb-13 max-w-2xl mx-auto">
       <span className="font-bold text-blue-700">
        Turn any smart glasses into your personal diabetes coach.
       </span>
       <br />
       AI that sees what you eat, reminds you to take medicine, and predicts
       your glucose, all hands-free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <a
        href="#"
        className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 shadow-md"
       >
        Request Beta Access
       </a>
       <a
        href="#"
        className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50"
       >
        See Software Demo
       </a>
      </div>
     </div>
    </div>
    {/* Parallax Background Pattern */}
    <div className="absolute inset-0 opacity-5 ">
     <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
     <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-500"></div>
     <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-1000"></div>
    </div>
   </section>

   {/* Hero Image Section */}
   <section className="mb-20">
    <div className="w-full mx-auto">
     <div className="flex justify-center">
      <div className="w-full scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
       <img
        src="/assets/images/glusense_ui.jpg"
        alt="GluSense Smart Glass Technology"
        className="w-full h-auto shadow-2xl"
        onLoad={() => console.log("Image loaded successfully")}
        onError={(e) => console.error("Image failed to load:", e)}
       />
      </div>
     </div>
    </div>
   </section>

   {/* Testimonials */}
   <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <h2 className="max-w-3xl mx-auto text-3xl font-bold text-center text-gray-900 mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
      Early testers and diabetes patients are already experiencing the benefits
      of GluSense's AI-powered healthcare management
     </h2>
     <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
       <p className="text-gray-700 text-lg mb-4">
        "GluSense running on my smart glasses is incredible! It automatically
        detects when I'm eating and reminds me to take my insulin. I never miss
        a dose anymore, and my glucose levels are stable."
       </p>
       <div className="flex items-center">
        <img
         className="h-15 w-15 rounded-full border-2 border-blue-200"
         src="/assets/images/avatars/img-2.png"
         alt=""
        />
        <div className="ml-3">
         <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
         <p className="text-sm text-gray-600">Type 2 Diabetes Patient</p>
        </div>
       </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
       <p className="text-gray-700 text-lg mb-4">
        "GluSense recognizes my food automatically and calculates carbs
        instantly. I can see my glucose predictions in real-time on the display.
        It's like having a personal diabetes coach with me 24/7."
       </p>
       <div className="flex items-center">
        <img
         className="h-15 w-15 rounded-full border-2 border-blue-200"
         src="/assets/images/avatars/img-1.png"
         alt=""
        />
        <div className="ml-3">
         <p className="text-sm font-medium text-gray-900">Michael Chen</p>
         <p className="text-sm text-gray-600">Type 1 Diabetes Patient</p>
        </div>
       </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
       <p className="text-gray-700 text-lg mb-4">
        "As a caregiver, I can monitor my father's activity through the GluSense
        dashboard. The system alerts me if he's had unusual glucose patterns or
        missed medications. It gives me incredible peace of mind."
       </p>
       <div className="flex items-center">
        <img
         className="h-15 w-15 rounded-full border-2 border-blue-200"
         src="/assets/images/avatars/img-3.png  "
         alt=""
        />
        <div className="ml-3">
         <p className="text-sm font-medium text-gray-900">Lisa Rodriguez</p>
         <p className="text-sm text-gray-600">Family Caregiver</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Features Section */}
   <section className="py-16 bg-blue-25">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
       GluSense: Advanced AI Software for Smart Glass Devices
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
       Our intelligent GluSense platform integrates seamlessly with existing
       smart glass hardware to deliver comprehensive diabetes management through
       cutting-edge artificial intelligence and computer vision technology.
      </p>
     </div>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150">
       <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg
         className="h-8 w-8 text-blue-600"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
         />
         <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 12h8M12 8v8"
         />
        </svg>
       </div>
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Automatic Food Recognition
       </h3>
       <p className="text-gray-600 text-lg">
        GluSense's advanced AI algorithms analyze camera feeds to recognize
        meals instantly, calculate carbohydrates, and provide real-time
        nutrition data without manual input.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
       <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg
         className="h-8 w-8 text-blue-600"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={2} />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 10h10M7 14h6"
         />
         <circle cx="17" cy="10" r="1" fill="currentColor" />
         <circle cx="17" cy="14" r="1" fill="currentColor" />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v3M12 18v3"
         />
        </svg>
       </div>
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Smart Medication Tracking
       </h3>
       <p className="text-gray-600 text-lg">
        GluSense's intelligent software recognizes medications visually and
        tracks adherence automatically, with smart reminders delivered through
        the smart glass interface.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
       <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg
         className="h-8 w-8 text-blue-600"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
         />
         <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.3" />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 8l8 8M16 8l-8 8"
         />
        </svg>
       </div>
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Activity Monitoring
       </h3>
       <p className="text-gray-600 text-lg">
        GluSense's AI software processes sensor data and visual cues to
        continuously monitor physical activity, with intelligent glucose impact
        analysis and personalized recommendations.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150">
       <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg
         className="h-8 w-8 text-blue-600"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
         />
         <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 8v4l2 2"
         />
        </svg>
       </div>
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Predictive AI Analytics
       </h3>
       <p className="text-gray-600 text-lg">
        GluSense's sophisticated machine learning models analyze patterns and
        predict glucose trends, providing proactive AI-driven recommendations
        for optimal diabetes management.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
       <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg
         className="h-8 w-8 text-blue-600"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <rect x="3" y="4" width="18" height="12" rx="1" strokeWidth={2} />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8l4 4 6-6"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 20h8"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 16v4"
         />
         <circle cx="6" cy="10" r="1" fill="currentColor" />
         <circle cx="18" cy="10" r="1" fill="currentColor" />
        </svg>
       </div>
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Real-Time Dashboard
       </h3>
       <p className="text-gray-600 text-lg">
        GluSense's comprehensive software dashboard provides live glucose
        monitoring, trend analysis, and health insights through an intuitive
        augmented reality interface.
       </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
       <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg
         className="h-8 w-8 text-blue-600"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-5 5V17z"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6.5 2H20v20l-5.5-6"
         />
         <circle cx="8" cy="8" r="2" strokeWidth={1.5} />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 8h4M12 12h2"
         />
        </svg>
       </div>
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Intelligent Alerts
       </h3>
       <p className="text-gray-600 text-lg">
        GluSense's AI-powered notification system delivers context-aware alerts
        for glucose levels, medication times, and health events through smart
        voice and visual interfaces.
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* Footer */}
   <footer className="bg-gray-50 text-gray-700 py-12 border-t border-blue-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="grid md:grid-cols-4 gap-8">
      <div>
       <h3 className="text-lg font-semibold mb-4 text-gray-900">AI Software</h3>
       <ul className="space-y-2">
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Machine Learning
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Computer Vision
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Predictive Analytics
         </a>
        </li>
       </ul>
      </div>
      <div>
       <h3 className="text-lg font-semibold mb-4 text-gray-900">Features</h3>
       <ul className="space-y-2">
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Food Recognition
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Medication Tracking
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Activity Monitoring
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Smart Glass Integration
         </a>
        </li>
       </ul>
      </div>
      <div>
       <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
       <ul className="space-y-2">
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Help Center
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Getting Started
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Contact Us
         </a>
        </li>
       </ul>
      </div>
      <div>
       <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
       <ul className="space-y-2">
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Privacy Policy
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          Terms of Service
         </a>
        </li>
        <li>
         <a href="#" className="text-gray-600 hover:text-blue-600">
          HIPAA Compliance
         </a>
        </li>
       </ul>
      </div>
     </div>
     <div className="border-t border-blue-100 mt-8 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
       <p className="text-gray-500">© 2025 GluSense. All rights reserved.</p>
       <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-gray-500 hover:text-blue-600">
         Facebook
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-600">
         Twitter
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-600">
         Instagram
        </a>
       </div>
      </div>
     </div>
    </div>
   </footer>
  </div>
 );
}

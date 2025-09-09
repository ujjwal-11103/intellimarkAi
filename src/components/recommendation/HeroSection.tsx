import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-2xl shadow-lg">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Intelligent Recommendation
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent block">
              Analytics Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with data-driven insights, smart recommendations, 
            and comprehensive performance tracking across all channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a
              href="#get-started"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Get Started
            </a> */}
            <a
              href="https://outlook.office.com/bookwithme/user/e8ee839cd0224fb7bbc88d3de0f0e74a@intellimark.ai/meetingtype/X5VsiCFLD0O0S7V9WOBTyQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">Talk to an Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" /></span>
            </a>
            {/* <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              Talk to an Expert
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
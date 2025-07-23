// src/components/ProductDetails.js
import React from 'react';
import {
  TrendingUp,
  Target,
  BarChart3,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Award,
  TrendingDown,
  Star,
  Play,
  ChevronRight,
  Search,
  Menu,
  Bell,
  User,
  Database,
  Brain,
  LineChart,
  PieChart,
  Activity,
  Layers,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

const ProductDetail = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-purple-100/80 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
                NEXT-GENERATION OF AI INSIGHTS
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Imagine AI be
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    procurement platform
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Cost-effective solution to generate powerful AI price and procurement insights. What will you create?
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 max-w-sm">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search insight for AI forecast..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
                  <option>Replicate</option>
                </select>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all font-medium text-sm">
                  Generate
                </button>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Popular Tags:</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">Business</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">Intelligence</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">Commodities</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-gray-900">AI Forecast Dashboard</h3>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">+12.5%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-xl font-bold">94%</div>
                    <div className="text-purple-100 text-xs">Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div className="text-xl font-bold">25%</div>
                    <div className="text-blue-100 text-xs">Savings</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Steel Prices</span>
                    <span className="text-purple-700 font-semibold text-sm">$850/ton ↓ 5%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Aluminum</span>
                    <span className="text-blue-700 font-semibold text-sm">$2,100/ton ↑ 3%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Copper</span>
                    <span className="text-green-700 font-semibold text-sm">$8,500/ton ↓ 8%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-8 -left-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden aspect-square">
                <div className="relative z-10"><div className="text-2xl font-bold mb-1">25%</div><div className="text-purple-100 text-sm">Cost Reduction</div></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden aspect-square">
                <div className="relative z-10"><div className="text-2xl font-bold mb-1">90%</div><div className="text-blue-100 text-sm">Forecast Accuracy</div></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden aspect-square">
                <div className="relative z-10"><div className="text-2xl font-bold mb-1">80%</div><div className="text-green-100 text-sm">Faster Decisions</div></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden aspect-square">
                <div className="relative z-10"><div className="text-2xl font-bold mb-1">50%</div><div className="text-orange-100 text-sm">Risk Reduction</div></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections like WhatWeDo, BusinessProblem, WorkingProcess, etc. go here... */}
      {/* For brevity, I'm omitting the rest of the sections, but you would paste them all sequentially within this component. */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Join leading organizations using AI to optimize their procurement operations and reduce costs by up to 25%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 font-medium text-sm flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-purple-300 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm flex items-center justify-center">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full"></div>
      </section>
    </>
  );
};

export default ProductDetail;
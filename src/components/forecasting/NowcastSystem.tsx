import React from 'react';
import { TrendingUp, Package, AlertTriangle, Globe } from 'lucide-react';

const NowcastSystem = () => {
  const components = [
    { name: 'Forecasting', icon: <TrendingUp className="w-6 h-6" />, position: 'top', color: 'from-purple-500 to-violet-500' },
    { name: 'Inventory', icon: <Package className="w-6 h-6" />, position: 'right', color: 'from-violet-500 to-indigo-500' },
    { name: 'Sensing Volatility', icon: <AlertTriangle className="w-6 h-6" />, position: 'bottom', color: 'from-indigo-500 to-purple-500' },
    { name: 'External Factors', icon: <Globe className="w-6 h-6" />, position: 'left', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-violet-50 via-white to-purple-50 p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nowcast
          </h1>
          <p className="text-xl text-gray-600">
            Integrated Strategy for Demand Management
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-96 h-96">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-48 h-48 bg-white rounded-full shadow-2xl border-4 border-purple-200 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-3">Nowcast</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outer Ring */}
            {/* Outer Ring */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 384 384">
                  <circle
                    cx="192"
                    cy="192"
                    r="144"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeDasharray="20 10"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>


            {/* Component Circles */}
            {components.map((component, index) => {
              const positions = {
                top: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                right: 'top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2',
                bottom: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
                left: 'top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2'
              };

              return (
                <div key={index} className={`absolute ${positions[component.position]} z-10`}>
                  <div className="group cursor-pointer">
                    <div className="w-32 h-32 bg-white rounded-full shadow-xl border-3 border-purple-200 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                      <div className="text-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white shadow-lg`}>
                          {component.icon}
                        </div>
                        <div className="font-semibold text-sm text-gray-900 leading-tight">
                          {component.name.split(' ').map((word, i) => (
                            <div key={i}>{word}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {components.map((component, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center mb-4`}>
                {component.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{component.name}</h3>
              <p className="text-sm text-gray-600">
                {component.name === 'Forecasting' && 'Advanced predictive analytics for demand planning'}
                {component.name === 'Inventory' && 'Optimal stock level management and optimization'}
                {component.name === 'Sensing Volatility' && 'Real-time anomaly detection and alerts'}
                {component.name === 'External Factors' && 'Market intelligence and external signal processing'}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NowcastSystem;
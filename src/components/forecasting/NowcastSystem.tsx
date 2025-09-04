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
    <div className="bg-gradient-to-br from-violet-50 via-white to-purple-50 p-4 sm:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Nowcast
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            Integrated Strategy for Demand Management
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-36 h-36 sm:w-48 sm:h-48 bg-white rounded-full shadow-2xl border-4 border-purple-200 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Nowcast</div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outer Ring */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 384 384">
                <circle
                  cx="192"
                  cy="192"
                  r="120"
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
              const positions: Record<'top'|'right'|'bottom'|'left', string> = {
                top: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                right: 'top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2',
                bottom: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
                left: 'top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2'
              };

              // Ensure position is typed as one of the keys
              const pos = component.position as 'top'|'right'|'bottom'|'left';
              return (
                <div key={index} className={`absolute ${positions[pos]} z-10`}>
                  <div className="group cursor-pointer">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-xl border-3 border-purple-200 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                      <div className="text-center">
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r ${component.color} rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center text-white shadow-lg`}>
                          {component.icon}
                        </div>
                        <div className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight">
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

        {/* Feature Cards (optional for mobile) */}
        {/* ...existing code... */}
      </div>
    </div>
  );
};

export default NowcastSystem;
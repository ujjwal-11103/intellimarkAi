import React from 'react';
import { BarChart3, TrendingUp, MapPin } from 'lucide-react';

const metrics = [
  {
    id: 'outlet-performance',
    title: 'Outlet Performance',
    description: 'Track individual outlet metrics',
    icon: BarChart3,
    value: '95%',
    change: '+12%',
    trend: 'up'
  },
  {
    id: 'success-tracking',
    title: 'Success Tracking',
    description: 'Monitor recommendation success',
    icon: TrendingUp,
    value: '87%',
    change: '+8%',
    trend: 'up'
  },
  {
    id: 'territory-analysis',
    title: 'Territory Analysis',
    description: 'Geographic performance insights',
    icon: MapPin,
    value: '72%',
    change: '+15%',
    trend: 'up'
  }
];

export function PerformanceAnalysis() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Performance Analysis
          </h2>
          <p className="text-gray-600 text-lg">
            Track success and optimize performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.id} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-green-600 font-medium">{metric.change}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                  
                  <div className="mt-4 bg-gray-50 rounded-lg p-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-500"
                        style={{ width: metric.value }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
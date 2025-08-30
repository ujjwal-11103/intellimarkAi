import React from 'react';
import { Database, Link, BarChart3, Target } from 'lucide-react';

const steps = [
  {
    id: 'data',
    title: 'DATA',
    subtitle: 'Historical Sales Data',
    icon: Database,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'connect',
    title: 'CONNECT',
    subtitle: 'Integration Layer',
    icon: Link,
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 'analyze',
    title: 'ANALYZE',
    subtitle: 'Smart Analysis',
    icon: BarChart3,
    color: 'from-purple-700 to-purple-800'
  },
  {
    id: 'act',
    title: 'ACT',
    subtitle: 'Action Items',
    icon: Target,
    color: 'from-purple-800 to-purple-900'
  }
];

export function ProcessFlow() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3-Pronged Approach to Drive Topline
          </h2>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Process Flow</h3>
            <p className="text-gray-600">Data-driven decision making pipeline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  <div className="group cursor-pointer">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className={`bg-gradient-to-br ${step.color} p-4 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-center text-sm">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-300 to-purple-400"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight, Database, Brain, Target, TrendingUp, Zap, BarChart3 } from 'lucide-react';

const TeresaSystem = () => {
  const dataTypes = [
    { name: 'Historical Sales', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Market Data', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Demographics', icon: <Target className="w-5 h-5" /> },
    { name: 'Promotions', icon: <Zap className="w-5 h-5" /> },
    { name: 'External Signals', icon: <Database className="w-5 h-5" /> }
  ];

  const forecastTypes = [
    { title: 'Macro Demand', subtitle: 'State × SKU × Month', color: 'bg-purple-50 border-purple-200' },
    { title: 'Nowcasting', subtitle: 'Customer × SKU × Week', color: 'bg-violet-50 border-violet-200' },
    { title: 'Inventory Planning', subtitle: 'Depot × SKU × Week', color: 'bg-indigo-50 border-indigo-200' }
  ];

  const benefits = [
    'Efficient Planning',
    'Service Level Optimization',
    'Marketing ROI Enhancement',
    'Revenue Forecasting'
  ];

  // Connector (smaller line + arrow)
  const Connector = () => (
    <div className="flex items-center flex-none mx-2">
      <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full" />
      <ArrowRight className="w-5 h-5 text-purple-500 ml-1" />
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-violet-50 p-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teresa
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Integrated Multi-granularity Forecasting Engine
          </p>
        </div>

        {/* Flex row on large screens, stack on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

          {/* Data Sources */}
          <div className="group w-80 flex-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Data Sources</h3>
              </div>
              <div className="space-y-4">
                {dataTypes.map((data, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="text-purple-600">{data.icon}</div>
                    <span className="text-gray-700 font-medium">{data.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <Connector />

          {/* AI Engine */}
          <div className="group w-80 flex-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI Engine</h3>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Feature', 'Forecast', 'Simulate', 'Optimize'].map((step, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-lg p-3 text-center border border-purple-200">
                      <span className="text-sm font-semibold text-purple-800">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Explainable AI</h4>
                  <p className="text-xs text-purple-700">
                    Causal impact attribution for external factors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <Connector />

          {/* Outputs */}
          <div className="group w-80 flex-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Multi-dimensional Forecasts</h3>
              </div>

              <div className="space-y-4 mb-6">
                {forecastTypes.map((forecast, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${forecast.color} hover:scale-105 transition-transform`}>
                    <div className="font-semibold text-gray-900 text-sm">{forecast.title}</div>
                    <div className="text-xs text-gray-600 font-medium">{forecast.subtitle}</div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 mb-3">Key Benefits</h4>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeresaSystem;

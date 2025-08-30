import React from 'react';
import { TrendingUp, Layers, Zap } from 'lucide-react';

const CompetitiveAdvantageSection = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Non-Linear Impact & Optimization",
      description: "Understand impact of promotions, media, pricing, weather and external factors on short/medium term forecasting."
    },
    {
      icon: Layers,
      title: "Highly Accurate & Hierarchical Design",
      description: "Advanced feature engineering and highly accurate forecast at multiple granularities lead to best mix of cost and accuracy."
    },
    {
      icon: Zap,
      title: "Integrated Forecasting & Sensing",
      description: "Integrated module for forecasting, sensing and early detection of anomalies for better realization and quick response."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How are we 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              {' '}better than others?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Dashed Border Circle */}
              <div className="relative w-full h-80 rounded-full border-4 border-dashed border-purple-300 p-8 hover:border-purple-500 transition-all duration-300">
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed px-4">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageSection;
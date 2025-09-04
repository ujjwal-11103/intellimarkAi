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
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            How are we
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              {' '}better than others?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative group flex justify-center"
            >
              {/* Dashed Border Circle */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-dashed border-purple-300 p-6 sm:p-8 hover:border-purple-500 transition-all duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 sm:space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2 sm:px-4">
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
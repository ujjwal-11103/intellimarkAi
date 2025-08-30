import React from 'react';
import { TrendingUp, ShoppingCart, MapPin, BarChart3 } from 'lucide-react';

const recommendations = [
  {
    id: 'upselling',
    title: 'Upselling',
    description: 'Next best products for existing outlets',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    id: 'cross-selling',
    title: 'Cross Selling',
    description: 'New products to increase AOV',
    icon: ShoppingCart,
    gradient: 'from-purple-600 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50'
  },
  {
    id: 'whitespaces',
    title: 'Whitespaces',
    description: 'New geographic launch opportunities',
    icon: MapPin,
    gradient: 'from-purple-700 to-blue-600',
    bgGradient: 'from-purple-50 to-blue-50'
  }
];

export function RecommendationEngine() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recommendation Engine
          </h2>
          <p className="text-gray-600 text-lg">
            Intelligent insights powered by integrated data analysis
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl shadow-lg border border-purple-100">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl mb-6 mx-auto w-fit">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Integrated System
              </h3>
              <p className="text-gray-600 mb-2">Retailer + Geography</p>
              <p className="text-gray-500 text-sm">Recommendation Engine</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-2xl transition-all duration-300 hover:scale-105 border border-purple-100 hover:shadow-xl`}>
                  <div className={`bg-gradient-to-br ${item.gradient} p-4 rounded-xl mb-6 w-fit group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
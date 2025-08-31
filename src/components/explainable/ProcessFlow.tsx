import React from 'react';
import { TrendingUp, DollarSign, Award, Settings, ArrowRight, Target, Zap, BarChart3 } from 'lucide-react';

export const ProcessFlow = () => {
  const inputCategories = [
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Competition Analysis",
      color: "bg-purple-100 border-purple-200",
      items: ["Price Whitespaces", "Pack Prices", "Kantar Analysis", "Market Share", "Affluence Index"]
    },
    {
      icon: <DollarSign className="w-4 h-4" />,
      title: "Market Dynamics", 
      color: "bg-blue-100 border-blue-200",
      items: ["Gain/Loss Analysis", "Share Growth", "Consumer Affluence", "Category Trends"]
    },
    {
      icon: <Award className="w-4 h-4" />,
      title: "Brand Portfolio",
      color: "bg-green-100 border-green-200",
      items: ["JTBD Framework", "Portfolio Power", "Penetration/WTD", "Channel Strategy"]
    },
    {
      icon: <Settings className="w-4 h-4" />,
      title: "Financial Constraints",
      color: "bg-orange-100 border-orange-200",
      items: ["Margin Analysis", "Budget Allocation", "ROI Targets", "Cost Constraints"]
    }
  ];

  const processSteps = [
    {
      phase: "CONNECT",
      title: "Data Integration",
      description: "Mapping and preparation for micro-market segments",
      details: ["Multi-source data integration", "Segment identification", "Quality validation"],
      color: "bg-purple-600"
    },
    {
      phase: "ANALYZE",
      title: "Advanced Analytics",
      description: "ML-driven insights and impact modeling",
      details: ["S-Curve Analysis", "Incentive Impact", "Price Elasticity", "Causal Attribution"],
      color: "bg-purple-700"
    },
    {
      phase: "ACT",
      title: "Strategic Execution",
      description: "Actionable recommendations and optimization",
      details: ["Growth pocket identification", "Price optimization", "Portfolio recommendations"],
      color: "bg-purple-800"
    }
  ];

  const outcomes = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "High Growth Pockets",
      description: "Identify untapped revenue opportunities",
      metrics: ["15-25% revenue uplift", "Market expansion"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Pricing Strategy",
      description: "Data-driven product development",
      metrics: ["Maximize growth", "Simulate against competitive prices"]
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Promo Strategy",
      description: "Scalable business constraints",
      metrics: ["Find the right schemes and slabs", "Optimize straight spends"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            NRM Principles: Business-First ML Process Flow
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Integrating traditional NRM expertise with next-generation machine learning for actionable revenue optimization
          </p>
        </div>

        {/* Main Process Flow */}
        <div className="grid grid-cols-12 gap-6 items-start mb-12">
          {/* Input Categories */}
          <div className="col-span-3 space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-4 text-center">Data Inputs</h3>
            {inputCategories.map((category, index) => (
              <div key={index} className={`${category.color} rounded-lg p-3 border transition-all hover:shadow-md`}>
                <div className="flex items-center mb-2">
                  <div className="text-gray-700 mr-2">{category.icon}</div>
                  <h4 className="font-medium text-gray-800 text-xs">{category.title}</h4>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-gray-600 bg-white/60 rounded px-2 py-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="col-span-6 space-y-4">
            <h3 className="font-semibold text-gray-800 text-sm mb-4 text-center">ML Process Pipeline</h3>
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className={`${step.color} text-white px-4 py-2`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">{step.phase}</span>
                      <span className="text-xs opacity-90">{step.title}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 mb-3">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-2 mb-2">
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Outcomes */}
          <div className="col-span-3 space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-4 text-center">Strategic Outcomes</h3>
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-4 text-white shadow-lg">
                <div className="flex items-center mb-2">
                  {outcome.icon}
                  <h4 className="font-semibold text-sm ml-2">{outcome.title}</h4>
                </div>
                <p className="text-xs text-purple-100 mb-3">{outcome.description}</p>
                <div className="space-y-1">
                  {outcome.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-xs bg-white/20 rounded px-2 py-1">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
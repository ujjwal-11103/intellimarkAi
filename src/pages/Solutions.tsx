import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  BarChart3, 
  Shield, 
  Zap, 
  Search, 
  Cpu,
  Database,
  Network,
  Smartphone,
  Cloud,
  Gem,
  Crown,
  ArrowRight
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      name: "Neural Intelligence Platform",
      description: "Advanced deep learning models for predictive analytics and cognitive automation with enterprise-grade scalability.",
      features: ["Deep Learning Models", "Predictive Analytics", "Cognitive Automation", "Real-time Processing"],
      color: "from-blue-500 to-cyan-600",
      premium: true
    },
    {
      icon: MessageSquare,
      name: "Conversational AI Suite",
      description: "Enterprise-grade chatbots and virtual assistants with natural language mastery and multi-channel deployment.",
      features: ["Natural Language Processing", "Multi-channel Support", "Intent Recognition", "Context Awareness"],
      color: "from-green-500 to-emerald-600",
      premium: true
    },
    {
      icon: Eye,
      name: "Computer Vision Excellence",
      description: "Advanced image and video analysis for automation, quality assurance, and intelligent monitoring systems.",
      features: ["Image Recognition", "Video Analytics", "Object Detection", "Quality Assurance"],
      color: "from-purple-500 to-violet-600",
      premium: true
    },
    {
      icon: BarChart3,
      name: "Business Intelligence Engine",
      description: "AI-driven insights and predictive reporting for strategic decision making and operational excellence.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
      color: "from-orange-500 to-amber-600",
      premium: false
    },
    {
      icon: Shield,
      name: "Cybersecurity AI Defense",
      description: "Advanced threat detection and autonomous response systems with machine learning-powered security.",
      features: ["Threat Detection", "Anomaly Detection", "Automated Response", "Risk Assessment"],
      color: "from-red-500 to-rose-600",
      premium: true
    },
    {
      icon: Search,
      name: "Semantic Search Intelligence",
      description: "Next-generation search and content discovery with contextual understanding and intelligent ranking.",
      features: ["Semantic Understanding", "Content Discovery", "Intelligent Ranking", "Multi-language Support"],
      color: "from-indigo-500 to-blue-600",
      premium: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Gem className="h-12 w-12 text-amber-600" />
            <Crown className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-stone-800">AI Solutions</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI-powered solutions designed to transform your enterprise operations, 
            enhance decision-making, and drive unprecedented growth across all business functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/50 hover:border-amber-200 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    {solution.premium && (
                      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PREMIUM
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {solution.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-stone-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center space-x-2 text-amber-700 font-semibold group-hover:text-amber-800 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg">
            <h3 className="text-3xl font-bold text-stone-800 mb-6">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can be tailored to your specific business needs 
              and drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-stone-300 text-stone-700 px-12 py-4 rounded-2xl hover:bg-stone-50 hover:border-amber-600 hover:text-amber-700 transition-all duration-300 font-bold text-lg">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
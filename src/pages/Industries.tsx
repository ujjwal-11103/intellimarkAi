import React from 'react';
import { 
  Building, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Car, 
  Plane, 
  Factory, 
  GraduationCap,
  Truck,
  Home,
  Zap,
  Gamepad2,
  Crown,
  Star,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      name: "Healthcare & Life Sciences",
      description: "Revolutionary AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support systems.",
      solutions: ["AI-Powered Medical Imaging", "Drug Discovery Acceleration", "Patient Risk Stratification", "Clinical Decision Intelligence"],
      caseStudy: "Reduced diagnostic time by 60% for a leading hospital network",
      color: "from-red-500 to-pink-600",
      value: "$2.5B+ Value Created",
      premium: true
    },
    {
      icon: DollarSign,
      name: "Financial Services",
      description: "Advanced AI for fraud detection, algorithmic trading, risk management, and customer analytics in the financial sector.",
      solutions: ["Quantum Fraud Detection", "Algorithmic Trading Intelligence", "Risk Management AI", "Customer Analytics Suite"],
      caseStudy: "Prevented $500M in fraudulent transactions for major bank",
      color: "from-green-500 to-emerald-600",
      value: "$3.8B+ Risk Mitigation",
      premium: true
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Intelligent solutions for demand forecasting, price optimization, personalization, and supply chain management.",
      solutions: ["Demand Forecasting AI", "Dynamic Price Optimization", "Personalization Engines", "Supply Chain Intelligence"],
      caseStudy: "Increased revenue by 35% through AI-driven personalization",
      color: "from-purple-500 to-violet-600",
      value: "$1.9B+ Revenue Growth",
      premium: false
    },
    {
      icon: Car,
      name: "Automotive Innovation",
      description: "Cutting-edge AI for autonomous systems, predictive maintenance, quality control, and manufacturing optimization.",
      solutions: ["Autonomous Systems AI", "Predictive Maintenance", "Quality Control Automation", "Supply Chain Optimization"],
      caseStudy: "Reduced manufacturing defects by 45% for automotive leader",
      color: "from-blue-500 to-cyan-600",
      value: "$4.2B+ Cost Savings",
      premium: true
    },
    {
      icon: Factory,
      name: "Manufacturing Excellence",
      description: "Smart manufacturing solutions with process optimization, quality assurance, equipment monitoring, and demand planning.",
      solutions: ["Process Optimization AI", "Quality Assurance Systems", "Equipment Monitoring", "Demand Planning Intelligence"],
      caseStudy: "Improved operational efficiency by 40% across 50+ facilities",
      color: "from-orange-500 to-amber-600",
      value: "$2.1B+ Efficiency Gains",
      premium: false
    },
    {
      icon: Plane,
      name: "Aerospace & Defense",
      description: "Mission-critical AI for flight optimization, maintenance prediction, safety analytics, and fuel efficiency systems.",
      solutions: ["Flight Optimization AI", "Maintenance Prediction", "Safety Analytics Platform", "Fuel Efficiency Systems"],
      caseStudy: "Reduced fuel costs by $200M annually for major airline",
      color: "from-indigo-500 to-blue-600",
      value: "$5.5B+ Operational Excellence",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Crown className="h-12 w-12 text-amber-600" />
            <Building className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-stone-800">Industry-Leading</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h1>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Tailored AI solutions designed to address specific challenges and unlock unprecedented 
            opportunities across diverse industries and business sectors.
          </p>
        </div>

        <div className="space-y-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 hover:border-amber-200 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-12 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-3xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                              {industry.name}
                            </h3>
                            {industry.premium && (
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-amber-600 fill-current" />
                                <span className="text-amber-600 text-xs font-bold">PREMIUM</span>
                              </div>
                            )}
                          </div>
                          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl p-3 border border-amber-200 inline-block">
                            <p className="text-amber-700 font-bold">{industry.value}</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 text-lg leading-relaxed mb-6">
                        {industry.description}
                      </p>
                      
                      <div className="bg-stone-50/80 rounded-xl p-4 border border-stone-200 mb-6">
                        <p className="text-stone-700 font-semibold italic">
                          "{industry.caseStudy}"
                        </p>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-amber-700 font-semibold group-hover:text-amber-800 transition-colors duration-300">
                        <span>View Case Studies</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-stone-800 mb-6">Key Solutions</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-stone-200/50 hover:border-amber-200 transition-all duration-300">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-stone-700 font-medium text-sm">{solution}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg">
            <h3 className="text-3xl font-bold text-stone-800 mb-6">Don't See Your Industry?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              We work across all sectors and can customize our AI solutions for your specific industry needs. 
              Let's discuss how we can transform your business.
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105">
              Book Industry Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
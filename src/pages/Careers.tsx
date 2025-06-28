import React from 'react';
import { Users, Trophy, Zap, Heart, ArrowRight, Crown, Star, Gem, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Industry Leadership",
      description: "Work with cutting-edge AI technology and lead innovation in the global market"
    },
    {
      icon: Zap,
      title: "Exponential Growth",
      description: "Accelerate your career in a fast-growing company with unlimited potential and impact"
    },
    {
      icon: Users,
      title: "Elite Collaboration",
      description: "Join a diverse team of brilliant minds working towards revolutionary goals"
    },
    {
      icon: Heart,
      title: "Premium Benefits",
      description: "Enjoy flexible work arrangements, comprehensive benefits, and equity participation"
    }
  ];

  const positions = [
    {
      title: "Senior AI Architect",
      department: "Engineering Excellence",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$200K - $350K",
      description: "Lead the design and implementation of enterprise-scale AI architectures for Fortune 500 clients.",
      requirements: ["10+ years in AI/ML", "PhD in Computer Science preferred", "Enterprise architecture experience"],
      premium: true
    },
    {
      title: "Principal ML Research Scientist",
      department: "Research & Innovation",
      location: "Remote / Global",
      type: "Full-time",
      salary: "$250K - $400K",
      description: "Drive breakthrough research in machine learning and publish findings in top-tier conferences.",
      requirements: ["PhD in ML/AI", "50+ publications", "Industry research experience"],
      premium: true
    },
    {
      title: "AI Solutions Director",
      department: "Professional Services",
      location: "New York, NY",
      type: "Full-time",
      salary: "$180K - $300K",
      description: "Lead client engagements and deliver transformative AI solutions for enterprise customers.",
      requirements: ["MBA preferred", "10+ years consulting", "AI implementation experience"],
      premium: false
    },
    {
      title: "Lead Data Scientist",
      department: "Analytics & Intelligence",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$160K - $280K",
      description: "Develop advanced analytics models and drive data-driven insights for business growth.",
      requirements: ["MS in Data Science", "8+ years experience", "Python/R expertise"],
      premium: false
    },
    {
      title: "VP of AI Product Strategy",
      department: "Product Leadership",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$300K - $500K",
      description: "Define product vision and strategy for next-generation AI platforms and solutions.",
      requirements: ["15+ years product management", "AI product experience", "Leadership track record"],
      premium: true
    },
    {
      title: "Enterprise Success Director",
      department: "Customer Excellence",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$140K - $250K",
      description: "Ensure customer success and drive expansion within our enterprise client base.",
      requirements: ["Customer success experience", "Enterprise software background", "Relationship management"],
      premium: false
    }
  ];

  const perks = [
    "Competitive salary + equity",
    "Comprehensive health benefits",
    "Flexible work arrangements",
    "Professional development budget",
    "Conference speaking opportunities",
    "Innovation time (20% projects)",
    "Wellness programs",
    "Relocation assistance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Gem className="h-12 w-12 text-amber-600" />
            <Users className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-stone-800">Join Our</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Elite Team
            </span>
          </h1>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Be part of the AI revolution. Join exceptional individuals who are passionate about solving 
            complex problems and shaping the future of enterprise technology.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group text-center">
                <div className="bg-white/80 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-stone-200/50 group-hover:border-amber-200 shadow-lg">
                  <IconComponent className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Open Positions</h2>
          
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/50 hover:border-amber-200 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h4 className="text-2xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                        {position.title}
                      </h4>
                      {position.premium && (
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                          <Star className="h-3 w-3 fill-current" />
                          <span>PREMIUM</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-stone-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span className="font-semibold">{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-semibold text-amber-700">{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-stone-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-stone-800 mb-2">Key Requirements:</h5>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-stone-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="ml-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold flex items-center space-x-2 group-hover:scale-105">
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks & Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Perks & Benefits</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-stone-50/80 rounded-xl border border-stone-200 hover:border-amber-200 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex-shrink-0"></div>
                  <span className="text-stone-700 font-medium">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-12 border border-amber-200/50 shadow-lg">
            <Crown className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-stone-800 mb-6">Don't See Your Dream Role?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              We're always seeking exceptional talent to join our elite team. Send us your portfolio 
              and let's explore how you can contribute to the future of AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105">
                Submit Your Portfolio
              </button>
              <button className="border-2 border-stone-300 text-stone-700 px-12 py-4 rounded-2xl hover:bg-stone-50 hover:border-amber-600 hover:text-amber-700 transition-all duration-300 font-bold text-lg">
                Contact Talent Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
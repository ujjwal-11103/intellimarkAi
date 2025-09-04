import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, Play, ChevronRight, Brain, Cpu, Database, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const dynamicWords = ['Revenue Growth', 'Operations Excellence', 'AI Innovation', 'Excellence'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, text: "Highly Accurate", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, text: "Growth First", color: "from-purple-500 to-pink-500" },
    { icon: Database, text: "Prescriptive AI", color: "from-green-500 to-emerald-500" }
  ];

  const stats = [
    { value: '10M+', label: 'Data Points Processed', icon: Database },
    { value: '20%', label: 'Higher Growth', icon: Target },
    { value: '5x', label: 'ROI Increase', icon: TrendingUp },
    { value: '50M+', label: 'Dollars Unlocked', icon: Zap }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Premium Badge */}
          <div className={`inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-xl border border-blue-200/30 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-2xl shadow-blue-600/10 transition-all duration-1000 hover:scale-105 hover:shadow-blue-600/20 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
            <Sparkles className="w-4 h-4 mr-2" />
            <Link to="/Forecasting" className="hover:underline hover:text-blue-900 transition-colors duration-200">
              Next-Gen Revenue Growth Management Platform.
            </Link>
            <ChevronRight className="w-4 h-4 ml-2" />
          </div>

          {/* Dynamic Main Heading */}
          <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-black mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent block mb-4">
              The Future of
            </span>
            <div className="relative h-28 xs:h-24 sm:h-24 md:h-24 overflow-hidden">
              {dynamicWords.map((word, index) => (
                <span
                  key={word}
                  className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent transition-all duration-1000 ${
                    index === currentWord 
                      ? 'opacity-100 translate-y-0' 
                      : index < currentWord 
                        ? 'opacity-0 -translate-y-full' 
                        : 'opacity-0 translate-y-full'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>

          {/* Enhanced Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
           Patented
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold">  Machine Learning Engines</span>. 
            coupled with decades of industry nuances leading to millions of dollars of growth for our clients. 
            <span className="text-blue-600 font-bold"> Results guaranteed to excel.</span>
          </p>

          {/* Modern Feature Pills */}
          <div className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div className="flex items-center px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200/30 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer">
                  <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-bold text-lg">{feature.text}</span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-600/30 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Book Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
            </button>

            {/* <button className="group flex items-center px-10 py-5 bg-white/90 backdrop-blur-xl text-gray-800 font-bold text-lg rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:text-blue-600 transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                <Play className="w-6 h-6 text-blue-600 ml-1" />
              </div>
              <span>Watch Live Demo</span>
            </button> */}
          </div>

          {/* Advanced Stats Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/30 hover:border-blue-300/50 transition-all duration-500 hover:shadow-xl hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 shadow-lg"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 shadow-lg"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-2000">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-50 shadow-lg"></div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float delay-3000">
        <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-45 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Hero;
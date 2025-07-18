import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Zap, TrendingUp, ShoppingCart, Pill, Factory } from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  accent: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    id: 'packeging-goods',
    name: 'Packaging Material ',
    description: 'B2B Demand Forecasting, Sales Alerts and Profitability Management System',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    color: '#1e40af',
    accent: '#3b82f6',
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    id: 'oil-lubricants',
    name: 'Oil and Lubricants',
    description: 'Store Recommendation System for Lubricant Brand',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    color: '#b45309',
    accent: '#f59e0b',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    description: 'Price Inflexion Point Study for Large FMCG Brand',
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    color: '#0f766e',
    accent: '#14b8a6',
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    id: 'chemicals',
    name: 'Chemicals',
    description: 'B2B Demand Forecasting, Sales Alerts and Profitability Management System for Chemical Industry',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    color: '#7c2d12',
    accent: '#ea580c',
    icon: <Pill className="w-8 h-8" />
  },
  {
    id: 'FMCG',
    name: 'FMCG',
    description: 'Tea Price Forecasting and Procurement Insights',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    color: '#166534',
    accent: '#22c55e',
    icon: <Factory className="w-8 h-8" />
  }
];

export default function IndustryShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (dir === 'next') {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
    }
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCardClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && hoveredIndex === null) {
        handleNavigation('next');
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, hoveredIndex]);

  const getCardWidth = (index: number) => {
    const isHovered = hoveredIndex === index;
    const isActive = activeIndex === index;
    const hasHover = hoveredIndex !== null;
    
    if (isHovered) return 'flex-[3]';
    if (hasHover) return 'flex-[0.5]';
    if (isActive && !hasHover) return 'flex-[2]';
    return 'flex-1';
  };

  const activeIndustry = industries[hoveredIndex ?? activeIndex];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full opacity-30 animate-float-reverse" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-25 animate-float-slow" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center pt-12 pb-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            Enabling AI solutions
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              across industries
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 font-light">
            Transforming businesses with intelligent automation and data-driven insights
          </p>
        </div>
      </div>

      {/* Main Cards Container */}
      <div className="relative z-10 h-[calc(100vh-280px)] px-8">
        <div className="flex h-full gap-4">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeIndex === index;
            const showContent = isHovered || (isActive && hoveredIndex === null);
            
            return (
              <div
                key={industry.id}
                className={`
                  ${getCardWidth(index)} 
                  transition-all duration-700 ease-out cursor-pointer group relative
                  ${isHovered ? 'z-30' : isActive ? 'z-20' : 'z-10'}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
              >
                {/* Card Container */}
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ 
                      background: `linear-gradient(135deg, ${industry.color}dd 0%, ${industry.color}aa 40%, ${industry.accent}bb 100%)`,
                      opacity: showContent ? 0.85 : 0.95
                    }}
                  />
                  
                  {/* Animated Network Pattern */}
                  {showContent && (
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 animate-network-pulse">
                        <div className="w-full h-full" style={{
                          backgroundImage: `radial-gradient(circle at 25% 25%, ${industry.accent} 2px, transparent 2px),
                                           radial-gradient(circle at 75% 75%, ${industry.accent} 1px, transparent 1px)`,
                          backgroundSize: '60px 60px, 40px 40px',
                          animation: 'network-flow 4s linear infinite'
                        }} />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    {/* Top Section - Icon and Title */}
                    <div className="flex flex-col items-start">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                        style={{ backgroundColor: industry.accent }}
                      >
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                      
                      {!showContent && (
                        <h3 className="text-white font-bold text-xl leading-tight drop-shadow-lg transform transition-all duration-500">
                          {industry.name}
                        </h3>
                      )}
                    </div>

                    {/* Expanded Content */}
                    {showContent && (
                      <div className="flex-1 flex flex-col justify-center animate-slide-up-delayed">
                        <h2 className="text-white font-bold text-3xl lg:text-4xl mb-6 leading-tight drop-shadow-lg">
                          {industry.name}
                        </h2>
                        
                        <p className="text-white/90 text-lg leading-relaxed mb-8 drop-shadow-sm">
                          {industry.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button 
                            className="group px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/30 hover:scale-105 flex items-center justify-center space-x-2"
                          >
                            <span>Explore Case Studies</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                          
                          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/20">
                            View Case Studies
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Bottom Section - Arrow indicator for non-expanded cards */}
                    {!showContent && (
                      <div className="flex justify-end">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: industry.accent }}
                        >
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigation('prev')}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm shadow-xl border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-110 z-40"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>

        <button
          onClick={() => handleNavigation('next')}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm shadow-xl border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-110 z-40"
        >
          <ChevronRight className="w-6 h-6 text-slate-700 group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`transition-all duration-500 rounded-full ${
              index === activeIndex 
                ? 'w-12 h-3 scale-110' 
                : 'w-3 h-3 hover:scale-125'
            }`}
            style={{
              backgroundColor: index === activeIndex ? industries[activeIndex].accent : '#cbd5e1'
            }}
          />
        ))}
      </div>
    </div>
  );
}
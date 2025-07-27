import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, ShoppingCart, TrendingUp, Pill, Factory } from 'lucide-react';

// Interfaces and data remain the same
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
    { id: 'packaging-goods', name: 'Packaging Material', description: 'B2B Demand Forecasting, Sales Alerts and Profitability Management System.', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop', color: '#1e40af', accent: '#3b82f6', icon: <ShoppingCart className="w-8 h-8" /> },
    { id: 'oil-lubricants', name: 'Oil and Lubricants', description: 'Store Recommendation System for Lubricant Brands.', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop', color: '#b45309', accent: '#f59e0b', icon: <TrendingUp className="w-8 h-8" /> },
    { id: 'consumer-goods', name: 'Consumer Goods', description: 'Price Inflexion Point Study for a Large FMCG Brand.', image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop', color: '#0f766e', accent: '#14b8a6', icon: <ShoppingCart className="w-8 h-8" /> },
    { id: 'chemicals', name: 'Chemicals', description: 'B2B Demand Forecasting and Sales Alerts for the Chemical Industry.', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop', color: '#7c2d12', accent: '#ea580c', icon: <Pill className="w-8 h-8" /> },
    { id: 'fmcg', name: 'FMCG', description: 'Tea Price Forecasting and Procurement Insights.', image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop', color: '#166534', accent: '#22c55e', icon: <Factory className="w-8 h-8" /> }
];

export default function IndustryShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => dir === 'next' ? (prev + 1) % industries.length : (prev - 1 + industries.length) % industries.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCardClick = (index: number) => {
    if (isAnimating) return;
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
    if (isActive) return 'flex-[2]';
    return 'flex-1';
  };

  return (
    <section className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="relative z-10 text-center pt-12 pb-8 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
          Enabling AI solutions
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            across industries
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Transforming businesses with intelligent automation and data-driven insights.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative">
        {/* Desktop Expanding Flexbox View (hidden on mobile) */}
        <div className="hidden lg:flex h-full gap-4 px-8 pb-20">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeIndex === index;
            const showContent = isHovered || (isActive && hoveredIndex === null);
            return (
              <div
                key={industry.id}
                className={`${getCardWidth(index)} transition-all duration-700 ease-out group relative`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${industry.image})` }} />
                  <div className="absolute inset-0 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${industry.color}dd, ${industry.color}aa, ${industry.accent}bb)`, opacity: showContent ? 0.85 : 0.95 }} />
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: industry.accent }}>
                        <div className="text-white">{industry.icon}</div>
                      </div>
                      {!showContent && <h3 className="text-white font-bold text-lg leading-tight">{industry.name}</h3>}
                    </div>
                    {showContent && (
                      <div className="flex-1 flex flex-col justify-end text-white">
                        <h3 className="font-bold text-3xl mb-4">{industry.name}</h3>
                        <p className="text-white/90 mb-6">{industry.description}</p>
                        <button className="group self-start flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold transition-all duration-300 hover:bg-white/30">
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Slider View (hidden on desktop) */}
        <div className="lg:hidden h-full relative overflow-hidden">
          <div className="absolute inset-0 flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {industries.map((industry) => (
              <div key={industry.id} className="w-full h-full flex-shrink-0 p-4">
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${industry.image})` }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${industry.color}dd, ${industry.color}aa, ${industry.accent}bb)` }} />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="font-bold text-3xl mb-4">{industry.name}</h3>
                    <p className="text-white/90 mb-6">{industry.description}</p>
                    <button className="group self-start flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold transition-all duration-300 hover:bg-white/30">
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows for all screen sizes */}
        <button onClick={() => handleNavigation('prev')} disabled={isAnimating} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm shadow-lg border border-white/50 rounded-full flex items-center justify-center transition disabled:opacity-50 z-30">
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>
        <button onClick={() => handleNavigation('next')} disabled={isAnimating} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm shadow-lg border border-white/50 rounded-full flex items-center justify-center transition disabled:opacity-50 z-30">
          <ChevronRight className="w-6 h-6 text-slate-700" />
        </button>
      </div>

      {/* Bottom Indicators */}
      <div className="relative z-20 flex justify-center space-x-3 py-4">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`transition-all duration-500 rounded-full ${activeIndex === index ? 'w-8 h-2.5' : 'w-2.5 h-2.5 hover:scale-125'}`}
            style={{ backgroundColor: activeIndex === index ? industries[activeIndex].accent : '#cbd5e1' }}
          />
        ))}
      </div>
    </section>
  );
}